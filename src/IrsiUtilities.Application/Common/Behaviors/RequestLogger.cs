using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Interfaces;
using MediatR.Pipeline;
using Microsoft.Extensions.Logging;

namespace IrsiUtilities.Application.Common.Behaviors
{
    public class RequestLogger<TRequet> : IRequestPreProcessor<TRequet>
    {
        private readonly ILogger _logger;
        private readonly ICurrentUserService _currentUserService;
        private readonly IIdentityService _identityService;

        public RequestLogger(ILogger<TRequet> logger, ICurrentUserService currentUserService, IIdentityService identityService)
        {
            _logger = logger;
            _currentUserService = currentUserService;
            _identityService = identityService;
        }

        public async Task Process(TRequet request, CancellationToken cancellationToken)
        {
            var requestName = typeof(TRequet).Name;
            var userId = _currentUserService.UserId;
            var userName = await _identityService.GetUserNameAsync(userId);

            _logger.LogInformation("IrsiUtilities Request: {Name} {@UserId} {@UserName} {@Request}",
                requestName, userId, userName, request);
        }
    }
}