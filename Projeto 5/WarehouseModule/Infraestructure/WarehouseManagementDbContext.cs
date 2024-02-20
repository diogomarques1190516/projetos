using Microsoft.EntityFrameworkCore;
using WarehouseManagement.Domain.Warehouses;
using WarehouseManagement.Infrastructure.Warehouses;
using WarehouseManagement.Domain.Deliveries;
using WarehouseManagement.Infrastructure.Deliveries;
using System;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace WarehouseManagement.Infrastructure
{
    public class WarehouseManagementDbContext : DbContext
    {

        public DbSet<Warehouse> Warehouses { get; set; }
        public DbSet<Delivery> Deliveries { get; set; }

        public WarehouseManagementDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseValueConverter(new WarehouseIdValueConverter());
            modelBuilder.UseValueConverter(new DeliveryIdValueConverter());
        }
      }

    public class WarehouseIdValueConverter : ValueConverter<WarehouseId, String>
        {
        public WarehouseIdValueConverter(ConverterMappingHints mappingHints = null)
            : base(
                id => id.Value,
                value => new WarehouseId(value),
                mappingHints
            ) { }
        }
    public class DeliveryIdValueConverter : ValueConverter<DeliveryId, String>
    {
        public DeliveryIdValueConverter(ConverterMappingHints mappingHints = null)
            : base(
                id => id.Value,
                value => new DeliveryId(value),
                mappingHints
            ) { }
    }
}