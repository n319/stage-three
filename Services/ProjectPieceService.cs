using System.Collections.Generic;
using System.Linq;
using UserApi.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using ProjectPieceApi.Models;

namespace ProjectPieceApi.Services
{
    public class ProjectPieceService
    {
        private readonly IMongoCollection<AgileHouseProjectPiece> _projectPieces;

        #region snippet_AgileHouseProjectPieceServiceConstructor
        public ProjectPieceService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("AgileHouseDB"));
            var database = client.GetDatabase("AgileHouse");
            _projectPieces = database.GetCollection<AgileHouseProjectPiece>("HouseProjectPiece");
        }
        #endregion

        public List<AgileHouseProjectPiece> Get()
        {
            return _projectPieces.Find(projectPiece => true).ToList();
        }

        public AgileHouseProjectPiece Get(string id)
        {
            return _projectPieces.Find<AgileHouseProjectPiece>(projectPiece => projectPiece.Id == id).FirstOrDefault();
        }

        public AgileHouseProjectPiece Create(AgileHouseProjectPiece projectPiece)
        {
            _projectPieces.InsertOne(projectPiece);
            return projectPiece;
        }

        public void Update(string id, AgileHouseProjectPiece projectPieceIn)
        {
            _projectPieces.ReplaceOne(projectPiece => projectPiece.Id == id, projectPieceIn);
        }

        public void Remove(AgileHouseProjectPiece projectPieceIn)
        {
            _projectPieces.DeleteOne(projectPiece => projectPiece.Id == projectPieceIn.Id);
        }

        public void Remove(string id)
        {
            _projectPieces.DeleteOne(projectPiece => projectPiece.Id == id);
        }
    }
}
