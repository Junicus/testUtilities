using System.Security.Claims;
using IrsiUtilities.Application.Common.Interfaces;
using Microsoft.AspNetCore.Http;

namespace IrsiUtilities.Services
{
    public class CurrentUserService : ICurrentUserService
    {
        public CurrentUserService(IHttpContextAccessor contextAccessor)
        {
            UserId = contextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);
        }

        public string UserId { get; set; }
    }
}