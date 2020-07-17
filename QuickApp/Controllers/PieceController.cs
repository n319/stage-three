using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DAL.Models;
using QuickApp.Data;
using IdentityServer4.AccessTokenValidation;
using System.Net;
using Microsoft.AspNetCore.Authorization;
using DAL;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
    [ApiController]
    public class PieceController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public PieceController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/Pieces
        [HttpGet]
        public ActionResult<Piece[]> GetPiece()
        {
            return _unitOfWork.Piece.GetAll().ToArray();
        }

        [HttpGet("{pieceId}")]
        public ActionResult<Piece> GetPieceById(int pieceId)
        {
            return _unitOfWork.Piece.Get(pieceId);
        }

        [HttpPatch]
        public ActionResult<Piece> PatchUpdatePiece([FromBody] Piece piece)
        {
            var toUpdate = _unitOfWork.Piece.Find(pc => pc.Id == piece.Id).FirstOrDefault();

            toUpdate.Name = piece.Name;
            toUpdate.ViewTypeAttributeId = piece.ViewTypeAttributeId;
            toUpdate.CompletedOn = piece.CompletedOn;
            toUpdate.Description = piece.Description;

            _unitOfWork.SaveChanges();

            return piece;
        }

        // GET: api/Pieces/5
        [HttpGet("{pieceId}")]
        public ActionResult<Piece[]> GetPiece(int pieceId)
        {
            var piece = _unitOfWork.Piece.Find(p=> p.Id == pieceId).ToArray();

            if (piece == null)
            {
                return NotFound();
            }

            return piece;
        }

        // PUT: api/Pieces/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public ActionResult<IActionResult> PutPiece(int id, Piece piece)
        {
            if (id != piece.Id)
            {
                return BadRequest();
            }

            if (!PieceExists(id))
            {
                _unitOfWork.Piece.Add(piece);
            }

            try
            {
                _unitOfWork.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PieceExists(id))
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
