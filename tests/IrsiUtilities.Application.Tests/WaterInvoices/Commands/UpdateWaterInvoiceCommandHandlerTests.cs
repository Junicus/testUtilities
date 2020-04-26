using System;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Stores.Commands;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Application.WaterInvoices.Commands;
using IrsiUtilities.Domain.Entities;
using IrsiUtilities.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.WaterInvoices.Commands
{
    [Collection("CommandCollection")]
    public class UpdateWaterInvoiceCommandHandlerTests
    {
        private readonly UtilitiesDbContext _context;

        public UpdateWaterInvoiceCommandHandlerTests(CommandTestsFixture fixture)
        {
            _context = fixture.Context;
        }

        [Fact]
        public async Task UpdateWaterInvoiceCommand_Should_UpdateInvoice()
        {
            var sut = new UpdateWaterInvoiceCommandHandler(_context);
            var entity = await _context.WaterInvoices.FirstAsync();
            var store = new WaterInvoice { Id = entity.Id, StoreId = entity.StoreId };

            const decimal expectedAmount = 2000.00m;

            await sut.Handle(
                new UpdateWaterInvoiceCommand() { Id = store.Id, StoreId = store.Id, Amount = expectedAmount },
                CancellationToken.None);

            var entity2 = await _context.WaterInvoices.FindAsync(new object[] { entity.Id }, CancellationToken.None);


            entity2.ShouldNotBeNull();
            entity2.Id.ShouldBe(store.Id);
            entity2.Amount.ShouldNotBe(store.Amount);
            entity2.Amount.ShouldBe(expectedAmount);
        }

        [Fact]
        public async Task UpdateWaterInvoiceCommand_InvalidId_ShouldThrow()
        {
            var sut = new UpdateWaterInvoiceCommandHandler(_context);

            await Should.ThrowAsync<EntityNotFoundException>(async () => await sut.Handle(
                new UpdateWaterInvoiceCommand() { Id = Guid.NewGuid() }, CancellationToken.None
            ));
        }
    }
}