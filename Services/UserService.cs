#region snippet_UserServiceClass
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using AH.Api.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Bson;
using MongoDB.Driver;

namespace AH.Api.Services {
    public class UserService {
        private readonly IMongoCollection<AgileHouseUser> _users;
        private readonly IConfiguration _config;

        #region snippet_UserServiceConstructor
        public UserService (IConfiguration config, IMongoService agileHouse) {
            
            _config = config; 

            // IMongoCollection<BsonDocument> _bsonProjects = agileHouse.GetDatabase ().GetCollection<BsonDocument> ("AgileHouseUser");
            // var inserted = _bsonProjects.Find(x => true).FirstOrDefault();
            // inserted.Add(new BsonElement("NewEelment", "NewElementValue"));
            // _bsonProjects.ReplaceOne(new BsonDocument("_id", inserted["_id"]), inserted);


            _users = (agileHouse.GetDatabase().GetCollection<AgileHouseUser>("AgileHouseUser"));
            
        }
        #endregion

        public AgileHouseUser Authenticate (string username, string passwordHash) {
            var first = _users.AsQueryable<AgileHouseUser>().First();
            
            var user = _users.AsQueryable<AgileHouseUser>().Where(x => x.Username == username && x.PasswordHash == passwordHash).FirstOrDefault();

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler ();
            var key = Encoding.ASCII.GetBytes (_config.GetSection ("AppSettings").GetValue<string> ("Secret"));
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity (new Claim[] {
                new Claim (ClaimTypes.Name, user.Id.ToString ())
                }),
                Expires = DateTime.UtcNow.AddDays (7),
                SigningCredentials = new SigningCredentials (new SymmetricSecurityKey (key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken (tokenDescriptor);
            user.Token = tokenHandler.WriteToken (token);

            // remove password before returning
            user.PasswordHash = null;

            return user;
        }
 
        public List<AgileHouseUser> Get () {
            return _users.Find (user => true).ToList ();
        }

        public AgileHouseUser Get (string id) {
            ObjectId objectId;
            ObjectId.TryParse(id, out objectId);

            var filter = new BsonDocumentFilterDefinition<AgileHouseUser>(new BsonDocument(new BsonElement("_id",objectId)));
            return _users.Find(filter).FirstOrDefault();

            //return _users.Find<AgileHouseUser>().First();
        }

        public AgileHouseUser Create (AgileHouseUser user) {
            _users.InsertOne (user);
            return user;
        }

        public void Update (string id, AgileHouseUser userIn) {
            _users.ReplaceOne (user => user.Id.ToString ().CompareTo (id) == 0, userIn);
        }

        public void Remove (AgileHouseUser userIn) {
            _users.DeleteOne (user => user.Id == userIn.Id);
        }

        public void Remove (string id) {
            _users.DeleteOne (user => user.Id.ToString ().CompareTo (id) == 0);
        }
    }
}
#endregion