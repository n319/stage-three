using DAL.Models;
using System.Collections.Generic;

namespace DAL.Core.Interfaces
{
    public interface IProjectPieceManager{

        public List<ProjectPiece> Get();

        public ProjectPiece Get(string id);

        public List<ProjectPiece> GetRecentByAuthorId(string authorId);

        public List<ProjectPiece> GetRecentByTag(string tagName);

        public List<ProjectPiece> CreateList(List<ProjectPiece> projectPieceList);

        public ProjectPiece Create(ProjectPiece projectPiece);

        public void Update(string id, ProjectPiece projectPieceIn);

        public void Remove(ProjectPiece projectPieceIn);

        public void Remove(string id);
    }
}