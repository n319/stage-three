#region snippet_UserServiceClass
using System.Collections.Generic;
using System.Linq;
using AH.Api.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using MongoDbGenericRepository;

namespace AH.Api.Services
{
    public class UserService
    {
        private readonly IMongoCollection<AgileHouseUser> _users;

        #region snippet_UserServiceConstructor
        public UserService(IConfiguration config, IMongoDbContext database)
        {
            // var client = new MongoClient(config.GetConnectionString("AgileHouseDB"));
            // var database = client.GetDatabase("AgileHouse");
            _users = database.GetCollection<AgileHouseUser>("HouseUser");
        }
        #endregion

        public List<AgileHouseUser> Get()
        {
            return _users.Find(user => true).ToList();
        }

        public AgileHouseUser Get(string id)
        {
            return _users.Find<AgileHouseUser>(user => user.Id.ToString().CompareTo(id) == 0).FirstOrDefault();
        }

        public AgileHouseUser Create(AgileHouseUser user)
        {
            _users.InsertOne(user);
            return user;
        }

        public void Update(string id, AgileHouseUser userIn)
        {
            _users.ReplaceOne(user => user.Id.ToString().CompareTo(id) == 0, userIn);
        }

        public void Remove(AgileHouseUser userIn)
        {
            _users.DeleteOne(user => user.Id == userIn.Id);
        }

        public void Remove(string id)
        {
            _users.DeleteOne(user => user.Id.ToString().CompareTo(id) == 0);
        }
    }
}
#endregion
