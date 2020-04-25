using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Stores.Commands;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Infrastructure.Persistence;
using Shouldly;
using Xunit;
using Xunit.Abstractions;

namespace IrsiUtilities.Application.Tests.Stores.Commands
{
    [Collection("CommandCollection")]
    public class DeleteStoreCommandHandlerTests
    {
        private readonly ITestOutputHelper _toh;
        private readonly UtilitiesDbContext _context;

        public DeleteStoreCommandHandlerTests(CommandTestsFixture fixture, ITestOutputHelper toh)
        {
            _toh = toh;
            _context = fixture.Context;
        }

        [Fact]
        public async Task DeleteStoreCommand_Should_DeleteStoreAndInvoicesFromStore()
        {
            var sut = new DeleteStoreCommandHandler(_context);
            var expectedId = new Guid("F432D373-F751-42F5-BD50-C82345519F38");

            await sut.Handle(new DeleteStoreCommand { Id = expectedId }, CancellationToken.None);

            _context.Stores.Find(new object[] { expectedId }).ShouldBeNull();
            _context.ElectricityInvoices.Where(i => i.StoreId == expectedId).ShouldBeEmpty();
            _context.WaterInvoices.Where(i => i.StoreId == expectedId).ShouldBeEmpty();
        }

        [Fact]
        public async Task DeleteStoreCommand_InvalidId_ShouldThrow()
        {
            var sut = new DeleteStoreCommandHandler(_context);

            await Should.ThrowAsync<EntityNotFoundException>(async () => await sut.Handle(
                new DeleteStoreCommand { Id = Guid.NewGuid() }, CancellationToken.None
            ));
        }

    }
}