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
              // Console.WriteLine(root);
              if (root.results.Count > 0)
              {
                lat = root.results[0].geometry.location.lat;
                lng = root.results[0].geometry.location.lng;
              }
                string cdns = $"{lat}, {lng}";
              


              // Console.WriteLine(responseString);
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
          _context.Animals.Add(new Animal() {Id = 1, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = Animal.GetCoordinates("18835 Winnwood Ln. Santa Ana Ca 92705"), Name = "Charlie", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Brown/White", Size = "Med", LostOrFound = "Lost", Date = "6/1/17"});
          _context.Animals.Add(new Animal() {Id = 2, User = "rbeardshear", Location ="9392 Cloudhaven Dr. Huntington Beach Ca 92646", Coordinates =Animal.GetCoordinates("9392 Cloudhaven Dr. Huntington Beach Ca 92646"), Name = "Roxy", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Dark-Brown/White", Size = "Med", LostOrFound = "Found", Date = "5/22/17"});
          _context.Animals.Add(new Animal() {Id = 3, User = "rbeardshear", Location ="18835 Winnwood Ln. Santa Ana Ca 92705", Coordinates = Animal.GetCoordinates("18835 Winnwood Ln. Santa Ana Ca 92705"), Name = "Stella", Type = "Dog", Breed = "Mini Australian Shepherd", Color = "Brown/Black/Grey/White", Size = "Med", LostOrFound = "Lost", Date = "5/13/17"});
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
              // a.Coordinates = Animal.GetCoordinates(a.Location);
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
