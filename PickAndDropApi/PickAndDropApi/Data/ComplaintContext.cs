using Microsoft.EntityFrameworkCore;
using PickAndDropApi.Models;

namespace PickAndDropApi.Data
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
