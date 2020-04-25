using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Application.WaterInvoices.Commands;
using IrsiUtilities.Infrastructure.Persistence;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.WaterInvoices.Commands
{
    [Collection("CommandCollection")]
    public class CreateWaterInvoiceCommandHandlerTests
    {
        private readonly UtilitiesDbContext _context;

        public CreateWaterInvoiceCommandHandlerTests(CommandTestsFixture fixture)
        {
            _context = fixture.Context;
        }

        [Fact]
        public async Task CreateWaterInvoiceCommand_Should_CreateInvoice()
        {
            var sut = new CreateWaterInvoiceCommandHandler(_context);

            var result = await sut.Handle(new CreateWaterInvoiceCommand() { StoreId = new Guid("F432D373-F751-42F5-BD50-C82345519F38") }, CancellationToken.None);

            result.ShouldNotBeNull();
            _context.ElectricityInvoices.Count().ShouldBe(2);
        }
    }
}