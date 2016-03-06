var a:any = "hello";
a = 5;
var something = {a:1,b:2,c:false};

enum AnimalType {
    Feline, Dog, Iguana, Ferret, Fox
}

interface Pet {
    name: string;
    age: number;
    type: AnimalType
}

interface Person {
    first: string;
    last: string;
    age?: number;
    pets?: Pet[];
}

// var myPets: Pet[] = [];
// myPets.push({name:'fido', age:3 })

var greet = function(person: Person, time?: Date): void {
    console.log(`Hello ${getName(person)}`);
    if(time) {
        console.log(`It's ${time.toLocaleDateString()}!!!`);    
    }
    listPets(person);
    // console.log(person.pets.map(function(pet){return pet.name}));
    console.log(person);
}

var listPets = function(person: Person): void {
    if(!person.pets) return;
    person.pets.forEach(function(pet){
       console.log(`${pet.name} the ${AnimalType[pet.type]} is ${pet.age}.`);
       if(pet.type === AnimalType.Feline) {
           console.log("meow");
       } 
    });
}

var getName = function(person: Person): string {
    return `${person.first} ${person.last}`;
}

var me:Person = {
    first:"Lenny",
    last:"Urbanowski",
    age:32,
    pets: [
            {name:"Neko", age:13, type:AnimalType.Feline},
            {name:"Baby", age:7, type:AnimalType.Dog}
        ]
};
greet(me, new Date());
// greet("Lenny");