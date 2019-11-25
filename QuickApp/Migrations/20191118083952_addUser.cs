using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class addUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Piece_AspNetUsers_UserId1",
                table: "Piece");

            migrationBuilder.DropIndex(
                name: "IX_Piece_UserId1",
                table: "Piece");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "ViewAttributeType");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "UserProject");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "UserAccount");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Piece");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "EventLog");

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserId",
                table: "ViewAttributeType",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserId",
                table: "UserProject",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserId",
                table: "UserAccount",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserId",
                table: "Project",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Piece",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserId",
                table: "Piece",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ApplicationUserId",
                table: "EventLog",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Piece_UserId",
                table: "Piece",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Piece_AspNetUsers_UserId",
                table: "Piece",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Piece_AspNetUsers_UserId",
                table: "Piece");

            migrationBuilder.DropIndex(
                name: "IX_Piece_UserId",
                table: "Piece");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "ViewAttributeType");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "UserProject");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "UserAccount");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Project");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "Piece");

            migrationBuilder.DropColumn(
                name: "ApplicationUserId",
                table: "EventLog");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "ViewAttributeType",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "UserProject",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "UserAccount",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Project",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Piece",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Piece",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "EventLog",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Piece_UserId1",
                table: "Piece",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Piece_AspNetUsers_UserId1",
                table: "Piece",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
