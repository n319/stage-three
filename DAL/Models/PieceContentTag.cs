using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    //Used for Storing Links between pieces
    //TODO create enum of ContentTagIds
    // 1- Link 
    //need things like blocked by, sibling, child, parent

    public class PieceContentTag
    {
        public int Id { get; set; }
        public int ContentTagId { get; set; }
        public string Name { get; set; }
        public int ProjectId { get; set; }
        public int PieceId { get; set; }
        public int ContentId { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedOn { get; set; }

    }
}