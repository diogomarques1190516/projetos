using WarehouseManagement.Domain.Shared;
using System.Threading.Tasks;

namespace WarehouseManagement.Domain.Warehouses
{
    public interface IWarehouseRepository: IRepository<Warehouse,WarehouseId>
    {
        Task<Warehouse> GetMainWarehouseAsync();

    }
}