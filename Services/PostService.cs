using System;
using System.Collections.Generic;
using System.Linq;
using AH.Api.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace AH.Api.Services {
    public class PostService {
        private readonly ProjectService _projectService;
        private readonly ProjectPieceService _projectPieceService;

        #region snippet_AgileHouseProjectServiceConstructor
        public PostService (IConfiguration config, ProjectService prjSvc, ProjectPieceService prjPcSvc) {
            _projectPieceService = prjPcSvc;
            _projectService = prjSvc;
        }
        #endregion

        public List<PostContent> GetRecentUserPosts (string userId) {
            var projectsAsPosts = CreatePostsFromProjects (_projectService.GetRecentByAuthorId (userId));
            var piecesAsPosts = CreatePostsFromPieces (_projectPieceService.GetRecentByAuthorId (userId));

            projectsAsPosts.AddRange (piecesAsPosts);

            return projectsAsPosts;
        }

        
        public List<PostContent> GetRecentPostsByTag (string tagName) {
            return CreatePostsFromPieces (_projectPieceService.GetRecentByTag (tagName));

        }
        private List<PostContent> CreatePostsFromProjects (List<AgileHouseProject> projects) {
            return projects.ConvertAll (prj =>
                new PostContent {
                    Id = prj.Id,
                        Type = "project",
                        Name = prj.Name,
                        AuthorId = prj.AuthorId
                });
        }

        private List<PostContent> CreatePostsFromPieces (List<AgileHouseProjectPiece> pieces) {
            return pieces.ConvertAll (prj =>
                new PostContent {
                    Id = prj.Id,
                        Type = "piece",
                        Name = prj.Name,
                        AuthorId = prj.AuthorId
                });

        }

    }
}