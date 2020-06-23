using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using DAL.Models;

namespace QuickApp.Data
{
    public class QuickAppContext : DbContext
    {
        public QuickAppContext (DbContextOptions<QuickAppContext> options)
            : base(options)
        {
        }

        public DbSet<DAL.Models.Piece> Piece { get; set; }
    }
}
