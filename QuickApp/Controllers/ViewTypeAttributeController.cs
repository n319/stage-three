using DAL;
using DAL.Models;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

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
        public ActionResult<ViewTypeAttribute> PostCreateViewTypeAttribute([FromBody] ViewTypeAttribute model)
        {
            //TODO1 sanity checks, return object, make sure completed on date is updated.
            _unitOfWork.ViewAttributeType.Add(model);
            _unitOfWork.SaveChanges();

            return model;
        }

        [HttpDelete("{id}")]
        public ActionResult<int> DeleteViewTypeAttribute(string id)
        {
            int iid = int.Parse(id);
            var toRemove = _unitOfWork.ViewAttributeType.Find(atr => atr.Id == iid).FirstOrDefault();
            _unitOfWork.ViewAttributeType.Remove(toRemove);
            
            _unitOfWork.SaveChanges();
            return 0;
        }
    }
}
