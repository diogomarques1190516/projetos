using WarehouseManagement.Domain.Deliveries;
using WarehouseManagement.Infrastructure.Shared;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace WarehouseManagement.Infrastructure.Deliveries
{
    public class DeliveryRepository : BaseRepository<Delivery, DeliveryId>, IDeliveryRepository
    {
      
        public DeliveryRepository(WarehouseManagementDbContext context):base(context.Deliveries)
        {
            
        }
        
        public async Task<List<Delivery>> GetByDateAsync(DateTime date)
        {
             Console.WriteLine("This is a log");
            return  await this._objs
               .Where(x => DateTime.Compare(x.DeliveryDate, date)==0).ToListAsync();
        }

    }
}