using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickApp.Migrations
{
    public partial class simpleModelIdNotID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ID",
                table: "ViewType",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ViewTypeID",
                table: "ViewAttributeType",
                newName: "ViewTypeId");

            migrationBuilder.RenameColumn(
                name: "UserID",
                table: "ViewAttributeType",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "ProjectID",
                table: "ViewAttributeType",
                newName: "ProjectId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "ViewAttributeType",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "UserID",
                table: "UserProject",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "ProjectID",
                table: "UserProject",
                newName: "ProjectId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "UserProject",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "AccountTypeID",
                table: "UserAccount",
                newName: "AccountTypeId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "UserAccount",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ProjectID",
                table: "ProjectPiece",
                newName: "ProjectId");

            migrationBuilder.RenameColumn(
                name: "PieceID",
                table: "ProjectPiece",
                newName: "PieceId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "ProjectPiece",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ProjectID",
                table: "ProjectContentTag",
                newName: "ProjectId");

            migrationBuilder.RenameColumn(
                name: "ContentTagID",
                table: "ProjectContentTag",
                newName: "ContentTagId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "ProjectContentTag",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ViewTypeID",
                table: "Project",
                newName: "ViewTypeId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Project",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ViewAttributeTypeID",
                table: "PieceViewAttribute",
                newName: "ViewAttributeTypeId");

            migrationBuilder.RenameColumn(
                name: "PieceID",
                table: "PieceViewAttribute",
                newName: "PieceId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "PieceViewAttribute",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "PieceID",
                table: "PieceContentTag",
                newName: "PieceId");

            migrationBuilder.RenameColumn(
                name: "ContentTagID",
                table: "PieceContentTag",
                newName: "ContentTagId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "PieceContentTag",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Piece",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "EventType",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "UserID",
                table: "EventLog",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "ProjectID",
                table: "EventLog",
                newName: "ProjectId");

            migrationBuilder.RenameColumn(
                name: "PieceID",
                table: "EventLog",
                newName: "PieceId");

            migrationBuilder.RenameColumn(
                name: "EventTypeID",
                table: "EventLog",
                newName: "EventTypeId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "EventLog",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "ContentTagType",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ProjectID",
                table: "CheckListItem",
                newName: "ProjectId");

            migrationBuilder.RenameColumn(
                name: "LinkedPieceID",
                table: "CheckListItem",
                newName: "LinkedPieceId");

            migrationBuilder.RenameColumn(
                name: "ContentPieceID",
                table: "CheckListItem",
                newName: "ContentPieceId");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "CheckListItem",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "ID",
                table: "AccontType",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "ViewType",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "ViewTypeId",
                table: "ViewAttributeType",
                newName: "ViewTypeID");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "ViewAttributeType",
                newName: "UserID");

            migrationBuilder.RenameColumn(
                name: "ProjectId",
                table: "ViewAttributeType",
                newName: "ProjectID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "ViewAttributeType",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "UserProject",
                newName: "UserID");

            migrationBuilder.RenameColumn(
                name: "ProjectId",
                table: "UserProject",
                newName: "ProjectID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "UserProject",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "AccountTypeId",
                table: "UserAccount",
                newName: "AccountTypeID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "UserAccount",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "ProjectId",
                table: "ProjectPiece",
                newName: "ProjectID");

            migrationBuilder.RenameColumn(
                name: "PieceId",
                table: "ProjectPiece",
                newName: "PieceID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "ProjectPiece",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "ProjectId",
                table: "ProjectContentTag",
                newName: "ProjectID");

            migrationBuilder.RenameColumn(
                name: "ContentTagId",
                table: "ProjectContentTag",
                newName: "ContentTagID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "ProjectContentTag",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "ViewTypeId",
                table: "Project",
                newName: "ViewTypeID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Project",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "ViewAttributeTypeId",
                table: "PieceViewAttribute",
                newName: "ViewAttributeTypeID");

            migrationBuilder.RenameColumn(
                name: "PieceId",
                table: "PieceViewAttribute",
                newName: "PieceID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "PieceViewAttribute",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "PieceId",
                table: "PieceContentTag",
                newName: "PieceID");

            migrationBuilder.RenameColumn(
                name: "ContentTagId",
                table: "PieceContentTag",
                newName: "ContentTagID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "PieceContentTag",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Piece",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "EventType",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "EventLog",
                newName: "UserID");

            migrationBuilder.RenameColumn(
                name: "ProjectId",
                table: "EventLog",
                newName: "ProjectID");

            migrationBuilder.RenameColumn(
                name: "PieceId",
                table: "EventLog",
                newName: "PieceID");

            migrationBuilder.RenameColumn(
                name: "EventTypeId",
                table: "EventLog",
                newName: "EventTypeID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "EventLog",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "ContentTagType",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "ProjectId",
                table: "CheckListItem",
                newName: "ProjectID");

            migrationBuilder.RenameColumn(
                name: "LinkedPieceId",
                table: "CheckListItem",
                newName: "LinkedPieceID");

            migrationBuilder.RenameColumn(
                name: "ContentPieceId",
                table: "CheckListItem",
                newName: "ContentPieceID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "CheckListItem",
                newName: "ID");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "AccontType",
                newName: "ID");
        }
    }
}
