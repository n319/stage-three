using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace AH.Api.Services
{

    public interface IMongoService
    {
        IMongoDatabase database { get; set; }
    }

    public class AgileHouseMongoService : IMongoService
    {
        public IMongoDatabase database { get; set; }
        public AgileHouseMongoService(IConfiguration config)
        {
            var client = new MongoClient(config.GetValue<string>("AgileHouseDB"));
            database = client.GetDatabase("AgileHouse");
        }
    }

    
}

