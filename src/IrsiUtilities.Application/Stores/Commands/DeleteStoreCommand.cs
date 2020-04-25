using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace IrsiUtilities.Application.Stores.Commands
{
    public class DeleteStoreCommand : IRequest
    {
        public Guid Id { get; set; }
    }

    public class DeleteStoreCommandHandler : IRequestHandler<DeleteStoreCommand>
    {
        private readonly IApplicationDbContext _context;

        public DeleteStoreCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteStoreCommand request, CancellationToken cancellationToken)
        {
            var store = await _context.Stores.FindAsync(new object[] { request.Id }, cancellationToken);
            if(store == null) throw new EntityNotFoundException($"Store entity with id ${request.Id} not found!");
            var electricityInvoices = _context.ElectricityInvoices.Where(x => x.StoreId == store.Id);
            var waterInvoices = _context.WaterInvoices.Where(x => x.StoreId == store.Id);

            _context.ElectricityInvoices.RemoveRange(electricityInvoices);
            _context.WaterInvoices.RemoveRange(waterInvoices);
            _context.Stores.Remove(store);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}