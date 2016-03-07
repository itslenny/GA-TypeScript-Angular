import {Injectable} from 'angular2/core';

@Injectable()
export class PeopleService {
    
    constructor() {
        console.log('people service loaded');
    }
    
    public getPeople() {
        //TODO: get people from rest endpoint
        return [
              {name: "Lenny", id:123},
              {name: "Bob", id:345},
              {name: "Barb", id:12},
              {name: "Linda", id:754},
              {name: "Gertrude", id:151}
        ];
    }
    
    public findPerson(id:number) {
        return this.getPeople().filter((p) => p.id == id).pop();
    }
    
}