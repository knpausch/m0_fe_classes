// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string

class Unicorn {
  constructor (name) {
    this.name = name;
    this.color = "silver";
  }

  say(speech) {
    this.speech = speech;
    console.log("*~* "+ this.speech + " *~*");
  }
}

var unicorn1 = new Unicorn("Bob");
console.log(unicorn1);
unicorn1.say("Hello");

// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could
//be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property
//changes to false

var pet = "bat";

class Vampire {
  constructor (name, pet) {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
  }

  drink() {
    this.thirsty = false;
  }
}

pet = "cat";
var vamp1 = new Vampire ("Bela Lugosi", pet);
console.log(vamp1);
vamp1.drink();

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times,
//it is no longer hungry
// HINT: This requires you to use your knowledge from the conditionals
//lesson

var isHungry = true;
var stomach = 1;

class Dragon {
  constructor (name, rider, color, isHungry) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.isHungry = isHungry;
  }
  eat() {

    if (stomach < 4) {
      stomach++;
      console.log("Yum!");
    }
    else {
      console.log("Dragon is full!");
    }
  }
}

var drag1 = new Dragon("Sniffles", "Spongebob", "Green", isHungry);
console.log(drag1);

drag1.eat();
drag1.eat();
drag1.eat();
drag1.eat();

//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
