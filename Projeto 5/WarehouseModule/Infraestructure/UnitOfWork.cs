using System.Threading.Tasks;
using WarehouseManagement.Domain.Shared;

namespace WarehouseManagement.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly WarehouseManagementDbContext _context;

        public UnitOfWork(WarehouseManagementDbContext context)
        {
            this._context = context;
        }

        public async Task<int> CommitAsync()
        {
            return await this._context.SaveChangesAsync();
        }
    }
}