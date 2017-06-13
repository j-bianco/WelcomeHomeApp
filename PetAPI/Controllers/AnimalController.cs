using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using PetAPI;
using Newtonsoft.Json;
using System.Net.Http;

namespace PetAPI.Controllers
{

  // Deserialization for readin Json for the Coordinates
  public class AddressComponent
{
    public string long_name { get; set; }
    public string short_name { get; set; }
    public List<string> types { get; set; }
}

public class Location
{
    public double lat { get; set; }
    public double lng { get; set; }
}

public class Northeast
{
    public double lat { get; set; }
    public double lng { get; set; }
}

public class Southwest
{
    public double lat { get; set; }
    public double lng { get; set; }
}

public class Viewport
{
    public Northeast northeast { get; set; }
    public Southwest southwest { get; set; }
}

public class Geometry
{
    public Location location { get; set; }
    public string location_type { get; set; }
    public Viewport viewport { get; set; }
}

public class Result
{
    public List<AddressComponent> address_components { get; set; }
    public string formatted_address { get; set; }
    public Geometry geometry { get; set; }
    public string place_id { get; set; }
    public List<string> types { get; set; }
}

public class RootObject
{
    public List<Result> results { get; set; }
    public string status { get; set; }
}

 
  public class Animal
  {
    public int Id {get; set;}
    public string User {get; set;}
    public string Location {get; set;}
    public string Coordinates {get; set;}
    public string Name {get; set;}
    public string Type {get; set;}
    public string Breed {get; set;}
    public string Color {get; set;}
    public string Size {get; set;}
    public string LostOrFound {get; set;}
    public string Date {get; set;}

