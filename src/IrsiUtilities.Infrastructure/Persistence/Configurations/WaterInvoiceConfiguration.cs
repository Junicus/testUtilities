using IrsiUtilities.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IrsiUtilities.Infrastructure.Persistence.Configurations
{
    public class WaterInvoiceConfiguration : IEntityTypeConfiguration<WaterInvoice>
    {
        public void Configure(EntityTypeBuilder<WaterInvoice> builder)
        {
            builder.Property(wi => wi.InvoiceNumber).HasMaxLength(35);
            builder.Property(wi => wi.Amount).HasColumnType("decimal(18,6)");
            builder.Property(wi => wi.WaterCharge).HasColumnType("decimal(18,6)");
            builder.Property(wi => wi.StormDrainCharge).HasColumnType("decimal(18,6)");
            builder.Property(wi => wi.CCARCharge).HasColumnType("decimal(18,6)");
            builder.Property(wi => wi.SpecialCharge).HasColumnType("decimal(18,6)");
            builder.Property(wi => wi.Usage).HasColumnType("decimal(18,6)");
            builder.Property(wi => wi.FiscalPlanAdjustment).HasColumnType("decimal(18,6)");
        }
    }
}