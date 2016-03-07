import {Component} from "angular2/core";
import {Item} from "./TodoItem";

@Component({
    selector: "todo-form",
    template: `
        <form class="form" (ngSubmit)="onSubmit()">
            <input [(ngModel)]="itemName" type="text" class="form-control">
            <button class="btn btn-primary">Add</button>
        </form>   
    `,
    inputs:['items']
})
export class TodoFormComponent {
    
    public items: Item[];
    public itemName: string;
    
    onSubmit() {
        this.items.push({name: this.itemName, done: false});
        this.itemName="";
    }
    
}