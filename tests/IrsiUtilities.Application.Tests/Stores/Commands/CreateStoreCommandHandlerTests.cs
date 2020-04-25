using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Stores.Commands;
using IrsiUtilities.Application.Tests.Common;
using IrsiUtilities.Infrastructure.Persistence;
using Shouldly;
using Xunit;

namespace IrsiUtilities.Application.Tests.Stores.Commands
{
    [Collection("CommandCollection")]
    public class CreateStoreCommandHandlerTests
    {
        private readonly UtilitiesDbContext _context;

        public CreateStoreCommandHandlerTests(CommandTestsFixture fixture)
        {
            _context = fixture.Context;
        }

        [Fact]
        public async Task CreateStoreCommand_Should_CreateStore()
        {
            var sut = new CreateStoreCommandHandler(_context);

            var result = await sut.Handle(new CreateStoreCommand { Name = "Created Store", CostCenter = "123" }, CancellationToken.None);

            result.ShouldNotBeNull();
            _context.Stores.Count().ShouldBe(2);
        }
    }
}