import {Component} from "angular2/core";
import {TodoListComponent} from "./todo/TodoList"

interface Person {
    first: string;
    last: string;
}

@Component({
    selector: "my-app",
    templateUrl: "views/main.html",
    styles: [
        `input{ background-color: yellow; }`
    ],
    styleUrls: [
        'css/main.css'
    ],
    directives:[TodoListComponent]
})
export class AppComponent {
    
    public name:string;
    public buttonActive:boolean;
    public people: Person[];
    
    constructor() {
        this.name="Lenny";
        this.buttonActive = false;
        this.people = [];
        // debugger;
        this.people.push({first:"Jane", last:"Doe"});
        this.people.push({first:"John", last:"Doe"});
        console.log('loaded');
    }
    
    public toggleButton() {
        this.buttonActive = !this.buttonActive;
    }
    
    public keyup(event:KeyboardEvent) {
        if(event.which === 69) event.preventDefault();
        console.log('keyup', event.which);
    }
    
    public onMousemove(event:MouseEvent) {
        console.log('moved!!', event.x, event.y);
    }
    
}