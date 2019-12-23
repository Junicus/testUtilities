using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace IrsiUtilities.Application.ElectricityInvoices.Commands
{
    public class CreateElectricityInvoiceCommand : IRequest<Guid>
    {
        public class CreateElectricityInvoiceCommandHandler : IRequestHandler<CreateElectricityInvoiceCommand, Guid>
        {
            public Task<Guid> Handle(CreateElectricityInvoiceCommand request, CancellationToken cancellationToken)
            {
                throw new System.NotImplementedException();
            }
        }
    }
}