using System;
using System.Collections.Generic;
using System.Linq;
using AH.Api.Models;
using AH.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace AH.Api.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class ProjectPieceController : ControllerBase {
        private readonly ProjectPieceService _projectPieceService;
        private readonly ProjectService _projectService;

        public ProjectPieceController (ProjectPieceService projectPieceService, ProjectService projectService) {
            _projectPieceService = projectPieceService;
            _projectService = projectService;
        }

        [HttpGet ("[action]")]
        public ActionResult<AgileHouseProjectPiece> GetProjectPiece (string id) {
            var projectPiece = _projectPieceService.Get (id);

            if (projectPiece == null) {
                return NotFound ();
            }

            return projectPiece;
        }

        [HttpGet ("[action]")]
        public ActionResult<AgileHouseProjectPiece[]> GetPiecesListById (string id) {
            List<AgileHouseProjectPiece> returnedPieces = new List<AgileHouseProjectPiece> ();

            var piecesIdList = _projectService.Get (id).Pieces;

            AgileHouseProjectPiece projectPiece;

            foreach (string val in piecesIdList) {
                projectPiece = _projectPieceService.Get (val);

                if (projectPiece != null) {
                    returnedPieces.Add (projectPiece);
                }
            }

            return returnedPieces.ToArray ();
        }

        [HttpPost ("list")]
        public IActionResult CreateList (List<AgileHouseProjectPiece> projectPieceList) {
            _projectPieceService.CreateList (projectPieceList);

            return NoContent ();
        }

        [HttpPost]
        public ActionResult<AgileHouseProjectPiece> Create (AgileHouseProjectPiece projectPiece) {
            _projectPieceService.Create (projectPiece);

            return CreatedAtRoute ("GetProjectPiece", new { id = projectPiece.Id.ToString () }, projectPiece);
        }

        [HttpPut ("{id:length(24)}")]
        public IActionResult Update (string id, AgileHouseProjectPiece projectPieceIn) {
            var projectPiece = _projectPieceService.Get (id);

            if (projectPiece == null) {
                return NotFound ();
            }

            _projectPieceService.Update (id, projectPieceIn);

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