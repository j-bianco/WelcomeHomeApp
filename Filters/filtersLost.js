angular.module('petApp')
.filter('lost', function() {
 return function( animal, lostOrFound) {
    var filtered = [];
    angular.forEach(animals, function(animal) {
      if(animal.lostOrFound === "Lost") {
        filtered.push(animal);
      }
    })
    return filtered;
  };
});

