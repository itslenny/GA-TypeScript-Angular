#TypeScript

TypeScript is a language for application-scale JavaScript. TypeScript adds optional types, classes, and modules to JavaScript. TypeScript supports tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.

####Objectives

* Install typescript compiler and tools
* Understand basics of TypeScript Language
* Understand Object Oriented modeling with TypeScript
* Setup automated build flow

####Resources

* [Github Repo](https://github.com/Microsoft/TypeScript)
* [Handbook (documentation)](http://www.typescriptlang.org/Handbook)
* [Playground (online editor)](http://www.typescriptlang.org/Playground)
* [VS Code Editor (optional download)](https://code.visualstudio.com/)

##Setup

To use TypeScript you can simply install the npm module

```
npm install -g typescript
```

This will give you access to the `tsc` (TypeScript Compiler) command which will compile TypeScript code into JavaScript.

**Basic Usage**

```
tsc filename.ts
#produces filename.js
```
Tip: Use the `-w` flag to watch the file for changes and auto compile.

##JavaScript is TypeScript
...but TypeScript is not JavaScript.

TypeScript is a superset of JavaScript which means that any valid JavaScript is also valid TypeScript. However, not all valid TypeScript is valid JavaScript.

**Basic Example**

```
var greet = function(name) {
    console.log("Hello, " + name);
}
greet("Lenny");
```
This is valid JavaScript and valid TypeScript

##Basic Types

TypeScript allows all of the basic types to be explicitly defined. These include String, Number, Boolean, Array, Object, Function, and a few others (like Date).

```
var greet = function(name:string): void {
    console.log("Hello, " + name);
}
greet("Lenny");
```

**Special Types**

* void - specifies that a function has no return value.
* any - explicitly specifies that the value can be anything. This is the default definition of any variable.

##Compound types (interfaces)

We can use interfaces to define object in TypeScript.

```
interface Person {
    first: string;
    last: string;
}
```

These structures can also be nested like this.

```
interface Pet {
    name: string;
    age: number;
}

interface Person {
    first: string;
    last: string;
    pets?: Pet[];
}
```

Notice the `[]` after the type `Pet` this indicates that it is an array of pets instead of just a single `Pet` object. Each `Pet` inside of the array is type checked automatically.

##Enums

Often we have a specific list of values we want to accept. This is called an Enum (short for enumeration). For example, if our pet could be of a limited list of types we could define an `AnimalType` enum.

```
enum AnimalType {
    Cat, Dog, Iguana, Ferret, Fox
}

interface Pet {
    name: string;
    age: number;
    type: AnimalType;
}
```

In JavaScript these values are mapped to numbers (Cat = 0, Dog = 1, ...). So if you tried to directly log the pet's type it would output the number. Luckily, the enum also maps the number back to the string so we can easily retrieve it.

```
var myPet: Pet = {
    name: "Neko",
    age: 13,
    type: AnimalType.Cat
}

console.log(myPet.type);
//outputs: 0

console.log(AnimalType[myPet.type]);
//outputs: Cat
```


##Using Modules

Modules are a way to organize your code into logical units. If multiple files use the same module they are combined when compiled. Modules are just simple containers that can be used for larger projects. We really don't need to use them at this point, but I just wanted to make sure you were aware that they are available.

**Example**

```
module TimeUtils {
    export function getCleanTime():string {
        var d = new Date();
        return d.toLocaleTimeString();
    }
}

module CatParty {
    import getTime = TimeUtils.getCleanTime;
    export function letsParty(): void {
        console.log(`It's ${getTime()} and the cat party has started!!`);
    }
}

module DogParty {
    import partyTime = TimeUtils.getCleanTime;
    export function letsParty(): void {
        console.log(`It's ${partyTime()} and the dog party has started!!`);
    }
}

module app {
    export var startTheParties = function() {
        CatParty.letsParty();
        DogParty.letsParty();   
    }
}

app.startTheParties();
```

**Takeaways**

* Notice that `DogParty` and `CatParty` have functions by the same name, but that's fine because they're in separate modules.
* Notice the use of `export` which allows modules to access members of other modules.
* Notice the use of `import` which allows modules to create references to elements in other modules. This is often useful if you're using a function from another module multiple times.

##Lets Get Classy

Typescript has a really nice syntax for creating classes that can optionally `implement` interfaces. This means that we can easily create highly flexible object oriented designs.

```
class Person implements IPerson {
    
    constructor (first: string, last: string) {
        this.first = first;
        this.last = last;
    }
    
    public getFullName(): string {
        return this.first + " " + this.last;
    }
    
}
```

Note: I've renamed the `Person` interface to `IPerson` because they must have unique names.

##Build configuration

Obviously, we won't have just one TS file for very long and running `tsc` to compile each file separately would be silly.

Luckily, `tsc` allows us to create a config file `tsconfig.json` in the root of our project which will tell it which files to compile and in which order. It also allows us to define other configuration options. 

```
{
    "compilerOptions": {
        "target": "es5",
        "out": "app.js",
        "watch": true
    },
    "files" : [
        "models/Person.ts",
        "models/Pet.ts",
        "app.ts"
    ]
}
```

* target - Compile to JavaScript ES5
* out - compile the compiled JavaScript to a single file (instead of one for each TS file)
* watch - makes tsc automatically watch when run. If you omit this property you can still just use the `-w` flag when you want to put it in watch mode.
* files - an array of all of the files to compile (yes you have to list each file so it knows what order to load them in)

####Resources

* [TSConfig docs (a bit lacking)](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json)
* [Full tsconfig schema](http://json.schemastore.org/tsconfig)
* [TSC compiler options](https://github.com/Microsoft/TypeScript/wiki/Compiler-Options)

####Build Alternatives

TSC / tsconfig is by far the quickest and easiest way to get up and running with TypeScript, but it's pretty limiting. You'll probably quickly out grow it and want to consider one of these alternatives.

* [Gulp](https://github.com/gulpjs/gulp) with [gulp-typescript](https://www.npmjs.com/package/gulp-typescript)
* [Grunt](https://github.com/gruntjs/grunt) with [grunt-typescript](https://www.npmjs.com/package/grunt-typescript)
* [webpack](https://webpack.github.io/) with [ts-loader](https://github.com/TypeStrong/ts-loader)


##Challenge

Let's expand on what we have so far. As you go ensure you are typing EVERYTHING. Functions that do not return a value should be `void` all other variables and functions should specify their input and output.

* Create a class for pets that uses our existing interface.
* Create public functions for managing pets to the `Person`
    * `addPet(pet)` - adds a pet to the person
    * `removePet(pet)` - removes a pet from the person (optionally returns the pet that was removed)
    * `getPets()` - returns an array of all pets that belong to the person
    * `givePet(pet, person)` - Should move the pet from one person to another person.





