using System;
using System.Collections.Generic;
using WarehouseManagement.Domain.Deliveries;
using WarehouseManagement.Domain.Shared;

namespace WarehouseManagement.Domain.Warehouses;
public class Warehouse: Entity<WarehouseId>, IAggregateRoot
{
    public string Designation {get; set; }
    public string Address { get; set; }
    public double Lat {get; private set; }
    public double Lng {get; private set; }
    public double Altitude {get; private set; }
    public double Radius {get; private set; }
    public double Rotation {get; private set; }
    public double Scale {get; private set; }
    public string Model {get; private set; }
    public bool IsMainWarehouse {get; private set; }

    private Warehouse()
    {

    }
    public Warehouse(WarehouseId Id, string designation,string address,double lat, double lng, double altitude, double radius, double rotation, double scale, string model,bool isMainWarehouse)
        {
            this.Id = Id;
            this.Designation = designation;
            this.Address = address;
            this.ChangeLatitudeId(lat);
            this.ChangeLongitudeId(lng);
            this.ChangeRotation(rotation);
            this.Altitude = altitude;
            this.ChangeRadius(radius);
            this.ChangeScale(scale);
            //TODO: check for url link format can be implemented
            this.ChangeModel(model);
            this.IsMainWarehouse = isMainWarehouse;
        }
    
    public void ChangeLatitudeId(double lat)
        {
            if(lat<=-90 || lat>=90){
                throw new BusinessRuleValidationException("Latitude need to be between following values: <-90,90>.");
            }
            this.Lat = lat;
        }
    public void ChangeLongitudeId(double lng)
        {
            if(lng<=-180 || lng>=180){
                throw new BusinessRuleValidationException("Longitude need to be between following values: <-180,180>.");
            }
            this.Lng = lng;
        }
    public void ChangeRotation(double rotation)
        {
            if(rotation<=-360 || rotation>=360){
                throw new BusinessRuleValidationException("Rotation need to be between following values: <-360,360>.");
            }
            this.Rotation = rotation;
        }

    public void ChangeRadius(double radius)
        {
            if(radius<=0){
                throw new BusinessRuleValidationException("Radius value need to be above zero.");
            }
            this.Radius=radius;
        }
    public void ChangeScale(double scale)
        {
            if(scale<=0){
                throw new BusinessRuleValidationException("Scale value need to be above zero.");
            }
            this.Scale=scale;
        }
    public void ChangeModel(string model)
        {
            if(model==null){
                throw new BusinessRuleValidationException("Model url cannot be null.");
            }
            this.Model=model;
        }
}