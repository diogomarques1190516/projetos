using System.ComponentModel.DataAnnotations.Schema;

namespace WarehouseManagement.Domain.Shared
{
    /// <summary>
    /// Base class for entities.
    /// </summary>
    public abstract class Entity<TEntityId>
    where TEntityId: EntityId
    {
         public TEntityId Id { get;  set; }
    }
}