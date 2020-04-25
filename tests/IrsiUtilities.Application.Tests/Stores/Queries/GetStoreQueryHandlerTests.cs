using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.ElectricityInvoices.Queries;
using IrsiUtilities.Application.Stores.Queries;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Infrastructure.Persistence;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.Stores.Queries
{
    [Collection("QueryCollection")]
    public class GetStoreQueryHandlerTests
    {
        private readonly UtilitiesDbContext _context;
        private readonly IMapper _mapper;

        public GetStoreQueryHandlerTests(QueryTestFixture fixture)
        {
            _context = fixture.Context;
            _mapper = fixture.Mapper;
        }

        [Fact]
        public async Task GetStoreQuery_Should_ReturnStore()
        {
            var sut = new GetStoreQueryHandler(_context, _mapper);
            var expectedId = new Guid("F432D373-F751-42F5-BD50-C82345519F38");

            var result = await sut.Handle(new GetStoreQuery { Id = expectedId }, CancellationToken.None);

            result.ShouldBeOfType<StoreVM>().ShouldNotBeNull();
            result.Store.Id.ShouldBe(expectedId);
        }

        [Fact]
        public async Task GetStoreQuery_InvalidId_ShouldThrow()
        {
            var sut = new GetStoreQueryHandler(_context, _mapper);

            await Should.ThrowAsync<EntityNotFoundException>(async () => await sut.Handle(
                new GetStoreQuery { Id = Guid.NewGuid() }, CancellationToken.None
            ));
        }

    }
}