using System;
using AspNetCore.Identity.MongoDbCore.Models;

namespace AH.Api.Models
{
    public class ApplicationRole : MongoIdentityRole<Guid>
{
	public ApplicationRole() : base()
	{
	}

	public ApplicationRole(string roleName) : base(roleName)
	{
	}
}	
}