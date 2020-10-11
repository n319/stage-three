using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DAL;
using DAL.Models.Content;
using Microsoft.Extensions.Configuration;
using System.IO;
using System.Net;
using System.Text;
using SampleApp.Utilities;
using System.Net.Http.Headers;
using Microsoft.EntityFrameworkCore.Storage;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
    [ApiController]
    public class ImageRecordsController : ControllerBase
    {
        private readonly ContentDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly long _fileSizeLimit;
        private readonly string[] _permittedExtensions = { ".txt", ".jpg", ".gif", ".png", ".pdf", "doc", ".docx", ".xls", ".xlsx" };
        private readonly string _targetFilePath;
        

        public ImageRecordsController(ContentDbContext context, IConfiguration config)
        {
            _context = context;

            _fileSizeLimit = config.GetValue<long>("FileSizeLimit");

            // To save physical files to a path provided by configuration:
            _targetFilePath = config.GetValue<string>("StoredImagesPath");
            
            _configuration = config;

            // To save physical files to the temporary files folder, use:
            //_targetFilePath = Path.GetTempPath();
        }

        // GET: api/ImageRecords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ImageRecord>>> GetImages()
        {
            return await _context.Images.ToListAsync();
        }

        // GET: api/ImageRecords/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ImageRecord>> GetImageRecord(int id)
        {
            var imageRecord = await _context.Images.FindAsync(id);

            if (imageRecord == null)
            {
                return NotFound();
            }

            return imageRecord;
        }

        // PUT: api/ImageRecords/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutImageRecord(int id, ImageRecord imageRecord)
        {
            if (id != imageRecord.Id)
            {
                return BadRequest();
            }

            _context.Entry(imageRecord).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImageRecordExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ImageRecords
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        //[HttpPost]
        //public async Task<ActionResult<ImageRecord>> PostImageRecord(ImageRecord imageRecord)
        //{
        //    _context.Images.Add(imageRecord);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetImageRecord", new { id = imageRecord.Id }, imageRecord);
        //}

        [HttpPost("upload"), DisableRequestSizeLimit]
        public IActionResult Upload()
        {
            try
            {
                var file = Request.Form.Files[0];
                //var folderName = Path.Combine("Resources", "Images");
                //var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');

                    // Don't trust the file name sent by the client. To display
                    // the file name, HTML-encode the value.
                    var trustedFileNameForDisplay = WebUtility.HtmlEncode(fileName);
                    
                    //TODO need to check for name collisions
                    
                    var trustedFileNameForFileStorage = Path.GetRandomFileName();

                    trustedFileNameForFileStorage = trustedFileNameForFileStorage.Split(".")[0] + ".";//remove random file extension
                    trustedFileNameForFileStorage += trustedFileNameForDisplay.Split(".")[1];//append uploaded file extension

                    var storePath = _configuration.GetValue<string>("StoredContentPath");

                    var fullPath = Path.Combine(storePath, "segami", trustedFileNameForFileStorage);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    var record = new ImageRecord();
                    record.CreatedOn = DateTime.Now;
                    record.Path = fullPath;
                    record.PublicName = trustedFileNameForDisplay;
                    record.StorageName = trustedFileNameForFileStorage;
                    //record.CreatedOn
                    //record.ContentHash
                    //record.Id
                    //record.OwnerId

                    _context.Images.Add(record);
                    _context.SaveChanges();

                    return Ok(new { trustedFileNameForFileStorage });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }

        // DELETE: api/ImageRecords/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ImageRecord>> DeleteImageRecord(int id)
        {
            var imageRecord = await _context.Images.FindAsync(id);
            if (imageRecord == null)
            {
                return NotFound();
            }

            _context.Images.Remove(imageRecord);
            await _context.SaveChangesAsync();

            return imageRecord;
        }

        private bool ImageRecordExists(int id)
        {
            return _context.Images.Any(e => e.Id == id);
        }
    }
}
