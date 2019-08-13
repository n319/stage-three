using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using AH.Api.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace AH.Api.Services {
    public class ProjectService {
        private readonly IMongoCollection<AgileHouseProject> _projects;

        #region snippet_AgileHouseProjectServiceConstructor
        public ProjectService (IConfiguration config, IMongoService agileHouse) {
            _projects = agileHouse.GetDatabase ().GetCollection<AgileHouseProject> ("Project");

        }
        #endregion

        public List<AgileHouseProject> Get () {
            return _projects.Find (project => true).ToList ();
        }

        public AgileHouseProject Get (string id) {
            if (id.CompareTo ("undefined") == 0) {
                return null;
            }
            
            return _projects.Find<AgileHouseProject> (project => project.Id == id).FirstOrDefault ();
        }

        public List<AgileHouseProject> GetRecentByAuthorId (string authorId) {
            return _projects.Find<AgileHouseProject> (project => project.AuthorId == authorId).SortByDescending (pr => pr.CreatedOn).Limit (10).ToList ();
        }

        public List<AgileHouseProject> CreateList (List<AgileHouseProject> projectList) {
            _projects.InsertMany (projectList);
            return projectList;
        }

        public AgileHouseProject Create (AgileHouseProject project) {
            _projects.InsertOne (project);
            return project;
        }

        public void Update (string id, AgileHouseProject projectIn) {
            _projects.ReplaceOne (project => project.Id == id, projectIn);
        }

        public void Remove (AgileHouseProject projectIn) {
            _projects.DeleteOne (project => project.Id == projectIn.Id);
        }

        public void Remove (string id) {
            _projects.DeleteOne (project => project.Id == id);
        }
    }
}