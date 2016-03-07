import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {PersonComponent} from "./person.component";

@Component({
    selector: "my-app",
    template: `
        <h1>My First Angular 2 App</h1>
        <div>
            <a [routerLink]="['Home']">Home</a> |
            <a [routerLink]="['About']">About</a> 
        </div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: "/person/:id",
        name: "Person",
        component: PersonComponent
    },    
    {
        path: "/about-me-im-so-awesoome",
        name: "About",
        component: AboutComponent
    },
    {
        path: "/home",
        name: "Home",
        component: HomeComponent,
        useAsDefault: true
    }
])
export class AppComponent { }