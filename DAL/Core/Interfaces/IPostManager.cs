using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Core.Interfaces {
    public interface IPostManager {

        public Task<List<Object>> GetRecentUserPosts(string userId);

        public Task<List<Object>> GetRecentPostsByTag(string tagName);

        public Task<List<Object>> CreatePostsFromProjects(List<Project> projects);

        public Task<List<Object>> CreatePostsFromPieces(List<ProjectPiece> pieces);
    }
}