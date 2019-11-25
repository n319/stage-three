




using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class ProjectContentTagRepository : Repository<ProjectContentTag>, IProjectContentTagRepository
    {
        public ProjectContentTagRepository(DbContext context) : base(context)
        { }

        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
    }
}