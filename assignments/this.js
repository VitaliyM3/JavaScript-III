/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - This referrs to the window of the browser. Its the outer most "This"
* 2. Implicit Binding - When a function is called by a preceding dot(left of the dot) the object before the dot is "this"
* 3. New Binding - When a constructor function is used with the "new" keyword, "this" refers to the new object created and returned by the constructor function.
* 4. Explicit Binding - refers to metohds like .call .apply .bind When they are used its over riding or changing what "this" points to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
let object = {
    lastName: "Mikhaylyuk",
    favoriteColor: "Green",
    interests: "Coral",
    info: function(name) {
      console.log(`My name is ${name} ${this.lastName} and my favorite color is ${this.favoriteColor}. I like ${this.interests}.`);
    }
};

object.info("Vitaliy")

// Principle 3

// code example for New Binding
function Constructor(name, lastName, state) {
    this.name = name;
    this.lastName = lastName;
    this.location = state;
    this.info = function() {
    console.log(`My name is ${this.name} ${this.lastName}. I am from ${this.location}`);
    };
  };
  
  let vitaliy = new Constructor("Vitaliy", "Mikhaylyuk", "Virginia");
  let john = new Constructor("John", "Doe", "Alabama");
  
  vitaliy.info();
  john.info();

// Principle 4

// code example for Explicit Binding