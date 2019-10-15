using System;
using System.ComponentModel.DataAnnotations;

namespace PickAndDropApi.Models
{
    public class Complaint
    {
        [Key]
        public long ComplaintId { get; set; }
        [Required]
        public string ComplaintDescription { get; set; }
        [Required]
        public string FullName { get; set; }
        [Required]
        public string EmailAddress { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
        [Required]
        public string Status { get; set; }
    }
}
