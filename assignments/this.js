/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global object binding
*
* The value of this, in the global scope, is either bound to the window 
* object in the browser or the console object on the terminal.
*
* 2. Implicit binding
*
* When manipulating objects and trying to access their properties/methods
* using the dot notation, the value of this points to the object that immediately
* precedes the dot.
*
* 3. Building objects using new and constructor functions
*
* The value of this in this case will be the new object that's been created using
* the constructor function
*
* 4. Explicit binding
*  
*  The value of this is explicitly bound to some method using .apply or .call on 
*  a method.
*
*  
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function globalThis() {
  console.log(this);
}

// Principle 2

// code example for Implicit Binding
const car = {
  make: 'Audi',
  model: 'A8',
  year: '2015',
  getInfo() { console.log(`${this.make} - ${this.model}`)}
}

car.getInfo(); // Audi - A8 

// Principle 3

// code example for New Binding
function Student(name) {
  this.name = name;
  this.sayName = function() {
    console.log(`${this.name}`);
  }
}

const zawadi = new Student('Zawadi');
zawadi.sayName();

// Principle 4
// code example for Explicit Binding
const ali = new Student('Ali');
zawadi.sayName.call(ali); // ali is new value for this
