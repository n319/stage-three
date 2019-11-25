using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class PieceContentTag
    {
        public int Id { get; set; }
        public int ContentTagId { get; set; }
        public int PieceId { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedOn { get; set; }

    }
}