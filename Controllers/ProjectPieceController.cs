using System.Collections.Generic;
using AH.Api.Models;
using AH.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AH.Api.Controllers {
    [Route ("api/[controller]")]
    [Authorize]
    [ApiController]
    public class ProjectPieceController : ControllerBase {
        private readonly ProjectPieceService _projectPieceService;
        private readonly ProjectService _projectService;

        public ProjectPieceController (ProjectPieceService projectPieceService, ProjectService projectService) {
            _projectPieceService = projectPieceService;
            _projectService = projectService;
        }

        [HttpGet ("[action]")]
        public ActionResult<List<AgileHouseProjectPiece>> GetPiecesListById (string id) {
            var pieces = _projectService.Get(id)?.Pieces;
            
            List<AgileHouseProjectPiece> result = new List<AgileHouseProjectPiece>();

            foreach(var pcId in pieces){
                result.Add(_projectPieceService.Get(pcId));
            }
            
            return result;
        }

        [HttpGet]
        public ActionResult<List<AgileHouseProjectPiece>> Get () {
            return _projectPieceService.Get ();
        }

        [HttpGet ("[action]")]
        public ActionResult<AgileHouseProjectPiece> GetProjectPiece (string id) {
            var projectPiece = _projectPieceService.Get (id);

            if (projectPiece == null) {
                return NotFound ();
            }

            return projectPiece;
        }

        [HttpPost ("list")]
        public IActionResult CreateList (List<AgileHouseProjectPiece> projectPieceList) {
            _projectPieceService.CreateList (projectPieceList);

            return NoContent ();
        }

        [HttpPost ("[action]")]
        public ActionResult<AgileHouseProjectPiece> Create (AgileHouseProjectPiece projectPiece) {
            _projectPieceService.Create (projectPiece);

            return CreatedAtRoute ("GetProjectPiece", new { id = projectPiece.Id.ToString () }, projectPiece);
        }

        [HttpPost ("[action]")]
        public IActionResult Update (AgileHouseProjectPiece projectPieceIn) {
            if (projectPieceIn == null) {
                return NotFound ();
            }           

            _projectPieceService.Update (projectPieceIn.Id, projectPieceIn);

            return NoContent ();
        }

        [HttpDelete ("{id:length(24)}")]
        public IActionResult Delete (string id) {
            var projectPiece = _projectPieceService.Get (id);

            if (projectPiece == null) {
                return NotFound ();
            }

            _projectPieceService.Remove (projectPiece.Id);

            return NoContent ();
        }
    }
}