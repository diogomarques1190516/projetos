using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DDDNetCore.Migrations
{
    public partial class WarehousesSgraiFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Deliveries_Warehouses_WarehouseId",
                table: "Deliveries");

            migrationBuilder.DropIndex(
                name: "IX_Deliveries_WarehouseId",
                table: "Deliveries");

            migrationBuilder.AddColumn<double>(
                name: "Altitude",
                table: "Warehouses",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<string>(
                name: "Model",
                table: "Warehouses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Radius",
                table: "Warehouses",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Rotation",
                table: "Warehouses",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<double>(
                name: "Scale",
                table: "Warehouses",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AlterColumn<string>(
                name: "WarehouseId",
                table: "Deliveries",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Altitude",
                table: "Warehouses");

            migrationBuilder.DropColumn(
                name: "Model",
                table: "Warehouses");

            migrationBuilder.DropColumn(
                name: "Radius",
                table: "Warehouses");

            migrationBuilder.DropColumn(
                name: "Rotation",
                table: "Warehouses");

            migrationBuilder.DropColumn(
                name: "Scale",
                table: "Warehouses");

            migrationBuilder.AlterColumn<string>(
                name: "WarehouseId",
                table: "Deliveries",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Deliveries_WarehouseId",
                table: "Deliveries",
                column: "WarehouseId");

            migrationBuilder.AddForeignKey(
                name: "FK_Deliveries_Warehouses_WarehouseId",
                table: "Deliveries",
                column: "WarehouseId",
                principalTable: "Warehouses",
                principalColumn: "Id");
        }
    }
}
