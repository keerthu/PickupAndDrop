using Microsoft.EntityFrameworkCore;

namespace PickAndDropApi.Models
{
    public class ComplaintContext : DbContext
    { 
        public ComplaintContext(DbContextOptions<ComplaintContext> options)
            : base(options)
        {
        }
        public DbSet<Complaint> Complaints { get; set; }
    }
}
