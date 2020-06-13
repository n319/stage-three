using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL;
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
            model.viewType = _unitOfWork.ViewType.Get(4);
            model.viewTypeAttributes = _unitOfWork.ViewAttributeType.GetAll().Where(va => va.ViewTypeId == 4).ToArray();

            List<BoardModel> output = new List<BoardModel>() {model};
            return Ok(output);
        }
    }
}