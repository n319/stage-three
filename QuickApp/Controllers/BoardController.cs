using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using QuickApp.ViewModels;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
    [ApiController]
    public class BoardController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public BoardController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public IActionResult Get(string projectId)
        {
           int id = int.Parse(projectId);
           BoardModel model = new BoardModel();

            model.project = _unitOfWork.Project.Get(id);
            model.projectPieces = _unitOfWork.Piece.GetAll().Where(pc => pc.ProjectId == id).ToArray();
            model.pieceContentTags = _unitOfWork.PieceContentTag.GetAll().Where(pc => pc.ProjectId == id).ToArray<PieceContentTag>();
            
            //model.projectPieces.Any(pp => pp.contentTags = new List<PieceContentTag>());

            foreach (PieceContentTag pct in model.pieceContentTags)
            {
                var pc = model.projectPieces.Where(pp => pp.Id == pct.PieceId).First();

                if (pc.contentTags == null)
                {
                    pc.contentTags = new List<PieceContentTag>();
                }

                pc.contentTags.Add(pct);
            }

            model.viewType = _unitOfWork.ViewType.Get(4);
            model.viewTypeAttributes = _unitOfWork.ViewAttributeType.GetAll().Where(va => va.ViewTypeId == 4).ToArray();

            List<BoardModel> output = new List<BoardModel>() {model};
            return Ok(output);
        }
    }
}