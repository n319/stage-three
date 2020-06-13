using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class Piece
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int ApplicationUserId { get; set; }

        public int ViewTypeId { get; set; }

        public int ViewTypeAttributeId { get; set; }

        public int ProjectId { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedOn { get; set; }

        public DateTime CompletedOn { get; set; }

        public string Description { get; set; }

    }

}