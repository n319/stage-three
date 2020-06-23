using DAL;
using DAL.Models;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = IdentityServerAuthenticationDefaults.AuthenticationScheme)]
    [ApiController]
    public class ViewTypeAttributeController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ViewTypeAttributeController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("/allattributes")]
        public ActionResult<ViewTypeAttribute[]> GetAllAttributes()
        {
            var project = _unitOfWork.ViewAttributeType.GetAll();

            if (project == null)
            {
                return Unauthorized();
            }

            return new List<ViewTypeAttribute>(project).ToArray();
        }

        // GET: api/values
        public IActionResult Get()
        {
            var project = _unitOfWork.ViewAttributeType.GetAll();
            return Ok(project);
        }

        [HttpPost]
        public ActionResult<ViewTypeAttribute[]> PostCreateViewTypeAttribute(ViewTypeAttribute model)
        {   
            //TODO sanity checks, add model to unitOfWorkContext, get id, return object, make sure completed on date is updated.
            return new List<ViewTypeAttribute>().ToArray();
        }
    }
}
