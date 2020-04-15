using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Common.Interfaces;
using MediatR;

namespace IrsiUtilities.Application.Stores.Queries
{
    public class GetStoreQuery : IRequest<StoreVM>
    {
        public Guid Id { get; set; }
    }

    public class GetStoreQueryHandler : IRequestHandler<GetStoreQuery, StoreVM>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetStoreQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<StoreVM> Handle(GetStoreQuery request, CancellationToken cancellationToken)
        {
            var entity = await _context.Stores.FindAsync(request.Id);
            if (entity == null)
            {
                throw new EntityNotFoundException($"Store entity with id {request.Id} not found!");
            }

            var vm = new StoreVM
            {
                Store = _mapper.Map<StoreDto>(entity)
            };
            return vm;
        }
    }
}