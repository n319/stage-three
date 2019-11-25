using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class ProjectContentTag
    {
        public int Id { get; set; }
        public int ContentTagId { get; set; }
        public int ProjectId { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedOn { get; set; }

    }
}