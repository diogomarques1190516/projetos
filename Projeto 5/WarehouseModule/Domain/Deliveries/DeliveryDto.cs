using System;
using WarehouseManagement.Domain.Warehouses;

namespace WarehouseManagement.Domain.Deliveries
{
    public class DeliveryDto
    {
        public string Id { get; set; }
        public string DeliveryDate {get; set; }
        public double MassOfDelivery {get; set; }
        public string WarehouseId {get; set; }
        public int TimeToPlaceDelivery {get; set; }
        public int TimeToPickUpDelivery {get; set; }

         public DeliveryDto(string Id, string deliveryDate, double massOfDelivery,string warehouseId, int timeToPlaceDelivery, int timeToPickUpDelivery)
        {
            this.Id = Id;
            this.DeliveryDate = deliveryDate;
            this.MassOfDelivery = massOfDelivery;
            this.WarehouseId = warehouseId;
            this.TimeToPlaceDelivery = timeToPlaceDelivery;
            this.TimeToPickUpDelivery = timeToPickUpDelivery;
        }
    }
}
