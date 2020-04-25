using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IrsiUtilities.Infrastructure.Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Stores",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    CostCenter = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ElectricityInvoices",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    InvoiceDate = table.Column<DateTime>(nullable: false),
                    InvoiceNumber = table.Column<string>(nullable: true),
                    StoreId = table.Column<Guid>(nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    PreviousRead = table.Column<DateTime>(nullable: false),
                    CurrentRead = table.Column<DateTime>(nullable: false),
                    UsageDays = table.Column<int>(nullable: false),
                    UsagekVA = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    FixedCharge = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    UsagekWh = table.Column<int>(nullable: false),
                    RatekWh = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    AdditionalUsagekWh = table.Column<int>(nullable: false),
                    RateAdditionalUsagekWh = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    DemandCharge = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    AdditionalDemandCharge = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    CombustiblePurchased = table.Column<int>(nullable: false),
                    RateCombustible = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    ProvisionalTarif = table.Column<int>(nullable: false),
                    RateProvisionalTarif = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    EnergyPurchased = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    RateEnergy = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    CeliUse = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    CeliRate = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    SubsidioHHUse = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    SubsidioHHRate = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    SubsidioNHHUse = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    SubsidioNHHRate = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    OtherCharges = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    ReadingType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ElectricityInvoices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ElectricityInvoices_Stores_StoreId",
                        column: x => x.StoreId,
                        principalTable: "Stores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "WaterInvoices",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    InvoiceDate = table.Column<DateTime>(nullable: false),
                    InvoiceNumber = table.Column<string>(maxLength: 35, nullable: true),
                    StoreId = table.Column<Guid>(nullable: false),
                    Amount = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    WaterCharge = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    StormDrainCharge = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    CCARCharge = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    SpecialCharge = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    PreviousRead = table.Column<DateTime>(nullable: false),
                    CurrentRead = table.Column<DateTime>(nullable: false),
                    UsageDays = table.Column<int>(nullable: false),
                    Usage = table.Column<decimal>(type: "decimal(18,6)", nullable: false),
                    ReadingType = table.Column<int>(nullable: false),
                    FiscalPlanAdjustment = table.Column<decimal>(type: "decimal(18,6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WaterInvoices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WaterInvoices_Stores_StoreId",
                        column: x => x.StoreId,
                        principalTable: "Stores",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ElectricityInvoices_StoreId",
                table: "ElectricityInvoices",
                column: "StoreId");

            migrationBuilder.CreateIndex(
                name: "IX_WaterInvoices_StoreId",
                table: "WaterInvoices",
                column: "StoreId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ElectricityInvoices");

            migrationBuilder.DropTable(
                name: "WaterInvoices");

            migrationBuilder.DropTable(
                name: "Stores");
        }
    }
}
