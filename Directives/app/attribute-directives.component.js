System.register(['angular2/core', "./highlight.directive"], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1;
    var AttributeDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            AttributeDirectives = (function () {
                function AttributeDirectives() {
                }
                AttributeDirectives = __decorate([
                    core_1.Component({
                        selector: 'my-attribute-directives',
                        template: "\n        <div [myHighlight]=\"'red'\">\n            Highlight me...\n        </div>\n        <br>\n        <div [myHighlight]=\"'blue'\">\n            v2 Highlight me... v2\n        </div>\n\n\n    ",
                        directives: [highlight_directive_1.HighlightDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttributeDirectives);
                return AttributeDirectives;
            }());
            exports_1("AttributeDirectives", AttributeDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHJpYnV0ZS1kaXJlY3RpdmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFBQTtnQkFFQSxDQUFDO2dCQWxCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSx5QkFBeUI7d0JBQ25DLFFBQVEsRUFBRSx5TUFVVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztxQkFFbkMsQ0FBQzs7dUNBQUE7Z0JBR0YsMEJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHFEQUVDLENBQUEiLCJmaWxlIjoiYXR0cmlidXRlLWRpcmVjdGl2ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIaWdobGlnaHREaXJlY3RpdmV9IGZyb20gXCIuL2hpZ2hsaWdodC5kaXJlY3RpdmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hdHRyaWJ1dGUtZGlyZWN0aXZlcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbXlIaWdobGlnaHRdPVwiJ3JlZCdcIj5cbiAgICAgICAgICAgIEhpZ2hsaWdodCBtZS4uLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8ZGl2IFtteUhpZ2hsaWdodF09XCInYmx1ZSdcIj5cbiAgICAgICAgICAgIHYyIEhpZ2hsaWdodCBtZS4uLiB2MlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbSGlnaGxpZ2h0RGlyZWN0aXZlXVxuXG59KVxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZURpcmVjdGl2ZXMge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
