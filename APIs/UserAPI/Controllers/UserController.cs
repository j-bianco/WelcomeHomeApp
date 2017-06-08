using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using UserAPI;

namespace UserAPI.Controllers
{
    
    public class User
    {
      public int Id {get; set;}
      public string Username {get; set;}
      public string Password {get; set;}
    }

    [Route("api/[controller]")]
    [EnableCors("AllowCors")]

    public class UserController : Controller
    {
      private readonly UserContext _context;
      public UserController(UserContext context)
      {
        _context = context;

        if( _context.Users.Count() == 0)
        {
          _context.Users.Add(new User(){Id = 1, Username = "rbeardshear", Password = "rbeardshear123"});
          _context.Users.Add(new User(){Id = 2, Username = "johnb", Password = "johnb123"});
          _context.Users.Add(new User(){Id = 3, Username = "al.kov", Password = "al.kov123"});
          _context.SaveChanges();
        }
      }
            // GET api/Users
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _context.Users;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
          foreach (User a in _context.Users)
          {
            if(a.Id == id)
            {
              return a;
            }
          }

            return null;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]User value)
        {
          _context.Add(value);
          _context.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}