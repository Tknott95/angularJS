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
                    this.list = ['MuscleMilk', 'Pre-Workout', 'Donuts'];
                }
                StructuralDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-structural-directives',
                        template: "\n    <section class=\"directive\">\n        <h2>*ngIf</h2>\n        <div>\n            Enter a number higher than 10\n            <br>\n            <input type=\"text\" #number (keyup)=\"0\">\n        </div>\n        <div *ngIf=\"number.value > 10 \">\n        <h1>ngIf is pretty gangster :)</h1>\n            Number is greater than 10\n        </div>\n    </section>\n    <section class=\"directive\">\n        <h2>*ngFor</h2>\n        <div>\n            <ul>\n                <li *ngFor=\"#item of list, #i = index\">{{item}} {{i}}</li>\n            </ul>\n        </div>\n\n    </section>\n    <section class=\"directive\">\n        <h2>[ngSwitch]</h2>\n        <div>\n            Enter red, blue, or green\n            <br>\n            <input type=\"text\" #color (keyup)=\"0\">\n        </div>\n        <div [ngSwitch]=\"color.value\">\n            <template [ngSwitchWhen]=\"'red'\"><span style=\"color: red\">Color is Red</span></template>\n            <template [ngSwitchWhen]=\"'blue'\"><span style=\"color: blue\">Color is Blue</span></template>\n            <template [ngSwitchWhen]=\"'green'\"><span style=\"color: green\">Color is Green</span></template>\n            <template [ngSwitchDefault><span style=\"color: pink\">Don't now that color</span></template>\n        </div>\n    </section>\n\n\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructuralDirectives);
                return StructuralDirectives;
            }());
            exports_1("StructuralDirectives", StructuralDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyYWwtZGlyZWN0aXZlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnREE7Z0JBQUE7b0JBRUksU0FBSSxHQUFHLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFbkQsQ0FBQztnQkFqREQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxRQUFRLEVBQUUsd3lDQXNDVDtxQkFHSixDQUFDOzt3Q0FBQTtnQkFNRiwyQkFBQztZQUFELENBSkEsQUFJQyxJQUFBO1lBSkQsdURBSUMsQ0FBQSIsImZpbGUiOiJzdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIaWdobGlnaHREaXJlY3RpdmV9IGZyb20gXCIuL2hpZ2hsaWdodC5kaXJlY3RpdmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1zdHJ1Y3R1cmFsLWRpcmVjdGl2ZXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cbiAgICAgICAgPGgyPipuZ0lmPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEVudGVyIGEgbnVtYmVyIGhpZ2hlciB0aGFuIDEwXG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtYmVyIChrZXl1cCk9XCIwXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ0lmPVwibnVtYmVyLnZhbHVlID4gMTAgXCI+XG4gICAgICAgIDxoMT5uZ0lmIGlzIHByZXR0eSBnYW5nc3RlciA6KTwvaDE+XG4gICAgICAgICAgICBOdW1iZXIgaXMgZ3JlYXRlciB0aGFuIDEwXG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxuICAgICAgICA8aDI+Km5nRm9yPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwiI2l0ZW0gb2YgbGlzdCwgI2kgPSBpbmRleFwiPnt7aXRlbX19IHt7aX19PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9zZWN0aW9uPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XG4gICAgICAgIDxoMj5bbmdTd2l0Y2hdPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEVudGVyIHJlZCwgYmx1ZSwgb3IgZ3JlZW5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNjb2xvciAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBbbmdTd2l0Y2hdPVwiY29sb3IudmFsdWVcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidyZWQnXCI+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkXCI+Q29sb3IgaXMgUmVkPC9zcGFuPjwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInYmx1ZSdcIj48c3BhbiBzdHlsZT1cImNvbG9yOiBibHVlXCI+Q29sb3IgaXMgQmx1ZTwvc3Bhbj48L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIFtuZ1N3aXRjaFdoZW5dPVwiJ2dyZWVuJ1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IGdyZWVuXCI+Q29sb3IgaXMgR3JlZW48L3NwYW4+PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hEZWZhdWx0PjxzcGFuIHN0eWxlPVwiY29sb3I6IHBpbmtcIj5Eb24ndCBub3cgdGhhdCBjb2xvcjwvc3Bhbj48L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIGAsXG5cblxufSlcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyYWxEaXJlY3RpdmVzIHtcblxuICAgIGxpc3QgPSBbJ011c2NsZU1pbGsnLCAnUHJlLVdvcmtvdXQnLCAnRG9udXRzJ107XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
