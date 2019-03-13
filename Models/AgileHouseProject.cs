using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace AH.Api.Models {
    public class AgileHouseProject {
        [BsonId]
        [BsonRepresentation (BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement ("Name")]
        public string Name { get; set; }

        [BsonElement ("AuthorId")]
        public string AuthorId { get; set; }

        [BsonElement ("CreatedOn")]
        public string CreatedOn { get; set; }

        [BsonElement ("CompletedOn")]
        public string CompletedOn { get; set; }

        [BsonElement ("Pieces")]
        public string[] Pieces { get; set; }
    }
}