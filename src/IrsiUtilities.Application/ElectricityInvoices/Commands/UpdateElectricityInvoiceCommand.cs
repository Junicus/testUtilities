using System;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Common.Helpers;
using IrsiUtilities.Application.Common.Interfaces;
using IrsiUtilities.Domain.Enums;
using MediatR;
using Newtonsoft.Json;

namespace IrsiUtilities.Application.ElectricityInvoices.Commands
{
    public class UpdateElectricityInvoiceCommand : IRequest
    {
        public Guid Id { get; set; }
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
    }

    public class UpdateElectricityInvoiceCommandHandler : IRequestHandler<UpdateElectricityInvoiceCommand>
    {
        public readonly IApplicationDbContext _context;

        public UpdateElectricityInvoiceCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(UpdateElectricityInvoiceCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.ElectricityInvoices.FindAsync(new object[] { request.Id }, cancellationToken);
            if (entity == null)
            {
                throw new EntityNotFoundException($"Electricity Invoice with id {request.Id} not found!");
            }

            entity.InvoiceDate = request.InvoiceDate;
            entity.InvoiceNumber = request.InvoiceNumber;
            entity.StoreId = request.StoreId;
            entity.Amount = request.Amount;
            entity.PreviousRead = request.PreviousRead;
            entity.CurrentRead = request.CurrentRead;
            entity.UsageDays = request.UsageDays;
            entity.UsagekVA = request.UsagekVA;
            entity.FixedCharge = request.FixedCharge;
            entity.UsagekWh = request.UsagekWh;
            entity.RatekWh = request.RatekWh;
            entity.AdditionalUsagekWh = request.AdditionalUsagekWh;
            entity.RateAdditionalUsagekWh = request.RateAdditionalUsagekWh;
            entity.DemandCharge = request.DemandCharge;
            entity.AdditionalDemandCharge = request.AdditionalDemandCharge;
            entity.CombustiblePurchased = request.CombustiblePurchased;
            entity.RateCombustible = request.RateCombustible;
            entity.ProvisionalTarif = request.ProvisionalTarif;
            entity.RateProvisionalTarif = request.RateProvisionalTarif;
            entity.EnergyPurchased = request.EnergyPurchased;
            entity.RateEnergy = request.RateEnergy;
            entity.CeliUse = request.CeliUse;
            entity.CeliRate = request.CeliRate;
            entity.SubsidioHHUse = request.SubsidioHHUse;
            entity.SubsidioHHRate = request.SubsidioHHRate;
            entity.SubsidioNHHUse = request.SubsidioNHHUse;
            entity.SubsidioNHHRate = request.SubsidioNHHRate;
            entity.OtherCharges = request.OtherCharges;
            entity.ReadingType = request.ReadingType;

            await _context.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
    }
}