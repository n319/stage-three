using System.Collections.Generic;
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

        
        [BsonElement ("PieceType")]
        public string PieceType { get; set; }

        [BsonElement ("CreatedOn")]
        public string CreatedOn { get; set; }

        [BsonElement ("CompletedOn")]
        public string CompletedOn { get; set; }


        [BsonElement ("Status")]
        public string Status { get; set; }

        [BsonElement ("Description")]
        public string Description { get; set; }

        [BsonElement ("Tags")]
        public List<AHTag> Tags { get; set; }

        [BsonElement ("Checklist")]
        public List<AHCheckListItem> Checklist { get; set; }

    }

    public class AHTag{
        [BsonId]
        [BsonRepresentation (BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement ("Name")]
        public string Name { get; set; }
    }

    public class AHCheckListItem{
        [BsonId]
        [BsonRepresentation (BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement ("Name")]
        public string Name { get; set; }

        [BsonElement ("Checked")]
        public string Checked { get; set; }
    }


}