var app;
(function (app) {
    var models;
    (function (models) {
        (function (PetStatus) {
            PetStatus[PetStatus["Good"] = 0] = "Good";
            PetStatus[PetStatus["Bad"] = 1] = "Bad";
        })(models.PetStatus || (models.PetStatus = {}));
        var PetStatus = models.PetStatus;
        var Pet = (function () {
            function Pet(name) {
                this.name = name;
            }
            Pet.prototype.setStatus = function (status) {
                this.status = status;
            };
            Pet.prototype.getStatus = function () {
                return this.status;
            };
            return Pet;
        }());
        models.Pet = Pet;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var models;
    (function (models) {
        var Person = (function () {
            // public first:string;
            // public last:string;
            // constructor(first:string, last:string) {
            //     this.first = first;
            //     this.last = last;
            // }
            function Person(first, last) {
                this.first = first;
                this.last = last;
            }
            Person.prototype.getFullName = function () {
                return this.first + " " + this.last;
            };
            return Person;
        }());
        models.Person = Person;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var Person = app.models.Person;
    var Pet = app.models.Pet;
    console.log("app started!!!");
    var p = new Person("Lenny", "Urbanowski");
    console.log(p);
    console.log(p.getFullName());
    var p = new Person("Jane", "Doe");
    console.log(p);
    console.log(p.getFullName());
    var pet = new Pet("Fido");
    pet.age = 5;
    pet.setStatus(app.models.PetStatus.Good);
    console.log(pet);
})(app || (app = {}));
