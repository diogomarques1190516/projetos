using System;
using System.Text.Json.Serialization;
using WarehouseManagement.Domain.Shared;
using WarehouseManagement.Domain.Warehouses;

namespace WarehouseManagement.Domain.Deliveries;
public class Delivery : Entity<DeliveryId>, IAggregateRoot
{
    public DateTime DeliveryDate {get; set; }
    public double MassOfDelivery {get; private set; }
    public WarehouseId WarehouseId {get; private set; }
    public int TimeToPlaceDelivery {get; private set; }
    public int TimeToPickUpDelivery {get; private set; }

    private Delivery()
    {

    }
    public Delivery(DeliveryId Id, string deliveryDate, double massOfDelivery, WarehouseId warehouseId, int timeToPlaceDelivery, int timeToPickUpDelivery)
    {
        this.Id = Id;
        this.ChangeDeliveryDate(deliveryDate);
        this.ChangeMassOfDelivery(massOfDelivery);
        this.ChangeWarehouseId(warehouseId);
        this.ChangeTimeToPlaceDelivery(timeToPlaceDelivery);
        this.ChangeTimeToPickUpDelivery(timeToPickUpDelivery);
    }
    public void ChangeDeliveryDate(string DeliveryDate)
        {
            this.DeliveryDate = DateParser.fromString(DeliveryDate);
        }

    public void ChangeWarehouseId(WarehouseId warehouseId)
        {
            if (warehouseId == null)
                throw new BusinessRuleValidationException("Every delivery requires a warehouse.");
           this.WarehouseId = warehouseId;
        }
    public void ChangeMassOfDelivery(double massOfDelivery)
    {
        if (massOfDelivery < 0)
            throw new BusinessRuleValidationException("Mass of delivery cannot be negative value.");
        this.MassOfDelivery = massOfDelivery;
    }
    public void ChangeTimeToPlaceDelivery(int timeToPlaceDelivery)
    {
        if (timeToPlaceDelivery < 0)
            throw new BusinessRuleValidationException("Time to place delivery cannot be negative value.");
        this.TimeToPlaceDelivery = timeToPlaceDelivery;
    }
    public void ChangeTimeToPickUpDelivery(int timeToPickUpDelivery)
    {
        if (timeToPickUpDelivery < 0)
            throw new BusinessRuleValidationException("Time to pick up delivery cannot be negative value.");
        this.TimeToPickUpDelivery = timeToPickUpDelivery;
    }
}

