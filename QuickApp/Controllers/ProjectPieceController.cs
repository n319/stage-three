//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using System.Collections.Generic;

//namespace Api.Controllers
//{
//    [Route("api/[controller]")]
//    [Authorize]
//    [ApiController]
//    public class ProjectPieceController : ControllerBase
//    {
//        private readonly ProjectPieceService _projectPieceService;
//        private readonly ProjectService _projectService;

//        public ProjectPieceController(ProjectPieceService projectPieceService, ProjectService projectService)
//        {
//            _projectPieceService = projectPieceService;
//            _projectService = projectService;
//        }

//        [HttpGet("[action]")]
//        public ActionResult<List<ProjectPiece>> GetPiecesListById(string id)
//        {
//            var pieces = _projectService.Get(id)?.Pieces;

//            List<ProjectPiece> result = new List<ProjectPiece>();

//            foreach (var pcId in pieces)
//            {
//                result.Add(_projectPieceService.Get(pcId));
//            }

//            return result;
//        }

//        [HttpGet]
//        public ActionResult<List<ProjectPiece>> Get()
//        {
//            return _projectPieceService.Get();
//        }

//        [HttpGet("[action]")]
//        public ActionResult<ProjectPiece> GetProjectPiece(string id)
//        {
//            var projectPiece = _projectPieceService.Get(id);

//            if (projectPiece == null)
//            {
//                return NotFound();
//            }

//            return projectPiece;
//        }

//        [HttpPost("[action]")]
//        public IActionResult Update(ProjectPiece projectPieceIn)
//        {
//            if (projectPieceIn == null)
//            {
//                return NotFound();
//            }

//            _projectPieceService.Update(projectPieceIn.Id, projectPieceIn);

//            return NoContent();
//        }

//        [HttpPost("list")]
//        public IActionResult CreateList(List<ProjectPiece> projectPieceList)
//        {
//            _projectPieceService.CreateList(projectPieceList);

//            return NoContent();
//        }

//        [HttpPost("[action]")]
//        public ActionResult<ProjectPiece> Create(ProjectPiece projectPiece)
//        {
//            _projectPieceService.Create(projectPiece);

//            return CreatedAtRoute("GetProjectPiece", new { id = projectPiece.Id.ToString() }, projectPiece);
//        }

//        [HttpDelete("{id:length(24)}")]
//        public IActionResult Delete(string id)
//        {
//            var projectPiece = _projectPieceService.Get(id);

//            if (projectPiece == null)
//            {
//                return NotFound();
//            }

//            _projectPieceService.Remove(projectPiece.Id);

//            return NoContent();
//        }
//    }
//}