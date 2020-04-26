using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Application.WaterInvoices.Commands;
using IrsiUtilities.Infrastructure.Persistence;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.WaterInvoices.Commands
{
    [Collection("CommandCollection")]
    public class DeleteWaterInvoiceCommandHandlerTests
    {
        private readonly UtilitiesDbContext _context;

        public DeleteWaterInvoiceCommandHandlerTests(CommandTestsFixture fixture)
        {
            _context = fixture.Context;
        }

        [Fact]
        public async Task DeleteWaterInvoiceCommand_Should_DeleteInvoice()
        {
            var sut = new DeleteWaterInvoiceCommandHandler(_context);
            var expectedId = new Guid("29E00325-CFC3-4E0A-8919-80D3E6305E6B");

            await sut.Handle(new DeleteWaterInvoiceCommand { Id = expectedId }, CancellationToken.None);

            _context.WaterInvoices.Where(i => i.StoreId == expectedId).ShouldBeEmpty();
        }

        [Fact]
        public async Task DeleteWaterInvoiceCommand_InvalidId_ShouldThrow()
        {
            var sut = new DeleteWaterInvoiceCommandHandler(_context);

            await Should.ThrowAsync<EntityNotFoundException>(async () => await sut.Handle(
                new DeleteWaterInvoiceCommand { Id = Guid.NewGuid() }, CancellationToken.None
            ));
        }
    }
}