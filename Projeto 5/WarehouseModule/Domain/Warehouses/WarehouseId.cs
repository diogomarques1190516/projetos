using System;
using WarehouseManagement.Domain.Shared;

namespace WarehouseManagement.Domain.Warehouses
{
    public class WarehouseId : EntityId
    {

        public WarehouseId()
        {

        }
        public WarehouseId(String value):base(value)
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
        /*
        [JsonConstructor]
        public WarehouseId(Guid value) : base(value)
        {
        }

        public WarehouseId(String value) : base(value)
        {
        }


        override
        protected  Object createFromString(String text){
            return new Guid(text);
        }

        override
        public String AsString(){
            Guid obj = (Guid) base.ObjValue;
            return obj.ToString();
        }
        
       
        public Guid AsGuid(){
            return (Guid) base.ObjValue;
        }
        */
    }
}