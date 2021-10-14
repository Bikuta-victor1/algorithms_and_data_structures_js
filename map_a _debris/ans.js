// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var two_pi = 2 * Math.PI;
    let new_arr = [];
    for (var a in arr) {
      var orbital = contoorbital(arr[a].avgAlt)
      new_arr.push(newarr(arr[a].name, Math.round(orbital)))
     
    }
    function contoorbital(avgA) {
      var a = avgA + earthRadius;
      var cb_gm = Math.pow(a, 3) / GM;
      return two_pi * Math.sqrt(cb_gm);
    }
  
    function newarr(name, orb) {
      return { name: name, orbitalPeriod: orb };
    }
   return new_arr;
  }