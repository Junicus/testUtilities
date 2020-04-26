using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.ElectricityInvoices.Commands;
using IrsiUtilities.Application.Stores.Commands;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Infrastructure.Persistence;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.ElectricityInvoices.Commands
{
    [Collection("CommandCollection")]
    public class DeleteElectricityInvoiceCommandHandlerTests
    {
        private readonly UtilitiesDbContext _context;

        public DeleteElectricityInvoiceCommandHandlerTests(CommandTestsFixture fixture)
        {
            _context = fixture.Context;
        }

        [Fact]
        public async Task DeleteElectricityInvoiceCommand_Should_DeleteInvoice()
        {
            var sut = new DeleteElectricityInvoiceCommandHandler(_context);
            var expectedId = new Guid("EA8C6F92-6FF3-4188-ABCC-2F159C7F9D9D");

            await sut.Handle(new DeleteElectricityInvoiceCommand { Id = expectedId }, CancellationToken.None);

            _context.ElectricityInvoices.Where(i => i.StoreId == expectedId).ShouldBeEmpty();
        }

        [Fact]
        public async Task DeleteElectricityInvoiceCommand_InvalidId_ShouldThrow()
        {
            var sut = new DeleteElectricityInvoiceCommandHandler(_context);

            await Should.ThrowAsync<EntityNotFoundException>(async () => await sut.Handle(
                new DeleteElectricityInvoiceCommand { Id = Guid.NewGuid() }, CancellationToken.None
            ));
        }
    }
}