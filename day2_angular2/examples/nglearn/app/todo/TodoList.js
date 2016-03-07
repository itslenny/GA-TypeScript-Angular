System.register(["angular2/core", "./TodoItem", "./TodoForm"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, TodoItem_1, TodoForm_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TodoItem_1_1) {
                TodoItem_1 = TodoItem_1_1;
            },
            function (TodoForm_1_1) {
                TodoForm_1 = TodoForm_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent() {
                    this.items = [];
                    this.items.push({ name: "item 1", done: false });
                    this.items.push({ name: "item 2", done: true });
                    this.items.push({ name: "item 3", done: false });
                }
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: "todo",
                        template: "\n        <div>\n            <h3>Todo</h3>\n            <ul>\n                <todo-item *ngFor=\"#item of items\" [itemInput]=\"item\"></todo-item>\n            </ul>\n            <todo-form [items]=\"items\"></todo-form>\n        </div>\n    ",
                        directives: [TodoItem_1.TodoItemComponent, TodoForm_1.TodoFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoListComponent);
                return TodoListComponent;
            }());
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});
//# sourceMappingURL=TodoList.js.map