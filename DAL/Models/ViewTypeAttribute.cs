using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class ViewTypeAttribute
    {
        public int Id { get; set; }
        public int ViewTypeId { get; set; }
        public string Name { get; set; }
        public int Order { get; set; }

        public int ProjectId { get; set; }

        public int ApplicationUserId { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedOn { get; set; }
         
        public DateTime CompletedOn { get; set; }
    }
}