import {Component} from "angular2/core";

export interface Item {
    name: string;
    done: boolean;
}

@Component({
    selector: "todo-item",
    template: `
    <li [class.done]="itemInput.done" (click)="toggleDone()">
    {{itemInput.name}}
    </li>`,
    inputs:["itemInput"],
    styles:[`
        li {
            list-style: none;
            margin: 5px;
            padding: 5px;
            background: #888888;
            color: white;
        }
        .done {background: red; }
    `]
})
export class TodoItemComponent {
    
    public itemInput: Item;
    
    constructor() {
        
    }
    
    toggleDone() {
        this.itemInput.done = !this.itemInput.done; 
    }
    
}