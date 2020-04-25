using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.ElectricityInvoices.Commands;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Infrastructure.Persistence;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.ElectricityInvoices.Commands
{
    [Collection("CommandCollection")]
    public class CreateElectricityInvoiceCommandHandlerTests
    {
        private readonly UtilitiesDbContext _context;

        public CreateElectricityInvoiceCommandHandlerTests(CommandTestsFixture fixture)
        {
            _context = fixture.Context;
        }

        [Fact]
        public async Task CreateElectricityInvoiceCommand_Should_CreateInvoice()
        {
            var sut = new CreateElectricityInvoiceCommandHandler(_context);

            var result = await sut.Handle(new CreateElectricityInvoiceCommand() { StoreId = new Guid("F432D373-F751-42F5-BD50-C82345519F38") }, CancellationToken.None);

            result.ShouldNotBeNull();
            _context.ElectricityInvoices.Count().ShouldBe(2);
        }
    }
}