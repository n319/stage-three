using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class updatedRelationships : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Piece_Project_ProjectId",
                table: "Piece");

            migrationBuilder.DropForeignKey(
                name: "FK_Piece_AspNetUsers_UserId",
                table: "Piece");

            migrationBuilder.DropForeignKey(
                name: "FK_Piece_ViewType_ViewId",
                table: "Piece");

            migrationBuilder.DropIndex(
                name: "IX_Piece_ProjectId",
                table: "Piece");

            migrationBuilder.DropIndex(
                name: "IX_Piece_UserId",
                table: "Piece");

            migrationBuilder.DropIndex(
                name: "IX_Piece_ViewId",
                table: "Piece");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Piece");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Piece",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Piece_ProjectId",
                table: "Piece",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Piece_UserId",
                table: "Piece",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Piece_ViewId",
                table: "Piece",
                column: "ViewId");

            migrationBuilder.AddForeignKey(
                name: "FK_Piece_Project_ProjectId",
                table: "Piece",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Piece_AspNetUsers_UserId",
                table: "Piece",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Piece_ViewType_ViewId",
                table: "Piece",
                column: "ViewId",
                principalTable: "ViewType",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
