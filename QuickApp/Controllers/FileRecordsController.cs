using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DAL;
using DAL.Models.Content;
using Microsoft.Extensions.Configuration;
using System.Net.Http.Headers;
using System.Net;
using System.IO;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileRecordsController : ControllerBase
    {
        private readonly ContentDbContext _context;
        private readonly IConfiguration _configuration;
        private readonly long _fileSizeLimit;
        private readonly string[] _permittedExtensions = { ".txt", ".jpg", ".gif", ".png", ".pdf", "doc", ".docx", ".xls", ".xlsx" };
        private readonly string _targetFilePath;

        public FileRecordsController(ContentDbContext context, IConfiguration config)
        {
            _context = context;

            _fileSizeLimit = config.GetValue<long>("FileSizeLimit");

            // To save physical files to a path provided by configuration:
            _targetFilePath = config.GetValue<string>("StoredFilesPath");

            _configuration = config;

            // To save physical files to the temporary files folder, use:
            //_targetFilePath = Path.GetTempPath();
        }

        // GET: api/FileRecords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FileRecord>>> GetFiles()
        {
            return await _context.Files.ToListAsync();
        }

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

                    var fullPath = Path.Combine(storePath, "selif", trustedFileNameForFileStorage);

                    var dbPath = Path.Combine(storePath, trustedFileNameForFileStorage);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    var record = new FileRecord();
                    record.CreatedOn = DateTime.Now;
                    record.Path = fullPath;
                    record.PublicName = trustedFileNameForDisplay;
                    record.StorageName = trustedFileNameForFileStorage;
                    //record.CreatedOn
                    //record.ContentHash
                    //record.Id
                    //record.OwnerId

                    _context.Files.Add(record);

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

        // GET: api/FileRecords/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FileRecord>> GetFileRecord(int id)
        {
            var fileRecord = await _context.Files.FindAsync(id);

            if (fileRecord == null)
            {
                return NotFound();
            }

            return fileRecord;
        }

        // PUT: api/FileRecords/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFileRecord(int id, FileRecord fileRecord)
        {
            if (id != fileRecord.Id)
            {
                return BadRequest();
            }

            _context.Entry(fileRecord).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FileRecordExists(id))
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

        // POST: api/FileRecords
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<FileRecord>> PostFileRecord(FileRecord fileRecord)
        {
            _context.Files.Add(fileRecord);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFileRecord", new { id = fileRecord.Id }, fileRecord);
        }

        // DELETE: api/FileRecords/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FileRecord>> DeleteFileRecord(int id)
        {
            var fileRecord = await _context.Files.FindAsync(id);
            if (fileRecord == null)
            {
                return NotFound();
            }

            _context.Files.Remove(fileRecord);
            await _context.SaveChangesAsync();

            return fileRecord;
        }

        private bool FileRecordExists(int id)
        {
            return _context.Files.Any(e => e.Id == id);
        }
    }
}
