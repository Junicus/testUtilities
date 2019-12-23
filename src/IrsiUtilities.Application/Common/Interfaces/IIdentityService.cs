using IrsiUtilities.Application.Common.Models;
using System.Threading.Tasks;

namespace IrsiUtilities.Application.Common.Interfaces
{
    public interface IIdentityService
    {
        Task<string> GetUserNameAsync(string userId);
        Task<(Result result, string UserId)> CreateUserAsync(string userName, string password);
        Task<Result> DeleteUserAsync(string userId);
    }
}