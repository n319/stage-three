using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace AH.Api.Models {
    public class AgileHouseProjectPiece {
        [BsonId]
        [BsonRepresentation (BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement ("Name")]
        public string Name { get; set; }

        [BsonElement ("AuthorId")]
        public string AuthorId { get; set; }

        [BsonElement ("ProjectId")]
        public string ProjectId { get; set; }

        [BsonElement ("Status")]
        public string Status { get; set; }

        [BsonElement ("Description")]
        public string Description { get; set; }

        [BsonElement ("Tags")]
        public string[] Tags { get; set; }

        [BsonElement ("Checklist")]
        public string[] Checklist { get; set; }

    }
}