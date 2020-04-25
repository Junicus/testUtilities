using System;
using AutoMapper;
using IrsiUtilities.Application.Common.Mappings;
using IrsiUtilities.Infrastructure.Persistence;
using Xunit;

namespace IrsiUtilities.Application.Tests.Common
{
    public class QueryTestFixture : IDisposable
    {
        public UtilitiesDbContext Context { get; private set; }
        public IMapper Mapper { get; private set; }

        public QueryTestFixture()
        {
            Context = ApplicationDbContextFactory.Create();

            var configurationProvider = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile<MappingProfile>();
            });

            Mapper = configurationProvider.CreateMapper();
        }


        public void Dispose()
        {
            ApplicationDbContextFactory.Destroy(Context);
        }

        [CollectionDefinition("QueryCollection")]
        public class QueryCollection : ICollectionFixture<QueryTestFixture>
        {
        }
    }
}