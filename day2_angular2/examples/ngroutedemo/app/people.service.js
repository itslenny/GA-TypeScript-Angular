System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var PeopleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PeopleService = (function () {
                function PeopleService() {
                    console.log('people service loaded');
                }
                PeopleService.prototype.getPeople = function () {
                    //TODO: get people from rest endpoint
                    return [
                        { name: "Lenny", id: 123 },
                        { name: "Bob", id: 345 },
                        { name: "Barb", id: 12 },
                        { name: "Linda", id: 754 },
                        { name: "Gertrude", id: 151 }
                    ];
                };
                PeopleService.prototype.findPerson = function (id) {
                    return this.getPeople().filter(function (p) { return p.id == id; }).pop();
                };
                PeopleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PeopleService);
                return PeopleService;
            }());
            exports_1("PeopleService", PeopleService);
        }
    }
});
//# sourceMappingURL=people.service.js.map