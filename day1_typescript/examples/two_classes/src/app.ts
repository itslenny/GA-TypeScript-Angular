module app {
    import Person = models.Person;
    import Pet = models.Pet;
    
    console.log("app started!!!");
    
    var p = new Person("Lenny", "Urbanowski");
    console.log(p);
    console.log(p.getFullName());
    
    var p2 = new Person("Jane", "Doe");
    console.log(p2);
    console.log(p2.getFullName());
    
    var pet = new Pet("Fido");
    pet.age = 5;
    pet.setStatus(models.PetStatus.Good);
    
    p.addPet(pet);
    p.addPet(new Pet("Pet2"));
    
    console.log(p);
    
    pet.age = 12;
    
    console.log(p.getPets());
    console.log(p2.getPets());
    // p.removePet(pet);
    p.givePet(pet, p2);
    console.log(p.getPets());
    console.log(p2.getPets());
    
}