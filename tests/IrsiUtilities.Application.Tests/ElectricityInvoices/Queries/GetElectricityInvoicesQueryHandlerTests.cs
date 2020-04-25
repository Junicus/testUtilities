using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using IrsiUtilities.Application.ElectricityInvoices.Queries;
using IrsiUtilities.Application.Stores.Queries;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Infrastructure.Persistence;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.ElectricityInvoices.Queries
{
    [Collection("QueryCollection")]
    public class GetElectricityInvoicesQueryHandlerTests
    {
        private readonly UtilitiesDbContext _context;
        private readonly IMapper _mapper;

        public GetElectricityInvoicesQueryHandlerTests(QueryTestFixture fixture)
        {
            _context = fixture.Context;
            _mapper = fixture.Mapper;
        }

        [Fact]
        public async Task GetElectricityInvoicesQuery_Should_ReturnInvoices()
        {
            var sut = new GetElectricityInvoicesQueryHandler(_context, _mapper);

            var result = await sut.Handle(new GetElectricityInvoicesQuery(), CancellationToken.None);

            result.ShouldBeOfType<ElectricityInvoicesVM>();
            result.Invoices.Count.ShouldBe(1);
        }
    }
}