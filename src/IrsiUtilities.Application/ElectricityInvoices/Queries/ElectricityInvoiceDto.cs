using System;
using System.ComponentModel.DataAnnotations;
using IrsiUtilities.Application.Common.Helpers;
using IrsiUtilities.Application.Common.Mappings;
using IrsiUtilities.Domain.Entities;
using IrsiUtilities.Domain.Enums;
using Newtonsoft.Json;

namespace IrsiUtilities.Application.ElectricityInvoices.Queries
{
    public class ElectricityInvoiceDto : IMapFrom<ElectricityInvoice>
    {
        [Required]
        public Guid Id { get; set; }
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime InvoiceDate { get; set; }
        public string InvoiceNumber { get; set; }
        [Required]
        public Guid StoreId { get; set; }
        public decimal Amount { get; set; }
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime PreviousRead { get; set; }
        [JsonConverter(typeof(JsonDateConverter))]
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
    }
}