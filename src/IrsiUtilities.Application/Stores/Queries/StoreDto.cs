using IrsiUtilities.Application.Common.Mappings;
using IrsiUtilities.Domain.Entities;

namespace IrsiUtilities.Application.Stores.Queries
{
    public class StoreDto : IMapFrom<Store>
    {
        public string Name { get; set; }
    }
}