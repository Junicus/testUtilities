using System;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Common.Interfaces;
using MediatR;

namespace IrsiUtilities.Application.Stores.Commands
{
    public class UpdateStoreCommand : IRequest
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string CostCenter { get; set; }
    }

    public class UpdateStoreCommandHandler : IRequestHandler<UpdateStoreCommand>
    {
        public readonly IApplicationDbContext _context;

        public UpdateStoreCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(UpdateStoreCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.Stores.FindAsync(new object[] { request.Id }, cancellationToken);
            if (entity == null)
            {
                throw new EntityNotFoundException($"Store entity with id {request.Id} not found!");
            }

            entity.Name = request.Name;
            entity.CostCenter = request.CostCenter;
            await _context.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
    }
}