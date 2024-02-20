using System;
using System.Text.Json.Serialization;
using WarehouseManagement.Domain.Shared;


namespace WarehouseManagement.Domain.Deliveries
{
    public class DeliveryId : EntityId
    {
        public DeliveryId()
        {

        }

        [JsonConstructor]
        public DeliveryId(String value):base(value)
        {

        }

        override
        protected  Object createFromString(String text){
            return text;
        }
        override
        public String AsString(){
            return (String) base.Value;
        }
    }
}