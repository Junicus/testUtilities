using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Common.Interfaces;
using MediatR;

namespace IrsiUtilities.Application.ElectricityInvoices.Queries
{
    public class GetElectricityInvoiceQuery : IRequest<ElectricityInvoiceVM>
    {
        public Guid Id { get; set; }
    }

    public class GetElectricityInvoiceQueryHandler : IRequestHandler<GetElectricityInvoiceQuery, ElectricityInvoiceVM>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetElectricityInvoiceQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<ElectricityInvoiceVM> Handle(GetElectricityInvoiceQuery request,
            CancellationToken cancellationToken)
        {
            var entity = await _context.ElectricityInvoices.FindAsync(new object[]
                {request.Id}, cancellationToken);
            if (entity == null)
            {
                throw new EntityNotFoundException($"Electricity Invoice entity with id {request.Id} not found!");
            }

            var vm = new ElectricityInvoiceVM
            {
                Invoice = _mapper.Map<ElectricityInvoiceDto>(entity)
            };
            return vm;
        }
    }
}