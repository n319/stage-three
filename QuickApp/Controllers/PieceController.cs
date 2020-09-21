using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DAL.Models;
using IdentityServer4.AccessTokenValidation;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using DAL;
using Newtonsoft.Json;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
    [ApiController]
    public class PieceController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ContentDbContext _content;

        public PieceController(IUnitOfWork unitOfWork, ContentDbContext context)
        {
            _unitOfWork = unitOfWork;
            _content = context;
        }

        // GET: api/Pieces
        [HttpGet]
        public IActionResult GetPieceById(int pieceId)
        {
            var pc = _unitOfWork.Piece.Get(pieceId);
            
            pc.contentTags = _unitOfWork.PieceContentTag.GetAll().Where(pc => pc.PieceId == pieceId).ToArray<PieceContentTag>();



            List<Piece> output = new List<Piece>() { pc };

            return Ok(output);
        }

        [HttpPatch]
        public ActionResult<Piece> PatchUpdatePiece([FromBody] Piece piece)
        {
            var toUpdate = _unitOfWork.Piece.Find(pc => pc.Id == piece.Id).FirstOrDefault();
            //use pieceContentTag
            toUpdate.Name = piece.Name;
            toUpdate.ViewTypeAttributeId = piece.ViewTypeAttributeId;
            toUpdate.CompletedOn = piece.CompletedOn;
            toUpdate.Description = piece.Description;
            toUpdate.contentTags = piece.contentTags;

            if (piece.Images != null)
            {
                toUpdate.ImageJson = JsonConvert.SerializeObject(
                    piece.Images.Select(i => { i = i.Replace("content/", ""); return i; }).ToList().ToArray()
                );
            }

            var currentTags = _unitOfWork.PieceContentTag.GetAll().Where(pc => pc.PieceId == piece.Id).ToArray<PieceContentTag>();

            foreach (var tag in currentTags)
            {
                _unitOfWork.PieceContentTag.Remove(tag);
            }

            _unitOfWork.PieceContentTag.AddRange(piece.contentTags);
            
            _unitOfWork.SaveChanges();

            return piece;
        }

        // GET: api/Pieces/5
        [HttpGet("{pieceId}")]
        public ActionResult<Piece[]> GetPiece(int pieceId)
        {
            var piece = _unitOfWork.Piece.Find(p=> p.Id == pieceId).ToArray();

            piece[0].Images = JsonConvert.DeserializeObject(piece[0].ImageJson) as string[];

            if (piece == null)
            {
                return NotFound();
            }

            return piece;
        }

        // PUT: api/Pieces/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut]
        public ActionResult<IActionResult> PutPiece([FromBody] Piece piece)
        {
            //use pieceContentTag
            if (piece == null)
            {
                return BadRequest();
            }

            if (!PieceExists(piece.Id))
            {
                _unitOfWork.Piece.Add(piece);
            }

            try
            {
                _unitOfWork.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PieceExists(piece.Id))
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

        // POST: api/Pieces
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public ActionResult<Piece> PostPiece([FromBody] Piece piece)
        {
            //use pieceContentTag
            _unitOfWork.Piece.Add(piece);
            _unitOfWork.SaveChanges();

            //return CreatedAtAction("GetPiece", new { id = piece.Id }, piece);
            return piece;
        }

        // DELETE: api/Pieces/5
        [HttpDelete("{id}")]
        public ActionResult<Piece> DeletePiece(int id)
        {
            var piece = _unitOfWork.Piece.Find(p => p.Id == id).First();
            if (piece == null)
            {
                return NotFound();
            }

            _unitOfWork.Piece.Remove(piece);
            _unitOfWork.SaveChanges();

            return piece;
        }

        private bool PieceExists(int id)
        {
            return _unitOfWork.Piece.Find(e => e.Id == id).ToList().Count >= 1;
        }
    }
}
