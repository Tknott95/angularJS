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
    var StructuralDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StructuralDirectives = (function () {
                function StructuralDirectives() {
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "\n    <section class=\"directive\">\n        <h2>*ngIf</h2>\n        <div>\n            Enter a number higher than 10\n            <br>\n            <input type=\"text\" #number (keyup)=\"0\">\n        </div>\n        <div *ngIf=\"number.value > 10 \">\n        <h1>ngIf is pretty gangster :)</h1>\n            Number is greater than 10\n        </div>\n    </section>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkF0QkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUsd1hBYVQ7cUJBR0osQ0FBQzs7d0NBQUE7Z0JBSUYsMkJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVEQUVDLENBQUEiLCJmaWxlIjoic3RydWN0dXJhbC1kaXJlY3RpdmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SGlnaGxpZ2h0RGlyZWN0aXZlfSBmcm9tIFwiLi9oaWdobGlnaHQuZGlyZWN0aXZlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktc3RydWN0dXJhbC1kaXJlY3RpdmVzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgICAgIDxoMj4qbmdJZjwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBFbnRlciBhIG51bWJlciBoaWdoZXIgdGhhbiAxMFxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bWJlciAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIm51bWJlci52YWx1ZSA+IDEwIFwiPlxuICAgICAgICA8aDE+bmdJZiBpcyBwcmV0dHkgZ2FuZ3N0ZXIgOik8L2gxPlxuICAgICAgICAgICAgTnVtYmVyIGlzIGdyZWF0ZXIgdGhhbiAxMFxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgYCxcblxuXG59KVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJhbERpcmVjdGl2ZXMge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
