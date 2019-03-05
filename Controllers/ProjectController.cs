using System.Collections.Generic;
using ProjectApi.Models;
using ProjectApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace ProjectApi.Controllers
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

        [HttpGet("{id:length(24)}", Name = "GetProject")]
        public ActionResult<AgileHouseProject> Get(string id)
        {
            var project = _projectService.Get(id);

            if (project == null)
            {
                return NotFound();
            }

            return project;
        }

        [HttpPost]
        public ActionResult<AgileHouseProject> Create(AgileHouseProject project)
        {
            _projectService.Create(project);

            return CreatedAtRoute("GetProject", new { id = project.Id.ToString() }, project);
        }

        [HttpPut("{id:length(24)}")]
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

        [HttpDelete("{id:length(24)}")]
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
