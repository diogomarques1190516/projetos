using WarehouseManagement.Domain.Warehouses;
using WarehouseManagement.Infrastructure.Shared;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace WarehouseManagement.Infrastructure.Warehouses
{
    public class WarehouseRepository : BaseRepository<Warehouse, WarehouseId>, IWarehouseRepository
    {
      
        public WarehouseRepository(WarehouseManagementDbContext context):base(context.Warehouses)
        {
            
        }

        public async Task<Warehouse> GetMainWarehouseAsync()
        {
            return  await this._objs
               .Where(x => x.IsMainWarehouse==true).FirstOrDefaultAsync();
        }

    }
}