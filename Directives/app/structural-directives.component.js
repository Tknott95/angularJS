System.register(['angular2/core', "./unless.directive"], function(exports_1, context_1) {
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
    var core_1, unless_directive_1;
    var StructuralDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            StructuralDirectives = (function () {
                function StructuralDirectives() {
                    this.list = ['MuscleMilk', 'Pre-Workout', 'Donuts'];
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "\n    <section class=\"directive\">\n        <h2>*ngIf</h2>\n        <div>\n            Enter a number higher than 10\n            <br>\n            <input type=\"text\" #number (keyup)=\"0\">\n        </div>\n        <div *ngIf=\"number.value > 10 \">\n        <h1>ngIf is pretty gangster :)</h1>\n            Number is greater than 10\n        </div>\n    </section>\n    <section class=\"directive\">\n        <h2>*ngFor</h2>\n        <div>\n            <ul>\n                <li *ngFor=\"#item of list, #i = index\">{{item}} {{i}}</li>\n            </ul>\n        </div>\n\n    </section>\n    <section class=\"directive\">\n        <h2>[ngSwitch]</h2>\n        <div>\n            Enter red, blue, or green\n            <br>\n            <input type=\"text\" #color (keyup)=\"0\">\n        </div>\n        <div [ngSwitch]=\"color.value\">\n            <template [ngSwitchWhen]=\"'red'\"><span style=\"color: red\">Color is Red</span></template>\n            <template [ngSwitchWhen]=\"'blue'\"><span style=\"color: blue\">Color is Blue</span></template>\n            <template [ngSwitchWhen]=\"'green'\"><span style=\"color: green\">Color is Green</span></template>\n            <template ngSwitchDefault><span style=\"color: pink\">Invalid or Null entry!</span></template>\n        </div>\n    </section>\n\n    <section class=\"directive\">\n        <h2>Custom Directive: *myUnless</h2>\n        <div>\n            Enter true or false\n            <br>\n            <input type=\"text\" #condition (keyup)=\"0\">\n        </div>\n        <div *myUnless=\"condition.value != 'false'\">\n        <br>\n        Only shown if 'false' was entered\n        </div>\n    </section>\n\n\n    ",
                        directives: [unless_directive_1.UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErREE7Z0JBQUE7b0JBRUksU0FBSSxHQUFHLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFbkQsQ0FBQztnQkEvREQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUsMnBEQW1EVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO3FCQUdoQyxDQUFDOzt3Q0FBQTtnQkFNRiwyQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdURBSUMsQ0FBQSIsImZpbGUiOiJzdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIaWdobGlnaHREaXJlY3RpdmV9IGZyb20gXCIuL2hpZ2hsaWdodC5kaXJlY3RpdmVcIjtcbmltcG9ydCB7VW5sZXNzRGlyZWN0aXZlfSBmcm9tIFwiLi91bmxlc3MuZGlyZWN0aXZlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktc3RydWN0dXJhbC1kaXJlY3RpdmVzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgICAgIDxoMj4qbmdJZjwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBFbnRlciBhIG51bWJlciBoaWdoZXIgdGhhbiAxMFxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bWJlciAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIm51bWJlci52YWx1ZSA+IDEwIFwiPlxuICAgICAgICA8aDE+bmdJZiBpcyBwcmV0dHkgZ2FuZ3N0ZXIgOik8L2gxPlxuICAgICAgICAgICAgTnVtYmVyIGlzIGdyZWF0ZXIgdGhhbiAxMFxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgICAgPGgyPipuZ0ZvcjwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNpdGVtIG9mIGxpc3QsICNpID0gaW5kZXhcIj57e2l0ZW19fSB7e2l9fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgICAgICA8aDI+W25nU3dpdGNoXTwvaDI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBFbnRlciByZWQsIGJsdWUsIG9yIGdyZWVuXG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjY29sb3IgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgW25nU3dpdGNoXT1cImNvbG9yLnZhbHVlXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCIncmVkJ1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJlZFwiPkNvbG9yIGlzIFJlZDwvc3Bhbj48L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2JsdWUnXCI+PHNwYW4gc3R5bGU9XCJjb2xvcjogYmx1ZVwiPkNvbG9yIGlzIEJsdWU8L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidncmVlbidcIj48c3BhbiBzdHlsZT1cImNvbG9yOiBncmVlblwiPkNvbG9yIGlzIEdyZWVuPC9zcGFuPjwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgbmdTd2l0Y2hEZWZhdWx0PjxzcGFuIHN0eWxlPVwiY29sb3I6IHBpbmtcIj5JbnZhbGlkIG9yIE51bGwgZW50cnkhPC9zcGFuPjwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgICAgIDxoMj5DdXN0b20gRGlyZWN0aXZlOiAqbXlVbmxlc3M8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgRW50ZXIgdHJ1ZSBvciBmYWxzZVxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2NvbmRpdGlvbiAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbXlVbmxlc3M9XCJjb25kaXRpb24udmFsdWUgIT0gJ2ZhbHNlJ1wiPlxuICAgICAgICA8YnI+XG4gICAgICAgIE9ubHkgc2hvd24gaWYgJ2ZhbHNlJyB3YXMgZW50ZXJlZFxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1VubGVzc0RpcmVjdGl2ZV1cblxuXG59KVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJhbERpcmVjdGl2ZXMge1xuXG4gICAgbGlzdCA9IFsnTXVzY2xlTWlsaycsICdQcmUtV29ya291dCcsICdEb251dHMnXTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
