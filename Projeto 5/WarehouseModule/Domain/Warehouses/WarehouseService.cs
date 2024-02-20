using System.Threading.Tasks;
using System.Collections.Generic;
using WarehouseManagement.Domain.Shared;
using System;

namespace WarehouseManagement.Domain.Warehouses
{
    public class WarehouseService:IWarehouseService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IWarehouseRepository _repo;

        public WarehouseService(IUnitOfWork unitOfWork, IWarehouseRepository repo)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
        }

        public async Task<List<WarehouseDto>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();
            
            List<WarehouseDto> listDto = list.ConvertAll<WarehouseDto>(war => new WarehouseDto(war.Id.AsString(),war.Designation,war.Address,war.Lat,war.Lng, war.Altitude, war.Radius, war.Rotation, war.Scale, war.Model,war.IsMainWarehouse));

            return listDto;
        }

        public async Task<WarehouseDto> GetByIdAsync(WarehouseId id)
        {
            var war = await this._repo.GetByIdAsync(id);
            
            if(war == null)
                return null;

            return new WarehouseDto(war.Id.AsString(),war.Designation,war.Address,war.Lat,war.Lng, war.Altitude, war.Radius, war.Rotation, war.Scale, war.Model,war.IsMainWarehouse);
        }

        public async Task<WarehouseDto> AddAsync(WarehouseDto dto)
        {
            var war = new Warehouse(new WarehouseId(dto.Id),dto.Designation,dto.Address,dto.Lat,dto.Lng, dto.Altitude, dto.Radius, dto.Rotation, dto.Scale, dto.Model,dto.IsMainWarehouse);

            await this._repo.AddAsync(war);

            await this._unitOfWork.CommitAsync();

            return new WarehouseDto(war.Id.AsString(),war.Designation,war.Address,war.Lat,war.Lng, war.Altitude, war.Radius, war.Rotation, war.Scale, war.Model,war.IsMainWarehouse);
        }

        public async Task<WarehouseDto> UpdateAsync(WarehouseDto dto)
        {

        
            var warehouse = await this._repo.GetByIdAsync(new WarehouseId(dto.Id)); 

            if (warehouse == null)
                return null;   

            // change all field
            warehouse.Designation = dto.Designation;
            warehouse.Address = dto.Address;
            warehouse.ChangeLatitudeId(dto.Lat);
            warehouse.ChangeLongitudeId(dto.Lng);
            
            await this._unitOfWork.CommitAsync();

            return new WarehouseDto(warehouse.Id.AsString(),warehouse.Designation,warehouse.Address,warehouse.Lat,warehouse.Lng, warehouse.Altitude, warehouse.Radius, warehouse.Rotation, warehouse.Scale, warehouse.Model,warehouse.IsMainWarehouse);
        }

         public async Task<WarehouseDto> DeleteAsync(WarehouseId id)
        {
            var war = await this._repo.GetByIdAsync(id); 

            if (war == null)
                return null;   

            this._repo.Remove(war);
            await this._unitOfWork.CommitAsync();

            return new WarehouseDto(war.Id.AsString(),war.Designation,war.Address,war.Lat,war.Lng, war.Altitude, war.Radius, war.Rotation, war.Scale, war.Model,war.IsMainWarehouse);
        }

        public async Task<WarehouseDto> GetMainWarehouse()
        {
            var war = await this._repo.GetMainWarehouseAsync();
            
            if(war == null)
                return null;

            return new WarehouseDto(war.Id.AsString(),war.Designation,war.Address,war.Lat,war.Lng, war.Altitude, war.Radius, war.Rotation, war.Scale, war.Model,war.IsMainWarehouse);
        }
    }
}