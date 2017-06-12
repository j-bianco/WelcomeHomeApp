using Microsoft.EntityFrameworkCore;
using PetAPI.Controllers;

namespace PetAPI
{
  public class AnimalContext : DbContext
  {
    public AnimalContext(DbContextOptions<AnimalContext> options) : base(options)
    {

    }
    public DbSet<Animal> Animals { get; set; }
    public DbSet<User> Users { get; set; }
  }


}