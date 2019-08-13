using System.Collections.Generic;
using AH.Api.Models;
using AH.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AH.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly ProjectService _projectService;

        public ProjectController(ProjectService projectService)
        {
            _projectService = projectService;
        }

        [HttpGet]
        public ActionResult<List<AgileHouseProject>> Get()
        {
            return _projectService.Get();
        }

        [HttpGet ("[action]")]
        public ActionResult<AgileHouseProject> GetProjectById(string id)
        {
            var project = _projectService.Get(id);

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }


        
        [HttpGet ("[action]")]
        public ActionResult<List<AgileHouseProject>> GetList(List<ProjectSummary> projectSummaryList)
        {
            //! finish me!!!!
            var project = _projectService.Get();

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }

        [HttpPost("list")]
        public IActionResult Create(List<AgileHouseProject> projectList)
        {
            _projectService.CreateList(projectList);

            return NoContent();
        }

        [HttpPost]
        public ActionResult<AgileHouseProject> Create(AgileHouseProject project)
        {
            _projectService.Create(project);

            return CreatedAtRoute("GetProject", new { id = project.Id.ToString() }, project);
        }

        [HttpPut]
        public IActionResult Update(string id, AgileHouseProject projectIn)
        {
            var project = _projectService.Get(id);

            if (project == null)
            {
                return NotFound();
            }

            _projectService.Update(id, projectIn);

            return NoContent();
        }

        [HttpDelete]
        public IActionResult Delete(string id)
        {
            var project = _projectService.Get(id);

            if (project == null)
            {
                return NotFound();
            }

            _projectService.Remove(project.Id);

            return NoContent();
        }
    }
}
