System.register(["angular2/core", "angular2/router", "./home.component", "./about.component", "./person.component"], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, about_component_1, person_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (person_component_1_1) {
                person_component_1 = person_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "\n        <h1>My First Angular 2 App</h1>\n        <div>\n            <a [routerLink]=\"['Home']\">Home</a> |\n            <a [routerLink]=\"['About']\">About</a> \n        </div>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        {
                            path: "/person/:id",
                            name: "Person",
                            component: person_component_1.PersonComponent
                        },
                        {
                            path: "/about-me-im-so-awesoome",
                            name: "About",
                            component: about_component_1.AboutComponent
                        },
                        {
                            path: "/home",
                            name: "Home",
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map