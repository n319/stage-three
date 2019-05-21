using System.Collections.Generic;
using AH.Api.Models;
using AH.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AH.Api.Controllers {
    [Authorize]
    [Route ("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase {
        private readonly UserService _userService;
        private readonly ProjectService _projectService;

        public UserController (UserService userService, ProjectService projectService) {
            _userService = userService;
            _projectService = projectService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]AgileHouseUser userParam)
        {
            var user = _userService.Authenticate(userParam.Username, userParam.PasswordHash);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }

        [HttpGet ("[action]")]
        public ActionResult<UserProjectsResponse> GetUserProjectsSummary(string id)
        {   

            var user = _userService.Get(id);
            UserProjectsResponse response = new UserProjectsResponse();

            List<ProjectSummary> projects = new List<ProjectSummary>();

            foreach(var i in user.Projects){
                
                var prj = _projectService.Get(i);
                
                var summary = new ProjectSummary();
                summary.Id = i.ToString();
                summary.Name = prj.Name;
                summary.ViewType = prj.ViewType;

                projects.Add(summary);
            }
            
            response.Projects = projects.ToArray();

            return response;
        }

        [HttpGet]
        public ActionResult<List<AgileHouseUser>> Get () {
            return _userService.Get ();
        }

        [HttpGet ("{id:length(24)}", Name = "GetUser")]
        public ActionResult<AgileHouseUser> Get (string id) {
            var user = _userService.Get (id);

            if (user == null) {
                return NotFound ();
            }

            return user;
        }
        
        [HttpPost]
        public ActionResult<AgileHouseUser> Create (AgileHouseUser user) {
            _userService.Create (user);

            return CreatedAtRoute ("GetUser", new { id = user.Id.ToString () }, user);
        }

        [HttpPut ("{id:length(24)}")]
        public IActionResult Update (string id, AgileHouseUser userIn) {
            var user = _userService.Get (id);

            if (user == null) {
                return NotFound ();
            }

            _userService.Update (id, userIn);

            return NoContent ();
        }

        [HttpDelete ("{id:length(24)}")]
        public IActionResult Delete (string id) {
            var user = _userService.Get (id);

            if (user == null) {
                return NotFound ();
            }

            _userService.Remove (user);

            return NoContent ();
        }
    }
}