using System.Data.Entity;

namespace Editor.Models.Database
{
    public class EditorDbContext : DbContext
    {
        public DbSet<Level> Levels { get; set; }
        public DbSet<Statistic> Statistics { get; set; }
        public DbSet<User> Users { get; set; } 
    }
}