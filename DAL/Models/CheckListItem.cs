using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class CheckListItem
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public int LinkedPieceId { get; set; } 

        public int ContentPieceId { get; set; }

        public bool IsChecked { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedOn { get; set; }

        public DateTime CompletedOn { get; set; }
    }
}