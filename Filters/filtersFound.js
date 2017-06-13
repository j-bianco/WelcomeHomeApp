angular.module('petApp')
.filter('found', function() {
 return function( animal, lostOrFound) {
    var filtered = [];
    angular.forEach(animals, function(animal) {
      if(animal.lostOrFound === "Found") {
        filtered.push(animal);
      }
    })
    return filtered;
  };
});

