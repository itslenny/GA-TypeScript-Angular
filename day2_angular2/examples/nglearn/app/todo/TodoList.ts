import {Component} from "angular2/core";
import {Item, TodoItemComponent} from "./TodoItem";
import {TodoFormComponent} from "./TodoForm";

@Component({
    selector: "todo",
    template: `
        <div>
            <h3>Todo</h3>
            <ul>
                <todo-item *ngFor="#item of items" [itemInput]="item"></todo-item>
            </ul>
            <todo-form [items]="items"></todo-form>
        </div>
    `,
    directives: [TodoItemComponent, TodoFormComponent]
})
export class TodoListComponent {
    
    public items: Item[];
    
    constructor() {
        this.items = [];
        this.items.push({name:"item 1", done:false});
        this.items.push({name:"item 2", done:true});
        this.items.push({name:"item 3", done:false});
    }    
    
}