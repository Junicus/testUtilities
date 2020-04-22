using System;

namespace IrsiUtilities.Domain.Entities
{
    public class Store
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string CostCenter { get; set; }
    }
}