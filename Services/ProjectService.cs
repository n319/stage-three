using System.Collections.Generic;
using System.Linq;
using AH.Api.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using AH.Api.Models;

namespace AH.Api.Services
{
    public class ProjectService
    {
        private readonly IMongoCollection<AgileHouseProject> _projects;

        #region snippet_AgileHouseProjectServiceConstructor
        public ProjectService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("AgileHouseDB"));
            var database = client.GetDatabase("AgileHouse");
            _projects = database.GetCollection<AgileHouseProject>("HouseProject");
        }
        #endregion

        public List<AgileHouseProject> Get()
        {
            return _projects.Find(project => true).ToList();
        }

        public AgileHouseProject Get(string id)
        {
            return _projects.Find<AgileHouseProject>(project => project.Id == id).FirstOrDefault();
        }

        public AgileHouseProject Create(AgileHouseProject project)
        {
            _projects.InsertOne(project);
            return project;
        }

        public void Update(string id, AgileHouseProject projectIn)
        {
            _projects.ReplaceOne(project => project.Id == id, projectIn);
        }

        public void Remove(AgileHouseProject projectIn)
        {
            _projects.DeleteOne(project => project.Id == projectIn.Id);
        }

        public void Remove(string id)
        {
            _projects.DeleteOne(project => project.Id == id);
        }
    }
}
