using System;

namespace WarehouseManagement.Domain.Warehouses
{
    public class WarehouseDto
    {
        public string Id { get; set; }
        public string Designation {get; set; }
        public string Address { get; set; }
        public double Lat {get; set; }
        public double Lng {get; set; }
        public double Altitude {get; private set; }
        public double Radius {get; private set; }
        public double Rotation {get; private set; }
        public double Scale {get; private set; }
        public string Model {get; private set; }
        public bool IsMainWarehouse {get; private set; }


        public WarehouseDto(string id, string designation,string address,double lat, double lng, double altitude, double radius, double rotation, double scale, string model,bool isMainWarehouse)
        {
            this.Id = id;
            this.Designation = designation;
            this.Address = address;
            this.Lat = lat;
            this.Lng = lng;
            this.Rotation = rotation;
            this.Altitude = altitude;
            this.Radius = radius;
            this.Scale = scale;
            this.Model = model;
            this.IsMainWarehouse = isMainWarehouse;
        }
    }
}
