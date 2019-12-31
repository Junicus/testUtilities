using IrsiUtilities.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace IrsiUtilities.Infrastructure.Persistence.Configurations
{
    public class ElectricityInvoiceConfiguration : IEntityTypeConfiguration<ElectricityInvoice>
    {
        public void Configure(EntityTypeBuilder<ElectricityInvoice> builder)
        {
            builder.Property(ei => ei.Amount).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.UsagekVA).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.FixedCharge).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.RatekWh).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.RateAdditionalUsagekWh).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.DemandCharge).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.AdditionalDemandCharge).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.RateCombustible).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.RateProvisionalTarif).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.EnergyPurchased).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.RateEnergy).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.CeliUse).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.CeliRate).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.SubsidioHHUse).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.SubsidioHHRate).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.SubsidioNHHUse).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.SubsidioNHHRate).HasColumnType("decimal(18,6)");
            builder.Property(ei => ei.OtherCharges).HasColumnType("decimal(18,6)");
        }
    }
}