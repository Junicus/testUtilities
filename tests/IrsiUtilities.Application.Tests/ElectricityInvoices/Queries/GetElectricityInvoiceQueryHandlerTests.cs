using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using IrsiUtilities.Application.ElectricityInvoices.Queries;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Infrastructure.Persistence;
using Microsoft.VisualBasic;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.ElectricityInvoices.Queries
{
    [Collection("QueryCollection")]
    public class GetElectricityInvoiceQueryHandlerTests
    {
        private readonly UtilitiesDbContext _context;
        private readonly IMapper _mapper;

        public GetElectricityInvoiceQueryHandlerTests(QueryTestFixture fixture)
        {
            _context = fixture.Context;
            _mapper = fixture.Mapper;
        }

        [Fact]
        public async Task GetElectricityInvoiceQuery_Should_ReturnInvoice()
        {
            var sut = new GetElectricityInvoiceQueryHandler(_context, _mapper);
            var expectedId = new Guid("EA8C6F92-6FF3-4188-ABCC-2F159C7F9D9D");

            var result = await sut.Handle(new GetElectricityInvoiceQuery
            {
                Id = expectedId
            }, CancellationToken.None);

            result.ShouldBeOfType<ElectricityInvoiceVM>().ShouldNotBeNull();
            result.Invoice.Id.ShouldBe(expectedId);
        }
    }
}