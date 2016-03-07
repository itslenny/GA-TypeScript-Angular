#Angular 2 - part 2

[Angular 2 template syntax](https://angular.io/docs/ts/latest/guide/template-syntax.html)


##Loading components in components

Components need to be explicitly imported and loaded in angular2. Here we have a second component called "todo".

**todo.component.ts**
```
import {Component} from "angular2/core";

@Component({
    selector: "todo",
    template: "My todo list"
})
export class TodoComponent { }
```

To load this component we have to first import it (line 2) and then list it as a directive in the component annotation. After that any instances of the selector (in this case `<todo>`) will be replaced with that component.

This gives us the freedom to have multiple components with the same name in a single app and load in the specific one we want to use.

**app.coponent.ts**
```
import {Component} from "angular2/core";
import {TodoComponent} from "./todo.component"

@Component({
    selector: "my-app",
    template: `
        <h1>My First Angular 2 App</h1>
        <todo></todo>
    `,
    directives: [TodoComponent]
})
export class AppComponent { }
```

##Binding data to components

We can bind data via attributes by defining them in the `@Component` definition. We simply provide an array of `inputs` and define a matching public variable for each.

```
@Component({
    selector: "other",
    template: `<div>{{choice}} - {{something}}</div>`,
    inputs:["choice", "something"]
})
export class OtherComponent {

    public choice:string;
    public something:number;

}
```

Then where ever we use the component we can bind to the `inputs` just like any other attribute.

```
<other [choice]="myChoiceValue" [something]="4"></other>
```

##Preserving content

In angular 1 we had the concept of `transclude` in angular 2 we've replaced that with the use of the HTML5 `<content>` tag.

If we want to pass some data in we simply wrap it in the `<content>` tag.

```
<other>
    <content>
        I want to <b>KEEP THIS DATA</b>
    </content>
</other>
```

Then to load it in we just use `<ng-content>` in our template like this...

```
@Component({
    selector: "other",
    template: `<div><ng-content></ng-content></div>`
})
export class OtherComponent {

}
```
In this example the `<ng-content></ng-content>` will automatically be replaced with `I want to <b>KEEP THIS DATA</b>`.

##Creating services

Services are a way to package reusable code blocks. Creating them is extremely easy in angular.

We just need to import `Injectable` and add the `@Injectable` annotation above the service. This tells angular that this is something that we want to be able to inject.

```
import {Injectable} from 'angular2/core';

@Injectable()
export class MyService {
    public getData(){
        return "this is some data";
    }
}
```

Loading the service is fairly straight-forward too. There are 3 parts to this.

* import the service `import {MyService} from "./services/myservice";`
* list it as a provider `providers: [MyService]`
* "receive" it in the constructor and store it

```
import {Component} from "angular2/core";
import {MyService} from "./services/myservice";

@Component({
    selector: "other",
    template: `<div>my content</div>`,
    providers: [MyService]
})
export class SomethingComponent {

    constructor(private myservice: MyService) {
    }
    
}
```

Remember `constructor(private myservice: MyService)` is just shorthand for manually defining and assign a variable using `this` here is the more verbose version for reference.

```
export class SomethingComponent {

    private myservice: MyService;

    constructor(myservice: MyService) {
        this.myservice = myservice;
    }
    
}
```


##Routing

Angular 2 includes a new router. Lets take a look at how to set it up.

First we need to load the script. You can do this in your `index.html` AFTER the `angular2.js`.

```
<script src="node_modules/angular2/bundles/router.dev.js"></script>
```

Then somewhere in the `<head>` tag we must define a base href (same as in angular 1).

```
<base href="/">
```

Next we need to load the directives and providers into our app. Add this line near the top of `app.component.ts`

```
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
```

* RouteConfig - an annotation for defining routes
* ROUTER_DIRECTIVES - a collection of directives for working with routes
* ROUTE_PROVIDERS - a collection of providers (services) that handles routing

Next, the directives and providers need to be loaded into the component.

```
import {Component} from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: "my-app",
    template: `
        <h1>My First Angular 2 App</h1>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
export class AppComponent { }
```

Now we can define our routes add an annotation like this above the class (just put it after `@Component`).

```
@RouteConfig([
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  }  
])
```

`@RouteConfig` takes an array of routes that define the...

* path - actual url of the route
* name - used for referencing the route internally
* component - a component to be loaded when the url matches the path (must be imported like any other component)

####Displaying the content

To display the content of the router you just need to add the `<router-outlet></router-outlet>` tag somewhere in your app components template. The router-outlet acts as a place holder which will be replaced with the component specified in `@RouteConfig`.

####Links

To link to routes in angular 2 we use the `routeLink` directive. The `routeLink` directive takes an array where the first parameter is the name of the route and the second is an optional object of route parameters.

```
<a [routerLink]="['About']">About</a>
```

##Using Parameters

To pass parameters in the url we first need to define a route that accepts parameters. This is done in the syntax you'd expect (similar to angular1, express, etc, etc)

**Define Route**

This example defines a parameter called `id`

```
@RouteConfig([
    {
        path: '/post/:id',
        name: 'Post',
        component: PostComponent
    }
])
```

**Link with parameters**

To link to pass in the parameters we use the 2nd value of the `routerLink` array like this.

```
<a [routerLink]="['Post', {id:1}]">About</a>
```

**Accessing Parameters**

To access route parameters we have to import the "RouteParams" provider and define it in our constructor. This variable can be called anything you'd like. Angular knows to load `RouteParams` into it because of the type `routeParams: RouteParams` or `taco: RouteParams` would both be fine.

```
import {Component} from "angular2/core";
import {RouteParams} from 'angular2/router';

@Component({
    selector: "post",
    template: "<h1>Post</h1>",

})
export class PostComponent {
    constructor(private routeParams: RouteParams) {
        console.log(this.routeParams.params.id);
        //outputs 1 if the link above is clicked
    }
}
```

####Complete example

**home.component.ts**
```
import {Component} from "angular2/core";

@Component({
    selector: "home",
    template: "<h1>Home</h1>",

})
export class HomeComponent { }
```

**app.component.ts**

```
import {Component} from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {AboutComponent} from './about.component';
import {HomeComponent} from './home.component';

@Component({
    selector: "my-app",
    template: `
        <h1>My First Angular 2 App</h1>
        <a [routerLink]="['Home']">Home</a> | 
        <a [routerLink]="['About']">About</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})
@RouteConfig([
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  }  
])
export class AppComponent { }
```

You can read more here: [Angular2 Routing Guide](https://angular.io/docs/ts/latest/tutorial/toh-pt5.html)
