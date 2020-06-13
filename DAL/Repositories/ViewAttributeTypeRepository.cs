




using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class ViewAttributeTypeRepository : Repository<ViewTypeAttribute>, IViewAttributeTypeRepository
    {
        public ViewAttributeTypeRepository(DbContext context) : base(context)
        { }




        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;
    }
}
