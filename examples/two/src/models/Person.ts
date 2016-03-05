module app.models {
    
    interface IPerson {
        first: string;
        last: string;
    }
    
    export class Person implements IPerson {
        private pets: Pet[];
        // public first:string;
        // public last:string;
        
        // constructor(first:string, last:string) {
        //     this.first = first;
        //     this.last = last;
        // }
        constructor(public first:string, public last:string) {
            this.pets = [];
        }
        
        public getFullName(): string {
            return this.first + " " + this.last;
        }
        
        public addPet(pet: Pet):void {
            this.pets.push(pet);
        }
        
        public getPets(): Pet[] {
            return this.pets;
        }
        
        public removePet(pet: Pet): Pet {
            // this.pets = this.pets.filter(function(p){ return p !== pet; });
            // this.pets = this.pets.filter(  (p) => { return p !== pet; }  );
            this.pets = this.pets.filter(  p => p !== pet  );
            return pet;
        }
        
        public givePet(pet: Pet, to: Person) {
            this.removePet(pet);
            to.addPet(pet);
        }
        
    }
    
}