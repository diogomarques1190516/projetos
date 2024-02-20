using System.Threading.Tasks;

namespace WarehouseManagement.Domain.Shared
{
    public interface IUnitOfWork
    {
        Task<int> CommitAsync();
    }
}