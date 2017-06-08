using Microsoft.EntityFrameworkCore;
using UserAPI.Controllers;

namespace UserAPI
{
  public class UserContext : DbContext
  {
    public UserContext(DbContextOptions<UserContext> options) : base(options)
    {

    }
    public DbSet<User> Users { get; set; }
  }

  

}
