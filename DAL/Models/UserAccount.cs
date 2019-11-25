using DAL.Models;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Models
{
    public class UserAccount
    {
        public int Id { get; set; }
        public int ApplicationUserId { get; set; }
        public int AccountTypeId { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedOn { get; set; }

    }
}