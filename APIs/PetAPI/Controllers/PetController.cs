using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using PetAPI;

namespace PetAPI.Controllers
{
 
  public class Animal
  {
    public int Id {get; set;}
    public string Name {get; set;}
    public string Type {get; set;}
    public string Breed {get; set;}
    public string Color {get; set;}
    public string Size {get; set;}
    public string LostOrFound {get; set;}
    public string Date {get; set;}
  }

  [Route("api/[controller]")]
    [EnableCors("AllowCors")]
    
     public class AnimalController : Controller
    {
       private readonly AnimalContext _context;
        public AnimalController(AnimalContext context)
        {
          _context = context;

        if( _context.Animals.Count() == 0)
        {
          _context.Animals.Add(new Animal() {Id = 1, Name = "Charlie", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Brown/White", Size = "Med", LostOrFound = "Lost", Date = "6/1/17"});
          _context.Animals.Add(new Animal() {Id = 2, Name = "Roxy", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Dark-Brown/White", Size = "Med", LostOrFound = "Found", Date = "5/22/17"});
          _context.Animals.Add(new Animal() {Id = 3, Name = "Stella", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Brown/Black/Grey/White", Size = "Med", LostOrFound = "Lost", Date = "5/13/17"});
          _context.SaveChanges();
        }

        }

        // GET api/animals
        [HttpGet]
        public IEnumerable<Animal> Get()
        {
            return _context.Animals;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Animal Get(int id)
        {
          foreach (Animal a in _context.Animals)
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
        public void Post([FromBody]Animal value)
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
