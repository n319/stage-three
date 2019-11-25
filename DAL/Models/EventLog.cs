using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class EventLog
    {
        public int Id { get; set; }
        public int ApplicationUserId { get; set; }
        public int EventTypeId { get; set; }
        public int ProjectId { get; set; }
        public int PieceId { get; set; }

        public string OldJsonData { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedOn { get; set; }

        public DateTime CompletedOn { get; set; }

    }
}