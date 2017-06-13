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
    public int Id { get; set; }
    public string User { get; set; }
    public string Location { get; set; }
    public string Coordinates { get; set; }
    public string Name { get; set; }
    public string Type { get; set; }
    public string Breed { get; set; }
    public string Color { get; set; }
    public string Size { get; set; }
    public string LostOrFound { get; set; }
    public string Date { get; set; }
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
          _context.Animals.Add(new Animal() {Id = 1, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Charlie", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Brown/White", Size = "Med", LostOrFound = "Lost", Date = "6/1/17"});
          _context.Animals.Add(new Animal() {Id = 2, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Chloe", Type = "Cat", Breed = "Persian", Color = "Grey/White", Size = "Sm", LostOrFound = "Lost", Date = "3/2/17"});
          _context.Animals.Add(new Animal() {Id = 3, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Ryder", Type = "Dog", Breed = "German Shepherd", Color = "Brown/Black", Size = "Lrg", LostOrFound = "Lost", Date = "1/21/17"});
          _context.Animals.Add(new Animal() {Id = 4, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Lilly", Type = "Cat", Breed = "Exotic Shorthair", Color = "Brown/Grey", Size = "Med", LostOrFound = "Lost", Date = "7/15/17"});
          _context.Animals.Add(new Animal() {Id = 5, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Gene", Type = "Dog", Breed = "Bulldog", Color = "Grey/White", Size = "Med", LostOrFound = "Lost", Date = "4/11/17"});
          _context.Animals.Add(new Animal() {Id = 6, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Tina", Type = "Cat", Breed = "Maine Coon", Color = "Black/White", Size = "Sm", LostOrFound = "Lost", Date = "9/16/17"});
          _context.Animals.Add(new Animal() {Id = 7, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Louise", Type = "Cat", Breed = "Ragdoll", Color = "Orange/White", Size = "Med", LostOrFound = "Lost", Date = "6/13/17"});
          _context.Animals.Add(new Animal() {Id = 8, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Mickey", Type = "Dog", Breed = "Beagle", Color = "Brown/White", Size = "Med", LostOrFound = "Lost", Date = "10/1/16"});
          _context.Animals.Add(new Animal() {Id = 9, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Ace", Type = "Dog", Breed = "Poodle", Color = "Black/Grey", Size = "Lrg", LostOrFound = "Lost", Date = "7/1/17"});
          _context.Animals.Add(new Animal() {Id = 10, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Rocky", Type = "Cat", Breed = "British Shorthair", Color = "Tan", Size = "Sm", LostOrFound = "Lost", Date = "1/1/16"});
          _context.Animals.Add(new Animal() {Id = 11, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Milo", Type = "Dog", Breed = "Rottweiler", Color = "Tan/White", Size = "Lrg", LostOrFound = "Lost", Date = "5/12/16"});
          _context.Animals.Add(new Animal() {Id = 12, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Pretty Boy", Type = "Turtle", Breed = "Box Turtle", Color = "Green", Size = "Sm", LostOrFound = "Lost", Date = "5/16/17"});
          _context.Animals.Add(new Animal() {Id = 13, User = "rbeardshear", Location ="9392 Cloudhaven Dr. Huntington Beach Ca 92646", Coordinates = "", Name = "Roxy", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Dark-Brown/White", Size = "Med", LostOrFound = "Found", Date = "5/22/17"});
          _context.Animals.Add(new Animal() {Id = 14, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = "", Name = "Stella", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Brown/Black/Grey/White", Size = "Med", LostOrFound = "Lost", Date = "5/13/17"});
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
        if (a.Id == id)
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
