using System;
using IrsiUtilities.Domain.Enums;

namespace IrsiUtilities.Domain.Entities
{
    public class ElectricityInvoice
    {
        public Guid Id { get; set; }
        public DateTime InvoiceDate { get; set; }
        public string InvoiceNumber { get; set; }
        public Guid StoreId { get; set; }
        public decimal Amount { get; set; }
        public DateTime PreviousRead { get; set; }
        public DateTime CurrentRead { get; set; }
        public int UsageDays { get; set; }
        public decimal UsagekVA { get; set; }
        public decimal FixedCharge { get; set; }
        public int UsagekWh { get; set; }
        public decimal RatekWh { get; set; }
        public int AdditionalUsagekWh { get; set; }
        public decimal RateAdditionalUsagekWh { get; set; }
        public decimal DemandCharge { get; set; }
        public decimal AdditionalDemandCharge { get; set; }
        public int CombustiblePurchased { get; set; }
        public decimal RateCombustible { get; set; }
        public int ProvisionalTarif { get; set; }
        public decimal RateProvisionalTarif { get; set; }
        public decimal EnergyPurchased { get; set; }
        public decimal RateEnergy { get; set; }
        public decimal CeliUse { get; set; }
        public decimal CeliRate { get; set; }
        public decimal SubsidioHHUse { get; set; }
        public decimal SubsidioHHRate { get; set; }
        public decimal SubsidioNHHUse { get; set; }
        public decimal SubsidioNHHRate { get; set; }
        public decimal OtherCharges { get; set; }
        public ReadingType ReadingType { get; set; }
        public virtual Store Store { get; set; }
    }
}