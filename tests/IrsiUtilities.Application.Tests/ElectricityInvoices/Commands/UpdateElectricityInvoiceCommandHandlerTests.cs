using System;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.ElectricityInvoices.Commands;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Application.WaterInvoices.Commands;
using IrsiUtilities.Domain.Entities;
using IrsiUtilities.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.ElectricityInvoices.Commands
{
    [Collection("CommandCollection")]
    public class UpdateElectricityInvoiceCommandHandlerTests
    {
        private readonly UtilitiesDbContext _context;

        public UpdateElectricityInvoiceCommandHandlerTests(CommandTestsFixture fixture)
        {
            _context = fixture.Context;
        }

        [Fact]
        public async Task UpdateElectricityInvoiceCommand_Should_Update()
        {
            var sut = new UpdateElectricityInvoiceCommandHandler(_context);
            var entity = await _context.ElectricityInvoices.FirstAsync();
            var store = new ElectricityInvoice { Id = entity.Id, StoreId = entity.StoreId };

            var expectedAmount = 2000.00m;

            await sut.Handle(
                new UpdateElectricityInvoiceCommand() { Id = store.Id, StoreId = store.Id, Amount = expectedAmount },
                CancellationToken.None);

            var entity2 = await _context.ElectricityInvoices.FindAsync(new object[] { entity.Id }, CancellationToken.None);


            entity2.ShouldNotBeNull();
            entity2.Id.ShouldBe(store.Id);
            entity2.Amount.ShouldNotBe(store.Amount);
            entity2.Amount.ShouldBe(expectedAmount);
        }

        [Fact]
        public async Task UpdateElectricityInvoiceCommand_InvalidId_ShouldThrow()
        {
            var sut = new UpdateElectricityInvoiceCommandHandler(_context);

            await Should.ThrowAsync<EntityNotFoundException>(async () => await sut.Handle(
                new UpdateElectricityInvoiceCommand { Id = Guid.NewGuid() }, CancellationToken.None
            ));
        }
    }
}