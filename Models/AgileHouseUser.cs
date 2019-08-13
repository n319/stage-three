using System.Runtime.Serialization;
using System;
using Microsoft.AspNetCore.Identity;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace AH.Api.Models {
    public class AgileHouseUser {

        [BsonId]
        public BsonObjectId Id { get; set; }

        [BsonElement ("TwitchStreamId")]
        public string TwitchStreamId { get; set; }

        [BsonElement ("FirstName")]
        public string FirstName { get; set; }

        [BsonElement ("LastName")]
        public string LastName { get; set; }

        [BsonElement ("Username")]
        public string Username { get; set; }

        [BsonElement ("PasswordHash")]
        public string PasswordHash { get; set; }

        [BsonElement ("Token")]
        public string Token { get; set; }

        [BsonElement ("Projects")]
        public string[] Projects { get; set; }

    }
}