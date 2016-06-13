System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Component2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_router) {
                    this._router = _router;
                }
                Component2Component.prototype.onNavigate = function () {
                    this._router.navigate(['Component1', { source: 'Component 2' }]);
                };
                Component2Component.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
                    return alert('Sure?');
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'my-component-2',
                        template: "\n    \n       <h1>c2</h1>\n       <button (click)=\"onNavigate()\">Take me to Component 1</button>\n    \n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQ1EsNkJBQW9CLE9BQWU7b0JBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtnQkFBRyxDQUFDO2dCQUV2Qyx3Q0FBVSxHQUFWO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkFFTCxpREFBbUIsR0FBbkIsVUFBb0IsZUFBb0MsRUFBRSxlQUFvQztvQkFDMUYsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDekIsQ0FBQztnQkFuQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsaUhBS1Q7cUJBQ0osQ0FBQzs7dUNBQUE7Z0JBWUYsMEJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELHFEQVVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50Mi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgQ2FuRGVhY3RpdmF0ZSwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktY29tcG9uZW50LTInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXG4gICAgICAgPGgxPmMyPC9oMT5cbiAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbk5hdmlnYXRlKClcIj5UYWtlIG1lIHRvIENvbXBvbmVudCAxPC9idXR0b24+XG4gICAgXG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDJDb21wb25lbnQgaW1wbGVtZW50cyBDYW5EZWFjdGl2YXRle1xuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICAgICAgICBvbk5hdmlnYXRlKCl7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDb21wb25lbnQxJywge3NvdXJjZTogJ0NvbXBvbmVudCAyJ31dKTtcbiAgICAgICAgfVxuXG4gICAgcm91dGVyQ2FuRGVhY3RpdmF0ZShuZXh0SW5zdHJ1Y3Rpb246Q29tcG9uZW50SW5zdHJ1Y3Rpb24sIHByZXZJbnN0cnVjdGlvbjpDb21wb25lbnRJbnN0cnVjdGlvbik6YW55e1xuICAgICAgICByZXR1cm4gYWxlcnQoJ1N1cmU/JylcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
