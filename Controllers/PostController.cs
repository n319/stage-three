using System.Collections.Generic;
using AH.Api.Models;
using AH.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AH.Api.Controllers {
    [Route ("api/[controller]")]
    [Authorize]
    [ApiController]
    public class PostController : ControllerBase {
        private readonly PostService _postService;

        public PostController (PostService projectService) {
            _postService = projectService;
        }

        [HttpGet ("[action]")]
        public ActionResult<List<PostContent>> GetByUser (string Id) {
            var project = _postService.GetRecentUserPosts (Id);

            if (project == null) {
                return NotFound ();
            }

            return project;
        }

        [HttpGet ("[action]")]
        public ActionResult<List<PostContent>> GetByTag (string tagName) {
            var project = _postService.GetRecentPostsByTag(tagName);

            if (project == null) {
                return NotFound ();
            }

            return project;
        }

    }
}