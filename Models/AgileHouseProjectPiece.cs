using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ProjectPieceApi.Models
{
    public class AgileHouseProjectPiece
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; }

        [BsonElement("Author")]
        public string Author { get; set; }

        [BsonElement("Pieces")]
        public string[] Pieces { get; set; }
    }
}
