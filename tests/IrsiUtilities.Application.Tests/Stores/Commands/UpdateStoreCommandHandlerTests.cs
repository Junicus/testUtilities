using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Stores.Commands;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Domain.Entities;
using IrsiUtilities.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.Stores.Commands
{
    [Collection("CommandCollection")]

    public class UpdateStoreCommandHandlerTests
    {
        private readonly UtilitiesDbContext _context;

        public UpdateStoreCommandHandlerTests(CommandTestsFixture fixture)
        {
            _context = fixture.Context;
        }

        [Fact]
        public async Task UpdateStoreCommand_Should_UpdateStore()
        {
            var sut = new UpdateStoreCommandHandler(_context);
            var entity = await _context.Stores.FirstAsync();
            var store = new Store { Id = entity.Id, Name = entity.Name, CostCenter = entity.CostCenter };

            var expectedName = "Updated Name";
            var expectedCostCenter = "123";

            await sut.Handle(new UpdateStoreCommand { Id = store.Id, Name = expectedName, CostCenter = expectedCostCenter }, CancellationToken.None);

            var entity2 = await _context.Stores.FindAsync(new object[] { entity.Id }, CancellationToken.None);


            entity2.ShouldNotBeNull();
            entity2.Id.ShouldBe(store.Id);
            entity2.Name.ShouldNotBe(store.Name);
            entity2.CostCenter.ShouldNotBe(store.CostCenter);
            entity2.Name.ShouldBe(expectedName);
            entity2.CostCenter.ShouldBe(expectedCostCenter);
        }

        [Fact]
        public async Task UpdateStoreCommand_InvalidId_ShouldThrow()
        {
            var sut = new UpdateStoreCommandHandler(_context);

            await Should.ThrowAsync<EntityNotFoundException>(async () => await sut.Handle(
                new UpdateStoreCommand { Id = Guid.NewGuid(), Name = "Test", CostCenter = "Test" }, CancellationToken.None
            ));
        }
    }
}