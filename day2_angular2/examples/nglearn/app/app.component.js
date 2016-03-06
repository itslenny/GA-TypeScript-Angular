System.register(["angular2/core"], function(exports_1, context_1) {
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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.name = "Lenny";
                    this.buttonActive = false;
                    this.people = [];
                    this.people.push({ first: "Jane", last: "Doe" });
                    this.people.push({ first: "John", last: "Doe" });
                    console.log('loaded');
                }
                AppComponent.prototype.toggleButton = function () {
                    this.buttonActive = !this.buttonActive;
                };
                AppComponent.prototype.keyup = function (event) {
                    if (event.which === 69)
                        event.preventDefault();
                    console.log('keyup', event.which);
                };
                AppComponent.prototype.onMousemove = function (event) {
                    console.log('moved!!', event.x, event.y);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "views/main.html",
                        styles: [
                            "input{ background-color: yellow; }"
                        ],
                        styleUrls: [
                            'css/main.css'
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map