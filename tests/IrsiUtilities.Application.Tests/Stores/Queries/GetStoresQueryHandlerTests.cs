using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using IrsiUtilities.Application.Stores.Queries;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Infrastructure.Persistence;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.Stores.Queries
{
    [Collection("QueryCollection")]
    public class GetStoresQueryHandlerTests
    {
        private readonly UtilitiesDbContext _context;
        private readonly IMapper _mapper;

        public GetStoresQueryHandlerTests(QueryTestFixture fixture)
        {
            _context = fixture.Context;
            _mapper = fixture.Mapper;
        }

        [Fact]
        public async Task GetStores_Should_ReturnStores()
        {
            var sut = new GetStoresQueryHandler(_context, _mapper);

            var result = await sut.Handle(new GetStoresQuery(), CancellationToken.None);

            result.ShouldBeOfType<StoresVM>();
            result.Stores.Count.ShouldBe(1);
        }
    }
}