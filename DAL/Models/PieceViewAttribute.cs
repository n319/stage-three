 using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class PieceViewAttribute
    {
        public int Id { get; set; }
        public int PieceId { get; set; }
        public int ViewAttributeTypeId { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedOn { get; set; }
    }
}