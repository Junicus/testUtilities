using System;
using IrsiUtilities.Domain.Enums;

namespace IrsiUtilities.Domain.Entities
{
    public class WaterInvoice
    {
        public Guid Id { get; set; }
        public DateTime InvoiceDate { get; set; }
        public string InvoiceNumber { get; set; }
        public Guid StoreId { get; set; }
        public decimal Amount { get; set; }
        public decimal WaterCharge { get; set; }
        public decimal StormDrainCharge { get; set; }
        public decimal CCARCharge { get; set; }
        public decimal SpecialCharge { get; set; }
        public DateTime PreviousRead { get; set; }
        public DateTime CurrentRead { get; set; }
        public int UsageDays { get; set; }
        public decimal Usage { get; set; }
        public ReadingType ReadingType { get; set; }
        public decimal FiscalPlanAdjustment { get; set; }
        public virtual Store Store { get; set; }
    }
}