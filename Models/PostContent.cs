using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace AH.Api.Models {
    public class PostContent {
        public string Id { get; set; }
        public string Type { get; set; }
        public string Name { get; set; }
        public string AuthorId { get; set; }

    }
}