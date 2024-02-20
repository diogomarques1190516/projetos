using System.Threading.Tasks;
using System.Collections.Generic;
using WarehouseManagement.Domain.Shared;
using WarehouseManagement.Domain.Warehouses;
using System;

namespace WarehouseManagement.Domain.Deliveries
{
    public class DeliveryService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IDeliveryRepository _repo;

        private readonly IWarehouseRepository _repoWar;

        public DeliveryService(IUnitOfWork unitOfWork, IDeliveryRepository repo, IWarehouseRepository repoWar)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
            this._repoWar = repoWar;
        }

        public async Task<List<DeliveryDto>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();
            Console.WriteLine("This is a log4");
            List<DeliveryDto> listDto = list.ConvertAll<DeliveryDto>(del => new DeliveryDto(del.Id.AsString(), DateParser.toString(del.DeliveryDate), del.MassOfDelivery, del.WarehouseId.AsString(), del.TimeToPlaceDelivery, del.TimeToPickUpDelivery));

            return listDto;
        }

        public async Task<List<DeliveryDto>> GetByDateAsync(DateTime date)
        {
            var list = await this._repo.GetByDateAsync(date);
            Console.WriteLine("This is a log1");
            List<DeliveryDto> listDto = list.ConvertAll<DeliveryDto>(del => new DeliveryDto(del.Id.AsString(), DateParser.toString(del.DeliveryDate), del.MassOfDelivery, del.WarehouseId.AsString(), del.TimeToPlaceDelivery, del.TimeToPickUpDelivery));

            return listDto;
        }
        

        public async Task<DeliveryDto> GetByIdAsync(DeliveryId id)
        {
            var del = await this._repo.GetByIdAsync(id);
            
            if(del == null)
                return null;

            return new DeliveryDto(del.Id.AsString(), DateParser.toString(del.DeliveryDate), del.MassOfDelivery, del.WarehouseId.AsString(), del.TimeToPlaceDelivery, del.TimeToPickUpDelivery);
        }

        public async Task<DeliveryDto> AddAsync(DeliveryDto dto)
        {
            await checkWarehouseIdAsync(new WarehouseId(dto.WarehouseId));
            var del = new Delivery(new DeliveryId(dto.Id), dto.DeliveryDate, dto.MassOfDelivery,new WarehouseId(dto.WarehouseId), dto.TimeToPlaceDelivery, dto.TimeToPickUpDelivery);

            await this._repo.AddAsync(del);

            await this._unitOfWork.CommitAsync();

            return new DeliveryDto(del.Id.AsString(), DateParser.toString(del.DeliveryDate), del.MassOfDelivery, del.WarehouseId.AsString(), del.TimeToPlaceDelivery, del.TimeToPickUpDelivery);
        }

        public async Task<DeliveryDto> UpdateAsync(DeliveryDto dto)
        {
            await checkWarehouseIdAsync(new WarehouseId(dto.WarehouseId));
            var del = await this._repo.GetByIdAsync(new DeliveryId(dto.Id)); 

            if (del == null)
                return null;   

            // change all field
            del.ChangeDeliveryDate(dto.DeliveryDate);
            del.ChangeMassOfDelivery(dto.MassOfDelivery);
            del.ChangeWarehouseId(new WarehouseId(dto.WarehouseId));
            del.ChangeTimeToPlaceDelivery(dto.TimeToPlaceDelivery);
            del.ChangeTimeToPickUpDelivery(dto.TimeToPickUpDelivery);
            
            await this._unitOfWork.CommitAsync();

            return new DeliveryDto(del.Id.AsString(), DateParser.toString(del.DeliveryDate), del.MassOfDelivery, del.WarehouseId.AsString(), del.TimeToPlaceDelivery, del.TimeToPickUpDelivery);
        }


         public async Task<DeliveryDto> DeleteAsync(DeliveryId id)
        {
            var del = await this._repo.GetByIdAsync(id); 

            if (del == null)
                return null;   

            this._repo.Remove(del);
            await this._unitOfWork.CommitAsync();

            return new DeliveryDto(del.Id.AsString(), DateParser.toString(del.DeliveryDate), del.MassOfDelivery, del.WarehouseId.AsString(), del.TimeToPlaceDelivery, del.TimeToPickUpDelivery);
        }
     private async Task checkWarehouseIdAsync(WarehouseId warehouseId)
        {
           var war = await _repoWar.GetByIdAsync(warehouseId);
           if (war == null)
                throw new BusinessRuleValidationException("Invalid Warehouse Id.");
        }
    }
}
   