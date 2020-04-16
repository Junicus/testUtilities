using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Common.Interfaces;
using MediatR;

namespace IrsiUtilities.Application.WaterInvoices.Queries
{
    public class GetWaterInvoiceQuery : IRequest<WaterInvoiceVM> 
    {
        public Guid Id { get; set; }
    }

    public class GetWaterInvoiceQueryHandler : IRequestHandler<GetWaterInvoiceQuery, WaterInvoiceVM>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetWaterInvoiceQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<WaterInvoiceVM> Handle(GetWaterInvoiceQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.WaterInvoices.FindAsync(new object[] {request.Id}, cancellationToken);
            if (entity == null)
            {
                throw new EntityNotFoundException($"Water Invoice entity with id {request.Id} not found!");
            }

            var vm = new WaterInvoiceVM
            {
                Invoice = _mapper.Map<WaterInvoiceDto>(entity)
            };
            return vm;
        }
    }
}