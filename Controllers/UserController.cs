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

        public UserController (UserService userService) {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]AgileHouseUser userParam)
        {
            var user = _userService.Authenticate(userParam.Username, userParam.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
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