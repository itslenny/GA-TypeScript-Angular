import {Component} from "angular2/core";
import {RouteParams} from 'angular2/router';
import {PeopleService} from './people.service';

@Component({
    selector: "person-page",
    template: `
        <h1>Person</h1>
        <div *ngIf="person">
            Name: {{person.name}}<br>
            id: {{person.id}}
        </div>
    `,
    providers:[PeopleService]
})
export class PersonComponent {    
    private params;
    public person;
    
    constructor(routeParams: RouteParams, people: PeopleService) {
        console.log(routeParams);
        this.params = routeParams.params;
        this.person = people.findPerson(this.params.id);
    }
    
    // constructor(private params: RouteParams) { }
    
}