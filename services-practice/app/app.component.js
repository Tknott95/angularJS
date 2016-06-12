System.register(['angular2/core', "./component1.component", "./component2.component"], function(exports_1, context_1) {
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
    var core_1, component1_component_1, component2_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (component1_component_1_1) {
                component1_component_1 = component1_component_1_1;
            },
            function (component2_component_1_1) {
                component2_component_1 = component2_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n            <h1 class=\"red\">First Component</h1>\n            <component-1></component-1>\n            <br>\n            <h1 class=\"red\">Second Component</h1>\n            <component-2></component-2>\n\n\n        ",
                        directives: [component1_component_1.Component1Component, component2_component_1.Component2Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNk5BUUw7d0JBQ0wsVUFBVSxFQUFFLENBQUMsMENBQW1CLEVBQUUsMENBQW1CLENBQUM7cUJBQ3pELENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbXBvbmVudDFDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudDEuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbXBvbmVudDJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudDIuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgPGgxIGNsYXNzPVwicmVkXCI+Rmlyc3QgQ29tcG9uZW50PC9oMT5cbiAgICAgICAgICAgIDxjb21wb25lbnQtMT48L2NvbXBvbmVudC0xPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwicmVkXCI+U2Vjb25kIENvbXBvbmVudDwvaDE+XG4gICAgICAgICAgICA8Y29tcG9uZW50LTI+PC9jb21wb25lbnQtMj5cblxuXG4gICAgICAgIGAsXG4gICAgZGlyZWN0aXZlczogW0NvbXBvbmVudDFDb21wb25lbnQsIENvbXBvbmVudDJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
