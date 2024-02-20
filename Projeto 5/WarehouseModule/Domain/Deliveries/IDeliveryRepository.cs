using WarehouseManagement.Domain.Shared;
using System.Threading.Tasks;
using System.Collections.Generic;
using System;

namespace WarehouseManagement.Domain.Deliveries
{
    public interface IDeliveryRepository: IRepository<Delivery,DeliveryId>
    {
        Task<List<Delivery>> GetByDateAsync(DateTime date);
    }
}