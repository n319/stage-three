
using DAL.Core;
using DAL.Core.Interfaces;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DAL
{
    public interface IDatabaseInitializer
    {
        Task SeedAsync();
    }

    public class DatabaseInitializer : IDatabaseInitializer
    {
        private readonly ApplicationDbContext _context;
        private readonly IAccountManager _accountManager;
        private readonly ILogger _logger;

        public DatabaseInitializer(ApplicationDbContext context, IAccountManager accountManager, ILogger<DatabaseInitializer> logger)
        {
            _accountManager = accountManager;
            _context = context;
            _logger = logger;
        }


        public async Task SeedAsync()
        {
            _context.Database.EnsureCreated();
            await _context.Database.MigrateAsync().ConfigureAwait(false);

            if (!await _context.ViewType.AnyAsync())
            {
                _logger.LogInformation("Generating ViewTypes");

                var viewTypes = new List<ViewType>();
                viewTypes.Add(new ViewType { Name = "Backlog" }); //1
                viewTypes.Add(new ViewType { Name = "Archive" }); //2
                viewTypes.Add(new ViewType { Name = "Pinboard" }); //3
                viewTypes.Add(new ViewType { Name = "Kanban" }); //4
                viewTypes.Add(new ViewType { Name = "MatGallery" }); //5
                viewTypes.Add(new ViewType { Name = "Checklist" }); //6

                _context.ViewType.AddRange(viewTypes);
                _logger.LogInformation("Generation Done");
            }

            if (!await _context.ContentTagType.AnyAsync())
            {
                _logger.LogInformation("Generating ContentTagTypes");

                var contentTags = new List<ContentTagType>();
                contentTags.Add(new ContentTagType { Name = "Software" }); //1
                contentTags.Add(new ContentTagType { Name = "Social Media" }); //2
                contentTags.Add(new ContentTagType { Name = "Angular" }); //3
                contentTags.Add(new ContentTagType { Name = ".NET Core" }); //4
                
                _context.ContentTagType.AddRange(contentTags);
                _logger.LogInformation("Generation Done");
            }//kanban lanes, pinboard types, gallery types, checklist view types, skins, etc
            if (!await _context.ViewAttributeType.AnyAsync())
            {
                _logger.LogInformation("Generating ViewAttributeTypes");

                var viewAttributeType = new List<ViewTypeAttribute>();
                viewAttributeType.Add(new ViewTypeAttribute { Name = "Todo", Order = 1, ProjectId = 1, ApplicationUserId = 1, ViewTypeId = 4 }); //3
                viewAttributeType.Add(new ViewTypeAttribute { Name = "In Progress", Order = 2, ProjectId = 1, ApplicationUserId = 1, ViewTypeId = 4 }); //2
                viewAttributeType.Add(new ViewTypeAttribute { Name = "Done", Order = 3, ProjectId = 1, ApplicationUserId = 1, ViewTypeId = 4 }); //1

                _context.ViewAttributeType.AddRange(viewAttributeType);
                _logger.LogInformation("Generation Done");
            }

            if (!await _context.AccountType.AnyAsync())
            {
                _logger.LogInformation("Generating AccountTypes");

                var accountTypes = new List<AccountType>();
                accountTypes.Add(new AccountType { Name = "Projectr" }); //1
                
                _context.AccountType.AddRange(accountTypes);
                _logger.LogInformation("Generation Done");
            }
            //USERS
            //if (!await _context.Users.ContainsAsync(ApplicationUser))
            //{
            //    _logger.LogInformation("Generating Users");
                
            //    await CreateUserAsync("nick", "tempP@ss123", "Nicks Projectr Test Account", "nsc319@gmail.com", "+1 (123) 000-0001", new string[] { "user" });

            //    _logger.LogInformation("Generation Done");
            //}

            if (!await _context.UserAccount.AnyAsync())
            {
                _logger.LogInformation("Generating UserAccounts");

                var userAccounts = new List<UserAccount>();
                userAccounts.Add(new UserAccount { ApplicationUserId = 1, AccountTypeId = 1 });
                
                _context.UserAccount.AddRange(userAccounts);
                _logger.LogInformation("Generation Done");
            }//PROJECTS

            if (!await _context.Project.AnyAsync())
            {
                _logger.LogInformation("Generating Projects");

                var projects = new List<Project>();
                projects.Add(new Project { Name = "KanbanTest", ApplicationUserId = 1, ViewTypeId = 4 });
                
                _context.Project.AddRange(projects);
                _logger.LogInformation("Generation Done");
            }

            if (!await _context.UserProject.AnyAsync())
            {
                _logger.LogInformation("Generating UserProjects");

                var userProjects = new List<UserProject>();
                userProjects.Add(new UserProject { ApplicationUserId = 1, ProjectId = 1 });
                
                _context.UserProject.AddRange(userProjects);
                _logger.LogInformation("Generation Done");
            }

            if (!await _context.ProjectContentTag.AnyAsync())
            {
                _logger.LogInformation("Generating ProjectContentTags");

                var projectContentTags = new List<ProjectContentTag>();
                projectContentTags.Add(new ProjectContentTag { ContentTagId = 1, ProjectId = 1 });
                projectContentTags.Add(new ProjectContentTag { ContentTagId = 2, ProjectId = 1 });
                projectContentTags.Add(new ProjectContentTag { ContentTagId = 3, ProjectId = 1 });
                projectContentTags.Add(new ProjectContentTag { ContentTagId = 4, ProjectId = 1 });

                _context.ProjectContentTag.AddRange(projectContentTags);
                _logger.LogInformation("Generation Done");
            }//PIECES of projects

            if (!await _context.Piece.AnyAsync())
            {
                _logger.LogInformation("Generating Pieces");

                var pieces = new List<Piece>();
                pieces.Add(new Piece { Name = "Step 1", ViewTypeId = 4, ViewTypeAttributeId = 1, ApplicationUserId = 1, ProjectId = 1, Description = "in progress" }); //1
                pieces.Add(new Piece { Name = "Step 2", ViewTypeId = 4, ViewTypeAttributeId = 2, ApplicationUserId = 1, ProjectId = 1, Description = "todo" }); //2
                pieces.Add(new Piece { Name = "Prepare", ViewTypeId = 4, ViewTypeAttributeId = 3, ApplicationUserId = 1, ProjectId = 1, Description = "done" }); //3
                pieces.Add(new Piece { Name = "1.1", ViewTypeId = 6, ViewTypeAttributeId = 1, ApplicationUserId = 1, ProjectId = 1, Description = "step 1 part 1" }); //4
                pieces.Add(new Piece { Name = "1.2", ViewTypeId = 6, ViewTypeAttributeId = 2, ApplicationUserId = 1, ProjectId = 1, Description = "step 1 part 2" }); //5

                _context.Piece.AddRange(pieces);
                _logger.LogInformation("Generation Done");
            }

            if (!await _context.PieceViewAttribute.AnyAsync())
            {
                _logger.LogInformation("Generating PieceViewAttributes");

                var pieceViewAttributes = new List<PieceViewAttribute>();
                pieceViewAttributes.Add(new PieceViewAttribute { PieceId = 1, ViewAttributeTypeId = 2 });
                pieceViewAttributes.Add(new PieceViewAttribute { PieceId = 2, ViewAttributeTypeId = 1 });
                pieceViewAttributes.Add(new PieceViewAttribute { PieceId = 3, ViewAttributeTypeId = 3 });

                _context.PieceViewAttribute.AddRange(pieceViewAttributes);
                _logger.LogInformation("Generation Done");
            }

            if (!await _context.ProjectPiece.AnyAsync())
            {
                _logger.LogInformation("Generating ProjectPieces");

                var projectPieces = new List<ProjectPiece>();
                projectPieces.Add(new ProjectPiece { ProjectId = 1, PieceId = 1 });
                projectPieces.Add(new ProjectPiece { ProjectId = 1, PieceId = 2 });
                projectPieces.Add(new ProjectPiece { ProjectId = 1, PieceId = 3 });

                _context.ProjectPiece.AddRange(projectPieces);
                _logger.LogInformation("Generation Done");
            }

            if (!await _context.CheckListItem.AnyAsync())
            {
                _logger.LogInformation("Generating CheckListItems");

                var checkListItems = new List<CheckListItem>();
                checkListItems.Add(new CheckListItem { ProjectId = 1, LinkedPieceId = 1, ContentPieceId = 4, IsChecked = false });
                checkListItems.Add(new CheckListItem { ProjectId = 1, LinkedPieceId = 1, ContentPieceId = 5, IsChecked = false });

                _context.CheckListItem.AddRange(checkListItems);
                _logger.LogInformation("Generation Done");
            }

            if (!await _context.PieceContentTag.AnyAsync())
            {
                _logger.LogInformation("Generating PieceContentTags");

                var pieceContentTags = new List<PieceContentTag>();
                pieceContentTags.Add(new PieceContentTag { ContentTagId = 1, PieceId = 1, ProjectId = 1, Name="", ContentId=3 });
                pieceContentTags.Add(new PieceContentTag { ContentTagId = 2, PieceId = 2, ProjectId = 1, Name = "", ContentId = 1 });
                pieceContentTags.Add(new PieceContentTag { ContentTagId = 3, PieceId = 3, ProjectId = 1, Name = "", ContentId = 2});
                pieceContentTags.Add(new PieceContentTag { ContentTagId = 4, PieceId = 3, ProjectId = 1, Name = "", ContentId = 1 });

                _context.PieceContentTag.AddRange(pieceContentTags);
                _logger.LogInformation("Generation Done");
            }

            if (!await _context.EventLog.AnyAsync())
            {
                _logger.LogInformation("Generating EventLogs");

                var eventLog = new List<EventLog>();
                eventLog.Add(new EventLog { ProjectId = 1, ApplicationUserId = 1, EventTypeId = 2, PieceId = 0 });
                eventLog.Add(new EventLog { ProjectId = 1, ApplicationUserId = 1, EventTypeId = 1, PieceId = 1 });
                eventLog.Add(new EventLog { ProjectId = 1, ApplicationUserId = 1, EventTypeId = 1, PieceId = 2 });
                eventLog.Add(new EventLog { ProjectId = 1, ApplicationUserId = 1, EventTypeId = 1, PieceId = 3 });

                _context.EventLog.AddRange(eventLog);
                _logger.LogInformation("Generation Done");
            }//EVENTS

            if (!await _context.EventType.AnyAsync())
            {
                _logger.LogInformation("Generating EventTypes");

                var eventTypes = new List<EventType>();
                eventTypes.Add(new EventType { Name = "CRUD Piece" });
                eventTypes.Add(new EventType { Name = "CRUD Project" });
                eventTypes.Add(new EventType { Name = "CRUD Checklist Item" });
                eventTypes.Add(new EventType { Name = "CRUD Content Tag" });
                eventTypes.Add(new EventType { Name = "CRUD ViewTypes" });
                eventTypes.Add(new EventType { Name = "CRUD ViewAttributeType" });
                eventTypes.Add(new EventType { Name = "CRUD AccountTypes" });
                eventTypes.Add(new EventType { Name = "CRUD Users" });
                eventTypes.Add(new EventType { Name = "CRUD UserAccounts" });
                eventTypes.Add(new EventType { Name = "CRUD UserProjects" });
                eventTypes.Add(new EventType { Name = "CRUD ProjectContentTags" });
                eventTypes.Add(new EventType { Name = "CRUD PieceViewAttributes" });
                eventTypes.Add(new EventType { Name = "CRUD ProjectPieces" });
                eventTypes.Add(new EventType { Name = "CRUD PieceContentTags" });

                _context.EventType.AddRange(eventTypes);
            } 

            if (!await _context.Users.AnyAsync())
            {
                _logger.LogInformation("Generating inbuilt accounts");

                const string adminRoleName = "administrator";
                const string userRoleName = "user";
                const string appAdminRoleName = "projectr admin";

                //TODO remove/rename these?
                await EnsureRoleAsync(adminRoleName, "Default administrator", ApplicationPermissions.GetAllPermissionValues());
                await EnsureRoleAsync(userRoleName, "Default user", new string[] { });

                await EnsureRoleAsync(appAdminRoleName, "Projectr Administrator", new string[] { });


                //TODO remove these users
                //await CreateUserAsync("nick", "rando", "Nicks Projectr Test Account", "nsc319@gmail.com", "+1 (123) 000-0001", new string[] { adminRoleName });

                await CreateUserAsync("admin", "tempP@ss123", "Inbuilt Administrator", "admin@ebenmonney.com", "+1 (123) 000-0000", new string[] { adminRoleName });
                //await CreateUserAsync("user", "tempP@ss123", "Inbuilt Standard User", "user@ebenmonney.com", "+1 (123) 000-0001", new string[] { userRoleName });

                _logger.LogInformation("Inbuilt account generation completed");
            }

            //TODO remove these
            if (!await _context.Customers.AnyAsync() && !await _context.ProductCategories.AnyAsync())
            {
                _logger.LogInformation("Seeding initial data");

                Customer cust_1 = new Customer
                {
                    Name = "Ebenezer Monney",
                    Email = "contact@ebenmonney.com",
                    Gender = Gender.Male,
                    DateCreated = DateTime.UtcNow,
                    DateModified = DateTime.UtcNow
                };

                Customer cust_2 = new Customer
                {
                    Name = "Itachi Uchiha",
                    Email = "uchiha@narutoverse.com",
                    PhoneNumber = "+81123456789",
                    Address = "Some fictional Address, Street 123, Konoha",
                    City = "Konoha",
                    Gender = Gender.Male,
                    DateCreated = DateTime.UtcNow,
                    DateModified = DateTime.UtcNow
                };

                Customer cust_3 = new Customer
                {
                    Name = "John Doe",
                    Email = "johndoe@anonymous.com",
                    PhoneNumber = "+18585858",
                    Address = @"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet",
                    City = "Lorem Ipsum",
                    Gender = Gender.Male,
                    DateCreated = DateTime.UtcNow,
                    DateModified = DateTime.UtcNow
                };

                Customer cust_4 = new Customer
                {
                    Name = "Jane Doe",
                    Email = "Janedoe@anonymous.com",
                    PhoneNumber = "+18585858",
                    Address = @"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet",
                    City = "Lorem Ipsum",
                    Gender = Gender.Male,
                    DateCreated = DateTime.UtcNow,
                    DateModified = DateTime.UtcNow
                };



                ProductCategory prodCat_1 = new ProductCategory
                {
                    Name = "None",
                    Description = "Default category. Products that have not been assigned a category",
                    DateCreated = DateTime.UtcNow,
                    DateModified = DateTime.UtcNow
                };



                Product prod_1 = new Product
                {
                    Name = "BMW M6",
                    Description = "Yet another masterpiece from the world's best car manufacturer",
                    BuyingPrice = 109775,
                    SellingPrice = 114234,
                    UnitsInStock = 12,
                    IsActive = true,
                    ProductCategory = prodCat_1,
                    DateCreated = DateTime.UtcNow,
                    DateModified = DateTime.UtcNow
                };

                Product prod_2 = new Product
                {
                    Name = "Nissan Patrol",
                    Description = "A true man's choice",
                    BuyingPrice = 78990,
                    SellingPrice = 86990,
                    UnitsInStock = 4,
                    IsActive = true,
                    ProductCategory = prodCat_1,
                    DateCreated = DateTime.UtcNow,
                    DateModified = DateTime.UtcNow
                };



                Order ordr_1 = new Order
                {
                    Discount = 500,
                    Cashier = await _context.Users.FirstAsync(),
                    Customer = cust_1,
                    DateCreated = DateTime.UtcNow,
                    DateModified = DateTime.UtcNow,
                    OrderDetails = new List<OrderDetail>()
                    {
                        new OrderDetail() {UnitPrice = prod_1.SellingPrice, Quantity=1, Product = prod_1 },
                        new OrderDetail() {UnitPrice = prod_2.SellingPrice, Quantity=1, Product = prod_2 },
                    }
                };

                Order ordr_2 = new Order
                {
                    Cashier = await _context.Users.FirstAsync(),
                    Customer = cust_2,
                    DateCreated = DateTime.UtcNow,
                    DateModified = DateTime.UtcNow,
                    OrderDetails = new List<OrderDetail>()
                    {
                        new OrderDetail() {UnitPrice = prod_2.SellingPrice, Quantity=1, Product = prod_2 },
                    }
                };


                _context.Customers.Add(cust_1);
                _context.Customers.Add(cust_2);
                _context.Customers.Add(cust_3);
                _context.Customers.Add(cust_4);

                _context.Products.Add(prod_1);
                _context.Products.Add(prod_2);

                _context.Orders.Add(ordr_1);
                _context.Orders.Add(ordr_2);

                await _context.SaveChangesAsync();

                _logger.LogInformation("Seeding initial data completed");
            }
            await _context.SaveChangesAsync();

        }



        private async Task EnsureRoleAsync(string roleName, string description, string[] claims)
        {
            if ((await _accountManager.GetRoleByNameAsync(roleName)) == null)
            {
                ApplicationRole applicationRole = new ApplicationRole(roleName, description);

                var result = await this._accountManager.CreateRoleAsync(applicationRole, claims);

                if (!result.Succeeded)
                    throw new Exception($"Seeding \"{description}\" role failed. Errors: {string.Join(Environment.NewLine, result.Errors)}");
            }
        }

        private async Task<ApplicationUser> CreateUserAsync(string userName, string password, string fullName, string email, string phoneNumber, string[] roles)
        {
            ApplicationUser applicationUser = new ApplicationUser
            {
                UserName = userName,
                FullName = fullName,
                Email = email,
                PhoneNumber = phoneNumber,
                EmailConfirmed = true,
                IsEnabled = true
            };

            var result = await _accountManager.CreateUserAsync(applicationUser, roles, password);

            if (!result.Succeeded)
                throw new Exception($"Seeding \"{userName}\" user failed. Errors: {string.Join(Environment.NewLine, result.Errors)}");


            return applicationUser;
        }
    }
}
