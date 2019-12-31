using System;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Helpers;
using IrsiUtilities.Application.Common.Interfaces;
using IrsiUtilities.Domain.Entities;
using IrsiUtilities.Domain.Enums;
using MediatR;
using Newtonsoft.Json;

namespace IrsiUtilities.Application.ElectricityInvoices.Commands
{
    public class CreateElectricityInvoiceCommand : IRequest<Guid>
    {
        [JsonConverter(typeof(JsonDateConverter))]
        public DateTime InvoiceDate { get; set; }
        public string InvoiceNumber { get; set; }
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

        public class CreateElectricityInvoiceCommandHandler : IRequestHandler<CreateElectricityInvoiceCommand, Guid>
        {
            private readonly IApplicationDbContext _context;

            public CreateElectricityInvoiceCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(CreateElectricityInvoiceCommand request, CancellationToken cancellationToken)
            {
                var entity = new ElectricityInvoice
                {
                    InvoiceDate = request.InvoiceDate,
                    InvoiceNumber = request.InvoiceNumber,
                    StoreId = request.StoreId,
                    Amount = request.Amount,
                    PreviousRead = request.PreviousRead,
                    CurrentRead = request.CurrentRead,
                    UsageDays = request.UsageDays,
                    UsagekVA = request.UsagekVA,
                    FixedCharge = request.FixedCharge,
                    UsagekWh = request.UsagekWh,
                    RatekWh = request.RatekWh,
                    AdditionalUsagekWh = request.AdditionalUsagekWh,
                    RateAdditionalUsagekWh = request.RateAdditionalUsagekWh,
                    DemandCharge = request.DemandCharge,
                    AdditionalDemandCharge = request.AdditionalDemandCharge,
                    CombustiblePurchased = request.CombustiblePurchased,
                    RateCombustible = request.RateCombustible,
                    ProvisionalTarif = request.ProvisionalTarif,
                    RateProvisionalTarif = request.RateProvisionalTarif,
                    EnergyPurchased = request.EnergyPurchased,
                    RateEnergy = request.RateEnergy,
                    CeliUse = request.CeliUse,
                    CeliRate = request.CeliRate,
                    SubsidioHHUse = request.SubsidioHHUse,
                    SubsidioHHRate = request.SubsidioHHRate,
                    SubsidioNHHUse = request.SubsidioNHHUse,
                    SubsidioNHHRate = request.SubsidioNHHRate,
                    OtherCharges = request.OtherCharges,
                    ReadingType = request.ReadingType
                };

                _context.ElectricityInvoices.Add(entity);

                await _context.SaveChangesAsync(cancellationToken);

                return entity.Id;
            }
        }
    }
}