using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace IrsiUtilities.Application.ElectricityInvoices.Queries
{
    public class GetElectricityInvoicesQuery : IRequest<ElectricityInvoicesVM>
    {
        public class GetElectricityInvoicesQueryHandler : IRequestHandler<GetElectricityInvoicesQuery, ElectricityInvoicesVM>
        {
            public Task<ElectricityInvoicesVM> Handle(GetElectricityInvoicesQuery request, CancellationToken cancellationToken)
            {
                throw new System.NotImplementedException();
            }
        }
    }
}