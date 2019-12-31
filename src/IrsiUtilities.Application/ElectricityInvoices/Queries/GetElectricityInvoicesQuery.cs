using System.Linq;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using IrsiUtilities.Application.Common.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace IrsiUtilities.Application.ElectricityInvoices.Queries
{
    public class GetElectricityInvoicesQuery : IRequest<ElectricityInvoicesVM>
    {
        public class GetElectricityInvoicesQueryHandler : IRequestHandler<GetElectricityInvoicesQuery, ElectricityInvoicesVM>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public GetElectricityInvoicesQueryHandler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<ElectricityInvoicesVM> Handle(GetElectricityInvoicesQuery request, CancellationToken cancellationToken)
            {
                var vm = new ElectricityInvoicesVM();
                vm.Invoices = await _context.ElectricityInvoices
                    .ProjectTo<ElectricityInvoiceDto>(_mapper.ConfigurationProvider)
                    .OrderBy(t => t.InvoiceDate)
                    .ToListAsync(cancellationToken);
                return vm;
            }
        }
    }
}