     public static string GetCoordinates(string Location)
          {
              double lat = 0;   
              double lng = 0;   
              string splitLocation = Location.Replace(' ','+');
              string newUrl = $"https://maps.googleapis.com/maps/api/geocode/json?address={splitLocation}&key=AIzaSyCPy9-rXe-uJeoCt6F4XHaDVTJBryOXT-4";
              HttpClient client = new HttpClient();
              string responseString = client.GetStringAsync(newUrl).Result;
              RootObject root = JsonConvert.DeserializeObject<RootObject>(responseString);

              if (root.results.Count > 0)
              {
                lat = root.results[0].geometry.location.lat;
                lng = root.results[0].geometry.location.lng;
              }
                string cdns = $"{lat}, {lng}";

              return cdns;
          } 
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
          _context.Animals.Add(new Animal() {Id = 1, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates =Animal.GetCoordinates("18835 Winnwood Ln. Santa Ana Ca 92705"), Name = "Charlie", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Brown/White", Size = "Med", LostOrFound = "Lost", Date = "6/1/17"});
          _context.Animals.Add(new Animal() {Id = 2, User = "rbeardshear", Location ="1524 Maurine Place Fullerton CA 92831", Coordinates =Animal.GetCoordinates("1524 Maurine Place Fullerton CA 92831"), Name = "Chloe", Type = "Cat", Breed = "Persian", Color = "Grey/White", Size = "Sm", LostOrFound = "Lost", Date = "3/2/17"});
          _context.Animals.Add(new Animal() {Id = 3, User = "rbeardshear", Location ="1033 N Custer Street Santa Ana CA 92701", Coordinates =Animal.GetCoordinates("1033 N Custer Street Santa Ana CA 92701"), Name = "Ryder", Type = "Dog", Breed = "German Shepherd", Color = "Brown/Black", Size = "Lrg", LostOrFound = "Lost", Date = "1/21/17"});
          _context.Animals.Add(new Animal() {Id = 4, User = "rbeardshear", Location ="1801 E Chestnut Ave Santa Ana CA 92701", Coordinates =Animal.GetCoordinates("1801 E Chestnut Ave Santa Ana CA 92701"), Name = "Lilly", Type = "Cat", Breed = "Exotic Shorthair", Color = "Brown/Grey", Size = "Med", LostOrFound = "Lost", Date = "7/15/17"});
          _context.Animals.Add(new Animal() {Id = 5, User = "rbeardshear", Location ="2500 N Main St Santa Ana CA 92705", Coordinates =Animal.GetCoordinates("2500 N Main St Santa Ana CA 92705"), Name = "Gene", Type = "Dog", Breed = "Bulldog", Color = "Grey/White", Size = "Med", LostOrFound = "Lost", Date = "4/11/17"});
          _context.Animals.Add(new Animal() {Id = 6, User = "rbeardshear", Location ="1800 W Santa Clara Ave Santa Ana CA 92706", Coordinates =Animal.GetCoordinates("1800 W Santa Clara Ave Santa Ana CA 92706"), Name = "Tina", Type = "Cat", Breed = "Maine Coon", Color = "Black/White", Size = "Sm", LostOrFound = "Lost", Date = "9/16/17"});
          _context.Animals.Add(new Animal() {Id = 7, User = "rbeardshear", Location ="2229 N Spruce St Santa Ana CA 92706", Coordinates =Animal.GetCoordinates("2229 N Spruce St Santa Ana CA 92706"), Name = "Louise", Type = "Cat", Breed = "Ragdoll", Color = "Orange/White", Size = "Med", LostOrFound = "Lost", Date = "6/13/17"});
          _context.Animals.Add(new Animal() {Id = 8, User = "rbeardshear", Location ="1313 Disneyland Dr Anaheim CA 92802", Coordinates =Animal.GetCoordinates("1313 Disneyland Dr Anaheim CA 92802"), Name = "Mickey", Type = "Dog", Breed = "Beagle", Color = "Brown/White", Size = "Med", LostOrFound = "Lost", Date = "10/1/16"});
          _context.Animals.Add(new Animal() {Id = 9, User = "rbeardshear", Location ="1000 S Harbor Blvd Fullerton CA 92832", Coordinates =Animal.GetCoordinates("1000 S Harbor Blvd Fullerton CA 92832"), Name = "Ace", Type = "Dog", Breed = "Poodle", Color = "Black/Grey", Size = "Lrg", LostOrFound = "Lost", Date = "7/1/17"});
          _context.Animals.Add(new Animal() {Id = 10, User = "rbeardshear", Location ="321 E Chapman Ave Fullerton CA 92832", Coordinates =Animal.GetCoordinates("321 E Chapman Ave Fullerton CA 92832"), Name = "Rocky", Type = "Cat", Breed = "British Shorthair", Color = "Tan", Size = "Sm", LostOrFound = "Lost", Date = "1/1/16"});
          _context.Animals.Add(new Animal() {Id = 11, User = "rbeardshear", Location ="800 N. State College Fullerton CA 92831", Coordinates =Animal.GetCoordinates("800 N. State College Fullerton CA 92831"), Name = "Milo", Type = "Dog", Breed = "Rottweiler", Color = "Tan/White", Size = "Lrg", LostOrFound = "Lost", Date = "5/12/16"});
          _context.Animals.Add(new Animal() {Id = 12, User = "rbeardshear", Location ="18001 Yorba Linda Blvd Yorba Linda CA 92886", Coordinates =Animal.GetCoordinates("18001 Yorba Linda Blvd Yorba Linda CA 92886"), Name = "Pretty Boy", Type = "Turtle", Breed = "Box Turtle", Color = "Green", Size = "Sm", LostOrFound = "Lost", Date = "5/16/17"});
          _context.Animals.Add(new Animal() {Id = 13, User = "rbeardshear", Location ="9392 Cloudhaven Dr. Huntington Beach Ca 92646", Coordinates =Animal.GetCoordinates("9392 Cloudhaven Dr. Huntington Beach Ca 92646"), Name = "Roxy", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Dark-Brown/White", Size = "Med", LostOrFound = "Found", Date = "5/22/17"});
          _context.Animals.Add(new Animal() {Id = 14, User = "rbeardshear", Location ="26900 Peters Canyon Rd Tustin CA 92782", Coordinates =Animal.GetCoordinates("26900 Peters Canyon Rd Tustin CA 92782"), Name = "Stella", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Brown/Black/Grey/White", Size = "Med", LostOrFound = "Lost", Date = "5/13/17"});
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
          value.Coordinates = Animal.GetCoordinates(value.Location);
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
