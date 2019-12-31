using System;
using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Application.Common.Helpers;
using IrsiUtilities.Application.Common.Interfaces;
using IrsiUtilities.Domain.Entities;
using IrsiUtilities.Domain.Enums;
using MediatR;
using Newtonsoft.Json;

namespace IrsiUtilities.Application.WaterInvoices.Commands
{
    public class CreateWaterInvoiceCommand : IRequest<Guid>
    {
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

        public class CreateWaterInvoiceCommandHandler : IRequestHandler<CreateWaterInvoiceCommand, Guid>
        {

            private readonly IApplicationDbContext _context;

            public CreateWaterInvoiceCommandHandler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Guid> Handle(CreateWaterInvoiceCommand request, CancellationToken cancellationToken)
            {
                var entity = new WaterInvoice
                {
                    InvoiceDate = request.InvoiceDate,
                    InvoiceNumber = request.InvoiceNumber,
                    StoreId = request.StoreId,
                    Amount = request.Amount,
                    WaterCharge = request.WaterCharge,
                    StormDrainCharge = request.StormDrainCharge,
                    CCARCharge = request.CCARCharge,
                    SpecialCharge = request.SpecialCharge,
                    FiscalPlanAdjustment = request.FiscalPlanAdjustment,
                    PreviousRead = request.PreviousRead,
                    CurrentRead = request.CurrentRead,
                    UsageDays = request.UsageDays,
                    Usage = request.Usage,
                    ReadingType = request.ReadingType
                };

                _context.WaterInvoices.Add(entity);

                await _context.SaveChangesAsync(cancellationToken);

                return entity.Id;
            }
        }
    }
}