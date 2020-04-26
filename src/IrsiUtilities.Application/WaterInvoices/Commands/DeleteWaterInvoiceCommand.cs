using System;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Common.Interfaces;
using MediatR;

namespace IrsiUtilities.Application.WaterInvoices.Commands
{
    public class DeleteWaterInvoiceCommand : IRequest
    {
        public Guid Id { get; set; }
    }

    public class DeleteWaterInvoiceCommandHandler : IRequestHandler<DeleteWaterInvoiceCommand>
    {
        private readonly IApplicationDbContext _context;

        public DeleteWaterInvoiceCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(DeleteWaterInvoiceCommand request, CancellationToken cancellationToken)
        {
            var invoice = await _context.WaterInvoices.FindAsync(new object[] { request.Id }, cancellationToken);
            if (invoice == null) throw new EntityNotFoundException($"Electricity Invoice entity wit id {request.Id} not found!");

            _context.WaterInvoices.Remove(invoice);

            await _context.SaveChangesAsync(cancellationToken);

            return Unit.Value;
        }
    }
}