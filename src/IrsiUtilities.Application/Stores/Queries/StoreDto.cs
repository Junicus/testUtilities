using System;
using System.ComponentModel.DataAnnotations;
using IrsiUtilities.Application.Common.Mappings;
using IrsiUtilities.Domain.Entities;

namespace IrsiUtilities.Application.Stores.Queries
{
    public class StoreDto : IMapFrom<Store>
    {
        [Required]
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}