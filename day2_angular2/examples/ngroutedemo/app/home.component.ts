import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {PeopleService} from "./people.service";

@Component({
    selector: "home-page",
    template: `
        <h1>Home</h1>
        <div *ngFor="#p of people">
            <a [routerLink]="['Person', {id:p.id}]">{{p.name}}</a>
        </div>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers:[PeopleService]
})
export class HomeComponent {
    
    public people;
    
    constructor(people: PeopleService) {
        this.people = people.getPeople();
    }
    
}