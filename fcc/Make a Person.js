var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

  var fullName = firstAndLast;

  this.getFullName = function() {
    return fullName;
  };
    this.getFirstName = function() {
    return fullName.split(' ')[0];
  };
    this.getLastName = function() {
    return fullName.split(' ')[1];
  };
    this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(' ')[1];
  };
    this.setLastName = function(last) {
    fullName = fullName.split(' ')[0] + " "+ last;
  };
    this.setFullName = function(firstAndLast) {
     fullName = firstAndLast;
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
