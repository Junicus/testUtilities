using System.Threading;
using System.Threading.Tasks;

namespace IrsiUtilities.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}