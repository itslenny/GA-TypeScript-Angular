module app.models {
    
    interface IPet {
        name: string;
        age: number;
    }
    
    export enum PetStatus {
        Good, Bad
    }
    
    export class Pet implements IPet {
        
        public age: number;
        private status: PetStatus;
        
        constructor(public name:string) { }
        
        public setStatus(status:PetStatus): void {
            this.status = status;
        }
        
        public getStatus(): PetStatus {
            return this.status;
        }
        
    }
    
}