module app {
    import Person = models.Person;
    import Pet = models.Pet;
    
    console.log("app started!!!");
    
    var p = new Person("Lenny", "Urbanowski");
    console.log(p);
    console.log(p.getFullName());
    
    var p = new Person("Jane", "Doe");
    console.log(p);
    console.log(p.getFullName());
    
    var pet = new Pet("Fido");
    pet.age = 5;
    pet.setStatus(models.PetStatus.Good);
    
    console.log(pet);
}