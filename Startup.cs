using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AH.Api.Models;
using AH.Api.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MongoDbGenericRepository;

namespace server {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {

            var mongoDbContext = new MongoDbContext ("mongodb://localhost:27017", "AgileHouse");
            services.AddIdentity<AgileHouseUser, ApplicationRole> ()
                .AddMongoDbStores<IMongoDbContext> (mongoDbContext)
                .AddDefaultTokenProviders();

            //TODO add interfaces 
            services.AddScoped<ProjectPieceService> ();
            services.AddScoped<ProjectService> ();
            services.AddScoped<UserService> ();

            services.AddMvc ().SetCompatibilityVersion (CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            } else {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts ();
            }

            app.UseHttpsRedirection ();
            app.UseMvc ();
        }
    }
}