var a = "hello";
a = 5;
var something = { a: 1, b: 2, c: false };
var AnimalType;
(function (AnimalType) {
    AnimalType[AnimalType["Feline"] = 0] = "Feline";
    AnimalType[AnimalType["Dog"] = 1] = "Dog";
    AnimalType[AnimalType["Iguana"] = 2] = "Iguana";
    AnimalType[AnimalType["Ferret"] = 3] = "Ferret";
    AnimalType[AnimalType["Fox"] = 4] = "Fox";
})(AnimalType || (AnimalType = {}));
// var myPets: Pet[] = [];
// myPets.push({name:'fido', age:3 })
var greet = function (person, time) {
    console.log("Hello " + getName(person));
    if (time) {
        console.log("It's " + time.toLocaleDateString() + "!!!");
    }
    listPets(person);
    // console.log(person.pets.map(function(pet){return pet.name}));
    console.log(person);
};
var listPets = function (person) {
    if (!person.pets)
        return;
    person.pets.forEach(function (pet) {
        console.log(pet.name + " the " + AnimalType[pet.type] + " is " + pet.age + ".");
        if (pet.type === AnimalType.Feline) {
            console.log("meow");
        }
    });
};
var getName = function (person) {
    return person.first + " " + person.last;
};
var me = {
    first: "Lenny",
    last: "Urbanowski",
    age: 32,
    pets: [
        { name: "Neko", age: 13, type: AnimalType.Feline },
        { name: "Baby", age: 7, type: AnimalType.Dog }
    ]
};
greet(me, new Date());
// greet("Lenny"); 
