using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Models.Content
{
    public class ImageRecord
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public string StorageName { get; set; }
        public string PublicName { get; set; }
        public string OwnerId { get; set; }
        public DateTime CreatedOn { get; set; }
        public string ContentHash { get; set; }
    }
}
