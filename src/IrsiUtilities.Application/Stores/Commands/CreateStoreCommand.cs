using System;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Interfaces;
using IrsiUtilities.Domain.Entities;
using MediatR;

namespace IrsiUtilities.Application.Stores.Commands
{
    public class CreateStoreCommand : IRequest<Guid>
    {
        public string Name { get; set; }

        public class CreateStoreCommandHandler : IRequestHandler<CreateStoreCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public CreateStoreCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(CreateStoreCommand request, CancellationToken cancellationToken)
            {
                var entity = new Store
                {
                    Name = request.Name
                };

                _context.Stores.Add(entity);

                await _context.SaveChangesAsync(cancellationToken);

                return entity.Id;
            }

        }
    }
}