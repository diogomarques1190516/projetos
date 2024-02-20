using WarehouseManagement.Domain.Shared;
using System.Threading.Tasks;
using System.Collections.Generic;


namespace WarehouseManagement.Domain.Warehouses
{
    public interface IWarehouseService
    {
        public Task<List<WarehouseDto>> GetAllAsync();
        public Task<WarehouseDto> GetByIdAsync(WarehouseId id);
        public Task<WarehouseDto> AddAsync(WarehouseDto dto);
        public Task<WarehouseDto> UpdateAsync(WarehouseDto dto);
        public Task<WarehouseDto> DeleteAsync(WarehouseId id);
        public Task<WarehouseDto> GetMainWarehouse();

    }
}