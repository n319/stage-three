using System.Collections.Generic;
using System.Linq;
using AH.Api.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace AH.Api.Services {
    public class ProjectPieceService {
        private readonly IMongoCollection<AgileHouseProjectPiece> _projectPieces;

        #region snippet_AgileHouseProjectPieceServiceConstructor
        public ProjectPieceService (IConfiguration config, IMongoService agileHouse) {
            _projectPieces = agileHouse.GetDatabase ().GetCollection<AgileHouseProjectPiece> ("ProjectPiece");
        }
        #endregion

        public List<AgileHouseProjectPiece> Get () {
            return _projectPieces.Find (projectPiece => true).ToList ();
        }

        public AgileHouseProjectPiece Get (string id) {
            return _projectPieces.Find<AgileHouseProjectPiece> (projectPiece => projectPiece.Id == id).FirstOrDefault ();
        }

        public List<AgileHouseProjectPiece> GetRecentByAuthorId (string authorId) {
            return _projectPieces.Find<AgileHouseProjectPiece> (projectPiece => projectPiece.AuthorId == authorId).SortByDescending (pc => pc.CreatedOn).Limit (10).ToList ();
        }

        public List<AgileHouseProjectPiece> GetRecentByTag (string tagName) {
            //TODO add more logic around tags
            return _projectPieces.Find<AgileHouseProjectPiece> (projectPiece => projectPiece.Tags.Any(t => t.Name == tagName)).SortByDescending (pc => pc.CreatedOn).Limit (10).ToList ();
        }

        public List<AgileHouseProjectPiece> CreateList (List<AgileHouseProjectPiece> projectPieceList) {
            _projectPieces.InsertMany (projectPieceList);
            return projectPieceList;
        }

        public AgileHouseProjectPiece Create (AgileHouseProjectPiece projectPiece) {
            _projectPieces.InsertOne (projectPiece);
            return projectPiece;
        }

        public void Update (string id, AgileHouseProjectPiece projectPieceIn) {
            _projectPieces.ReplaceOne (projectPiece => projectPiece.Id == id, projectPieceIn);
        }

        public void Remove (AgileHouseProjectPiece projectPieceIn) {
            _projectPieces.DeleteOne (projectPiece => projectPiece.Id == projectPieceIn.Id);
        }

        public void Remove (string id) {
            _projectPieces.DeleteOne (projectPiece => projectPiece.Id == id);
        }
    }
}