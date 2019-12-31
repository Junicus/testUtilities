﻿using System;
using IrsiUtilities.Application.Common.Helpers;
using IrsiUtilities.Domain.Enums;
using Newtonsoft.Json;

namespace IrsiUtilities.Application.WaterInvoices.Queries
{
    public class WaterInvoiceDto
    {
        public Guid Id { get; set; }
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime InvoiceDate { get; set; }
        public string InvoiceNumber { get; set; }
        public Guid StoreId { get; set; }
        public decimal Amount { get; set; }
        public decimal WaterCharge { get; set; }
        public decimal StormDrainCharge { get; set; }
        public decimal CCARCharge { get; set; }
        public decimal SpecialCharge { get; set; }
        public decimal FiscalPlanAdjustment { get; set; }
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime PreviousRead { get; set; }
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime CurrentRead { get; set; }
        public int UsageDays { get; set; }
        public decimal Usage { get; set; }
        public ReadingType ReadingType { get; set; }
    }
}