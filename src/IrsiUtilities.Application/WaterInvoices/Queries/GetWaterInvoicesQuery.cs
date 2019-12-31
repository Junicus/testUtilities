using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using IrsiUtilities.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace IrsiUtilities.Application.WaterInvoices.Queries
{
    public class GetWaterInvoicesQuery : IRequest<WaterInvoicesVM>
    {
        public class GetWaterInvoicesQueryHandler : IRequestHandler<GetWaterInvoicesQuery, WaterInvoicesVM>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public GetWaterInvoicesQueryHandler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<WaterInvoicesVM> Handle(GetWaterInvoicesQuery request, CancellationToken cancellationToken)
            {
                var vm = new WaterInvoicesVM();
                vm.Invoices = await _context.WaterInvoices
                    .ProjectTo<WaterInvoiceDto>(_mapper.ConfigurationProvider)
                    .OrderBy(t => t.InvoiceDate)
                    .ToListAsync(cancellationToken);
                return vm;
            }
        }
    }
}