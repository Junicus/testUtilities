using Microsoft.EntityFrameworkCore.Migrations;

namespace IrsiUtilities.Infrastructure.Persistence.Migrations
{
    public partial class added_store_costcenter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CostCenter",
                table: "Stores",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CostCenter",
                table: "Stores");
        }
    }
}
