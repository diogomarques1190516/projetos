using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WarehouseManagement.Domain.Deliveries;

namespace WarehouseManagement.Infrastructure.Deliveries
{
    internal class DeliveryEntityTypeConfiguration : IEntityTypeConfiguration<Delivery>
    {
        public void Configure(EntityTypeBuilder<Delivery> builder)
        {
            builder.HasKey(b => new { b.Id, b.WarehouseId});
            
        }
    }
}