System.register(["angular2/core", 'angular2/router', './people.service'], function(exports_1, context_1) {
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
    var core_1, router_1, people_service_1;
    var PersonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (people_service_1_1) {
                people_service_1 = people_service_1_1;
            }],
        execute: function() {
            PersonComponent = (function () {
                function PersonComponent(routeParams, people) {
                    console.log(routeParams);
                    this.params = routeParams.params;
                    this.person = people.findPerson(this.params.id);
                }
                PersonComponent = __decorate([
                    core_1.Component({
                        selector: "person-page",
                        template: "\n        <h1>Person</h1>\n        <div *ngIf=\"person\">\n            Name: {{person.name}}<br>\n            id: {{person.id}}\n        </div>\n    ",
                        providers: [people_service_1.PeopleService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, people_service_1.PeopleService])
                ], PersonComponent);
                return PersonComponent;
            }());
            exports_1("PersonComponent", PersonComponent);
        }
    }
});
//# sourceMappingURL=person.component.js.map