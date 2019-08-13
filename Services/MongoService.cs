using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

namespace AH.Api.Services {

    public interface IMongoService {
        IMongoDatabase GetDatabase();
    }

    public class AgileHouseMongoService : IMongoService {

        IMongoDatabase database { get; set; }

        public AgileHouseMongoService (IConfiguration config) {

            var constr = config.GetValue<string> ("AgileHouseDB");

            string username = "AgileHouseRW";
            string password = "DigitalAlchemy319!";
            string mongoDbAuthMechanism = "SCRAM-SHA-1";

            MongoInternalIdentity internalIdentity =
                new MongoInternalIdentity ("admin", username);
                
            PasswordEvidence passwordEvidence = new PasswordEvidence (password);
            MongoCredential mongoCredential =
                new MongoCredential (mongoDbAuthMechanism,
                    internalIdentity, passwordEvidence);
            

            MongoClientSettings settings = new MongoClientSettings {

                Credential = mongoCredential,
                Server = new MongoServerAddress (constr, 27017)
            };

            var client = new MongoClient (settings);

            database = client.GetDatabase("AgileHouse");
        }

        public IMongoDatabase GetDatabase(){
            return database;
        }
    }

}