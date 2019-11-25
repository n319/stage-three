using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class simpleModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "KanbanLaneType");

            migrationBuilder.RenameColumn(
                name: "UserID",
                table: "UserAccount",
                newName: "UserId");

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Piece",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "EventLog",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID = table.Column<int>(nullable: false),
                    EventTypeID = table.Column<int>(nullable: false),
                    ProjectID = table.Column<int>(nullable: false),
                    PieceID = table.Column<int>(nullable: false),
                    OldJsonData = table.Column<string>(nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    CompletedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventLog", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "EventType",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventType", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ViewAttributeType",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ViewTypeID = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Order = table.Column<int>(nullable: false),
                    ProjectID = table.Column<int>(nullable: false),
                    UserID = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    CompletedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ViewAttributeType", x => x.ID);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Piece_ProjectId",
                table: "Piece",
                column: "ProjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Piece_UserId1",
                table: "Piece",
                column: "UserId1");

            migrationBuilder.CreateIndex(
                name: "IX_Piece_ViewId",
                table: "Piece",
                column: "ViewId");

            migrationBuilder.AddForeignKey(
                name: "FK_Piece_Project_ProjectId",
                table: "Piece",
                column: "ProjectId",
                principalTable: "Project",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Piece_AspNetUsers_UserId1",
                table: "Piece",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Piece_ViewType_ViewId",
                table: "Piece",
                column: "ViewId",
                principalTable: "ViewType",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Piece_Project_ProjectId",
                table: "Piece");

            migrationBuilder.DropForeignKey(
                name: "FK_Piece_AspNetUsers_UserId1",
                table: "Piece");

            migrationBuilder.DropForeignKey(
                name: "FK_Piece_ViewType_ViewId",
                table: "Piece");

            migrationBuilder.DropTable(
                name: "EventLog");

            migrationBuilder.DropTable(
                name: "EventType");

            migrationBuilder.DropTable(
                name: "ViewAttributeType");

            migrationBuilder.DropIndex(
                name: "IX_Piece_ProjectId",
                table: "Piece");

            migrationBuilder.DropIndex(
                name: "IX_Piece_UserId1",
                table: "Piece");

            migrationBuilder.DropIndex(
                name: "IX_Piece_ViewId",
                table: "Piece");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Piece");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "UserAccount",
                newName: "UserID");

            migrationBuilder.CreateTable(
                name: "KanbanLaneType",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompletedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Order = table.Column<int>(type: "int", nullable: false),
                    ProjectID = table.Column<int>(type: "int", nullable: false),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    ViewTypeID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KanbanLaneType", x => x.ID);
                });
        }
    }
}
