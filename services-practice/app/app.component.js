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
                        template: "\n            <h1>First Component</h1>\n            <component-1></component-1>\n            <br>\n            <h1>Second Component</h1>\n            <component-2></component-2>\n\n\n        ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFmRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsaU1BUUw7d0JBQ0wsVUFBVSxFQUFFLENBQUMsMENBQW1CLEVBQUUsMENBQW1CLENBQUM7cUJBQ3pELENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbXBvbmVudDFDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudDEuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbXBvbmVudDJDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudDIuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgPGgxPkZpcnN0IENvbXBvbmVudDwvaDE+XG4gICAgICAgICAgICA8Y29tcG9uZW50LTE+PC9jb21wb25lbnQtMT5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxoMT5TZWNvbmQgQ29tcG9uZW50PC9oMT5cbiAgICAgICAgICAgIDxjb21wb25lbnQtMj48L2NvbXBvbmVudC0yPlxuXG5cbiAgICAgICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbQ29tcG9uZW50MUNvbXBvbmVudCwgQ29tcG9uZW50MkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
