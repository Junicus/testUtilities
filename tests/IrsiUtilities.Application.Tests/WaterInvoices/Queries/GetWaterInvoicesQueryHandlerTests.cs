using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Application.WaterInvoices.Queries;
using IrsiUtilities.Infrastructure.Persistence;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.WaterInvoices.Queries
{
    [Collection("QueryCollection")]
    public class GetWaterInvoicesQueryHandlerTests
    {
        private readonly UtilitiesDbContext _context;
        private readonly IMapper _mapper;

        public GetWaterInvoicesQueryHandlerTests(QueryTestFixture fixture)
        {
            _context = fixture.Context;
            _mapper = fixture.Mapper;
        }

        [Fact]
        public async Task GetWaterInvoices_Should_ReturnInvoices()
        {
            var sut = new GetWaterInvoicesQueryHandler(_context, _mapper);

            var result = await sut.Handle(new GetWaterInvoicesQuery(), CancellationToken.None);

            result.ShouldBeOfType<WaterInvoicesVM>().ShouldNotBeNull();
            result.Invoices.Count.ShouldBe(1);
        }
    }
}
