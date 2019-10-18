using Microsoft.EntityFrameworkCore;
using PickAndDropAPI.Entities;

namespace PickAndDropAPI.Data
{
    public class ComplaintContext : DbContext
    {
        public ComplaintContext(DbContextOptions<ComplaintContext> options):
            base(options)
        {
        }

        public DbSet<Complaint> Complaints { get; set; }
    }
}
