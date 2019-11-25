namespace DAL.Models
{
    public class UserProject
    {
        public int Id { get; set; }
        public int ApplicationUserId { get; set; }
        public int ProjectId { get; set; }
    }
}