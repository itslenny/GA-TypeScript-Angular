module app.models {
    
    interface IPerson {
        first: string;
        last: string;
    }
    
    export class Person implements IPerson {
        
        // public first:string;
        // public last:string;
        
        // constructor(first:string, last:string) {
        //     this.first = first;
        //     this.last = last;
        // }
        constructor(public first:string, public last:string) { }
        
        public getFullName(): string {
            return this.first + " " + this.last;
        }
        
    }
    
}