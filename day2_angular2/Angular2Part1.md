#Angular 2

* [Angular2 Homepage](https://angular.io/)
* [Api Documentation](https://angular.io/docs/ts/latest/api/)
* [Angular2 Cheat Sheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
* [Article about anguler 2 release](http://thenewstack.io/google-preps-angular-2-final-release/)

##Getting Started

Manually setting up an Angular 2 project can be a slow and painful process so to get up and running as quickly as possible we're going to use the slush angular2-ts generator. Slush is a gulp based build tool that makes it fast to get started with angular 2.

####Resources

* [Slush Homepage](http://slushjs.github.io/)
* [slush-angular2-ts](https://www.npmjs.com/package/slush-angular2-ts)

####Creating a project

First, we need to install slush and the angular2-ts generator.

```
npm install -g slush slush-angular2-ts
```

Next we make a directory and create a project

```
mkdir myproject
slush angular2-ts
```

This will create all the files we need to get started. We just use `npm start` to start the project.

```
cd myproject
npm start
```

This setup gives you everything you need to get going including watchers and live refresh. If you open an editor and modify a TS file you'll see that the page is refreshed automatically every time you save.

##Components

Angular2 centers around creating components. Components are a lot like directives in angular 1. They are simply typescript classes with some special annotation.


####Our first component

```javascript
import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    template: `<h1>This is my app</h1>`
})
export class AppComponent { }
```

To be able to use the `@Component` annotation we must first import it from `angular2/core`. One thing you'll notice about angular2 is that we have to explicitly import EVERYTHING. This can be a little annoying, but it makes sure that we are only loading exactly what we need which will ensure that your app stays lean and fast.

Annotations always refer to the class immediately following them. So in this case `class AppComponent` is being assigned these annotations.

In the `@Component` declaration we describe our component to angular.

* selector - this is how angular knows to instantiate our component. "my-app" means an htmltag `<my-app></my-app>`. This is similar to using the "E" value for restrict in angular 1, but we can type whatever we want (instead of it using the directive name).
* template - this is the html template for this item that will be placed into the DOM when this component is loaded.

##Component Templates

Templates in angular 2 can be provided inline using the `template` attribute or loaded from a file via AJAX using the `templateUrl` attribute.

```javascript
@Component({
    selector: "my-app",
    template: `
        <h1>This is my app</h1>
        <p>multi-line strings are awesome!!</p>
    `
})
export class AppComponent { }
```

```javascript
@Component({
    selector: "my-app",
    templateUrl: "views/myapp.html"
})
export class AppComponent { }
```

##Component Styles

There are several ways to assign classes and styling in angular.

Components can include their own style definitions using the `styles` property. Any styles defined in the `styles` array will be scoped to just that component.

```javascript
@Component({
    selector: "todo",
    template: "My todo list",
    styles: [
        `
            .myclass{ background: blue; }
        `
    ]
})
```

You can also load css files (loaded via ajax) for a specific component using the `styleUrls` property.

```javascript
@Component({
    selector: "todo",
    template: "My todo list",
    styleUrls: [
        "path/to/todoStyle.css",
        "path/to/otherStyle.css"
    ]
})
```

##Data binding

Basic data binding (interpolation) is handled in exactly the same way in angular 2 as in angular 1. However, the concept of `scope` is replaced with the context of the class (aka `this`). Simply create a public variable and bind it.

```javascript
export class AppComponent {
    public name;
    
    constructor() {
        this.name = "Lenny";
    }
}
```

```html
My name is {{name}}.

Outputs: My name is Lenny.
```

##Attribute binding

Any html attribute can be (one-way) bound by simply wrapping the attribute in square brackets.

```html
<input [value]="name">
```

**BIND ALL THE THINGS**

Note: The bracket notation type of attribute (one-way) binding works with ANY valid html attribute.

```html
<div [class]="myclass"></div>
<img [src]="myimage" [title]="mytitle"></div>
```

##Two-way binding

Attribute binding is just ONE WAY binding. This means that if the value changes the input will be updated, but if you change the input it will have no effect on the data.

To achieve two-way data binding we still use `ng-model`, but the syntax has changed slightly.

```html
<input [(ngModel)]="name">
```

Now this input box is 2-way bound. If you type in the field it will update the data value AND if the data value changes the input box will be updated.

##Style/class binding

You can easily use attribute binding to assign classes and styles. In angular 2 there are several ways to do this.


**style attribute**
```html
<div [style]="mystyles"></div>
```
any string assigned to `this.mystyles` will be populated into the styles for this div (eg `background: green;`).

**class attribute**
```html
<div [class]="myclass"></div>
```
any string assigned to `this.myclass` will be populated into the class for this div (eg `myclass`).

**specific style attribute**
```html
<div [style.color]="myColor"></div>
```
any string assigned to `this.myColor` will be populated as the color attribute for this element.

**specific style attribute (with unit)**
```html
<div [style.fontSize.em]="myFontSize"></div>
<div [style.width.%]="myWidth"></div>
```
For any attribute that can use units you an append the unit to the attribute and then pass in a numeric value.

In the above example the value assigned to `myFontSize` will be represented in em and `myWidth` will be assigned as a percentage.

**specific class attribute**
```html
<div [class.myclass]="hasMyClass"></div>
```
In this example `this.hasMyClass` will be a boolean. If the value is true the div will have the class `myclass`. If it's false it will not.

**ngClass**

```html
<div [ngClass]="{classOne:val1, classTwo:val2"></div>
```

Angular 2 also kept the concept of `ngClass`, but it only works with the object syntax now (you can just use `[class]` for the string syntax). So, it works using an object of classes with with boolean value. In the above example, if `val1` is truthy the item will have `classOne` and if `val2` is truthy the item will have `classTwo` (if both are truthy it'll have both).

**ngStyle**

Example 1

```jaascript
var weight = 'bold';
this.myStyles = {
    'font-style': 'italic',
    'font-size': '12px',
    'font-weight': weight
};
```
```html
<div [ngStyle]="myStyles"></div>
```

Example 2

```javascript
this.style="italic";
this.size="12px";
this.weight="bold";
```
```html
<div [ngStyle]="{'font-style': style, 'font-size': size, 'font-weight': weight}"></div>
```

Similarly, ngStyle allows us to set multiple style properties from an object. You can either pass in the entire object in a variable (like the first example) or include the object in the html and only bind the values (like the second example).

##Show / hide

There is no ng-show/ng-hide in Angular 2. To show / hide items in angular we can simply bind to the `hidden` property

```
<div [hidden]="isHidden"></div>
```

##Enable / disable

There is no ng-disable in angular 2. To enable / disable items in angular we can simply bind to the `disabled` property

```
<div [disabled]="isDisabled"></div>
```

##Events

Event binding in angular 2 is also very simple. Any native javascript event can be bound to an element by simply wrapping it in parenthesis.

```javascript
class AppComponent {
    pubic add() {
        console.log('adding!!');
    }
}
```

```html
<button (click)="add()">Add</button>
```

This works for any javascript event for example...

```html
<input type="text" (keypress)="onKeyPress()">
<input type="text" (keyup)="onKeyUp()">
<input type="text" (keydown)="onKeyDown()">
<div (mousemove)="onMouseMove()"></div>
```

####Passing the event object

Similar to angular 1 we can get the event object by simply passing in `$event`. With typescript we can also have strong typing of our event.

```javascript
class AppComponent {
    pubic onKeyUp(event: KeyboardEvent) {
        console.log('key up', event.which);
    }
    pubic onMouseMove(event: MouseEvent) {
        console.log('mouse move!!', event.x, event.y);
    }    
}

```

```html
<input type="text" (keyup)="onKeyUp($event)">
<div (mousemove)="onMouseMove($event)"></div>
```

##Local Variables

In angular 2 we can define local variables in the html by using a `#` symbol. Local variables can point to values or dom elements.

In this example we are defining the variable `inputbox` by including `#inputbox` in the html tag. We can then reference this value anywhere in our code (without the hash) and access any of it's properties (eg (`inputbox.value`). This is another way we can do data binding.

```
<input type="text" #inputbox>
<div>{{inputbox.value}}</div>
```

##Loops (ngFor)

RIP ng-repeat. You've been replaced with `ngFor`. The syntax is quite similar, but it depends on local variables and uses the [ES6 for...of syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

```javascript
this.items = ["one", "two", "three"]
```

```html
<div *ngFor="#item of items">{{item}}</div>

Output:
<div>one</div>
<div>two</div>
<div>three</div>
```

Notice the `*` before `ngFor` this is required in angular 2.

If we want the index of a for loop we need to assign it to a local variable like this (I'm doing i+1 simply because array indexes start at 0).

```html
<div *ngFor="#item of items; #i = index">{{i+1}}.) {{item}}</div>

Output:
<div>1.) one</div>
<div>2.) two</div>
<div>3.) three</div>
```

##Additional Resources

* [Angular 2 forms documentation](https://angular.io/docs/ts/latest/guide/forms.html) - includes ngModel and form events
* [Angular 2 Template Syntax](https://angular.io/docs/ts/latest/guide/template-syntax.html) - includes all types of styles classes and interpolation
