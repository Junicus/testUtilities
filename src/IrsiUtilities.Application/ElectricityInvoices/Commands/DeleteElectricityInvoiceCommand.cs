using System;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Common.Interfaces;
using MediatR;

namespace IrsiUtilities.Application.ElectricityInvoices.Commands
{
    public class DeleteElectricityInvoiceCommand : IRequest
    {
        public Guid Id { get; set; }
    }

    public class DeleteElectricityInvoiceCommandHandler : IRequestHandler<DeleteElectricityInvoiceCommand>
    {
        private readonly IApplicationDbContext _context;

        public DeleteElectricityInvoiceCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteElectricityInvoiceCommand request, CancellationToken cancellationToken)
        {
            var invoice = await _context.ElectricityInvoices.FindAsync(new object[] { request.Id }, cancellationToken);
            if (invoice == null) throw new EntityNotFoundException($"Electricity Invoice entity wit id {request.Id} not found!");

            _context.ElectricityInvoices.Remove(invoice);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}