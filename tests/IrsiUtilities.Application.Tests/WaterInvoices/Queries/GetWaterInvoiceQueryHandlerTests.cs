using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Application.WaterInvoices.Queries;
using IrsiUtilities.Infrastructure.Persistence;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.WaterInvoices.Queries
{
    [Collection("QueryCollection")]
    public class GetWaterInvoiceQueryHandlerTests
    {
        private readonly UtilitiesDbContext _context;
        private readonly IMapper _mapper;

        public GetWaterInvoiceQueryHandlerTests(QueryTestFixture fixture)
        {
            _context = fixture.Context;
            _mapper = fixture.Mapper;
        }

        [Fact]
        public async Task GetWaterInvoiceQuery_Should_ReturnInvoice()
        {
            var sut = new GetWaterInvoiceQueryHandler(_context, _mapper);
            var expectedId = new Guid("29E00325-CFC3-4E0A-8919-80D3E6305E6B");

            var result = await sut.Handle(new GetWaterInvoiceQuery { Id = expectedId }, CancellationToken.None);

            result.ShouldBeOfType<WaterInvoiceVM>().ShouldNotBeNull();
            result.Invoice.Id.ShouldBe(expectedId);
        }

        [Fact]
        public async Task GetWaterInvoiceQuery_InvalidId_Throws()
        {
            var sut = new GetWaterInvoiceQueryHandler(_context, _mapper);

            await Should.ThrowAsync<EntityNotFoundException>(async () =>
                await sut.Handle(new GetWaterInvoiceQuery
                {
                    Id = Guid.NewGuid()
                }, CancellationToken.None));
        }
    }
}