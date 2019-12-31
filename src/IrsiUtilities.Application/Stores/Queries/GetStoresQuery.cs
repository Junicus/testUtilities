using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using IrsiUtilities.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace IrsiUtilities.Application.Stores.Queries
{
    public class GetStoresQuery : IRequest<StoresVM>
    {
        public class GetStoresQueryHandler : IRequestHandler<GetStoresQuery, StoresVM>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public GetStoresQueryHandler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<StoresVM> Handle(GetStoresQuery request, CancellationToken cancellationToken)
            {
                var vm = new StoresVM();
                vm.Stores = await _context.Stores
                    .ProjectTo<StoreDto>(_mapper.ConfigurationProvider)
                    .OrderBy(t => t.Name)
                    .ToListAsync(cancellationToken);
                return vm;
            }
        }
    }
}