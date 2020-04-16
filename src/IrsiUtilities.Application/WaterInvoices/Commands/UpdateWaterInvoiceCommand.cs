using System;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Exceptions;
using IrsiUtilities.Application.Common.Helpers;
using IrsiUtilities.Application.Common.Interfaces;
using IrsiUtilities.Domain.Enums;
using MediatR;
using Newtonsoft.Json;

namespace IrsiUtilities.Application.WaterInvoices.Commands
{
    public class UpdateWaterInvoiceCommand : IRequest
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

    public class UpdateWaterInvoiceCommandHandler : IRequestHandler<UpdateWaterInvoiceCommand>
    {
        public readonly IApplicationDbContext _context;

        public UpdateWaterInvoiceCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Unit> Handle(UpdateWaterInvoiceCommand request, CancellationToken cancellationToken)
        {
            var entity = await _context.WaterInvoices.FindAsync(new object[] { request.Id }, cancellationToken);
            if (entity == null)
            {
                throw new EntityNotFoundException($"Water Invoice with id {request.Id} not found!");
            }

            entity.InvoiceDate = request.InvoiceDate;
            entity.InvoiceNumber = request.InvoiceNumber;
            entity.StoreId = request.StoreId;
            entity.Amount = request.Amount;
            entity.WaterCharge = request.WaterCharge;
            entity.StormDrainCharge = request.StormDrainCharge;
            entity.CCARCharge = request.CCARCharge;
            entity.SpecialCharge = request.SpecialCharge;
            entity.FiscalPlanAdjustment = request.FiscalPlanAdjustment;
            entity.PreviousRead = request.PreviousRead;
            entity.CurrentRead = request.CurrentRead;
            entity.UsageDays = request.UsageDays;
            entity.Usage = request.Usage;
            entity.ReadingType = request.ReadingType;

            await _context.SaveChangesAsync(cancellationToken);
            return Unit.Value;
        }
    }
}