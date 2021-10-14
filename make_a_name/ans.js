// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
var Person = function(firstAndLast) {
    let first = firstAndLast.split(/[ ,.]+/)[0] ; 
    let second = firstAndLast.split(/[ ,.]+/)[1]
    let firstName;
    let lastName;
    this.setFirstName = function(f) {
      firstName = f ;
    };
  
     this.setLastName = function(l) {
      lastName = l ;
    };
  
     this.setFullName = function(firstAndLast) {
      firstName = firstAndLast.split(/[ ,.]+/)[0] ;
      lastName = firstAndLast.split(/[ ,.]+/)[1] ;
    };
  
    this.getFirstName = function() {
      if(firstName === undefined){
        return first;
      }else {
        return firstName;
      }
    };
     this.getLastName = function() {
      if(lastName === undefined){
        return second;
      }else {
        return lastName;
      }
    };
  
    this.getFullName = function() {
      if (firstName === undefined && lastName == undefined){
        return first+' '+ second 
      }else if (firstName !== undefined && lastName === undefined ){
        return firstName+' '+ second 
      }else if(lastName !== undefined && firstName === undefined ){
        return first+' '+ lastName 
      }else {
        return firstName+' '+ lastName 
      }
    };
  
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  