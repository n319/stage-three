using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ProjectApi.Models
{
    public class AgileHouseProject
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
