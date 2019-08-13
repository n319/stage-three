using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace server {
    //https://docs.microsoft.com/en-us/aspnet/core/fundamentals/servers/kestrel?view=aspnetcore-2.2#configuration

    public class Program {
        public static void Main (string[] args) {
            CreateWebHostBuilder (args).Build ().Run ();
        }

        public static IWebHostBuilder CreateWebHostBuilder (string[] args) =>
            //TODO: if local-db, remote-db, dev, qa, prod
            WebHost.CreateDefaultBuilder (args)
            .UseStartup<Startup> ();
            //prod confi
            //.UseUrls("http://localhost:5000");
            // .ConfigureKestrel ((context, options) => {
                // options.Limits.MaxConcurrentConnections = 100;
                // options.Limits.MaxConcurrentUpgradedConnections = 100;
                // options.Limits.MaxRequestBodySize = 10 * 1024;
                // options.Limits.MinRequestBodyDataRate =
                //     new MinDataRate (bytesPerSecond: 100, gracePeriod: TimeSpan.FromSeconds (10));
                // options.Limits.MinResponseDataRate =
                //     new MinDataRate (bytesPerSecond: 100, gracePeriod: TimeSpan.FromSeconds (10));
                // options.Listen (IPAddress.Loopback, 5000);
                // options.Listen (IPAddress.Loopback, 5001, listenOptions => {
                //     listenOptions.UseHttps ("testCert.pfx", "testPassword");
                // });
                // options.Limits.KeepAliveTimeout = TimeSpan.FromMinutes (2);
                // options.Limits.RequestHeadersTimeout = TimeSpan.FromMinutes (1);
            // });
    }
}