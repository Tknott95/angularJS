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
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_router) {
                    this._router = _router;
                }
                Component1Component.prototype.onNavigate = function () {
                    this._router.navigate(['Component2']);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'my-component-1',
                        template: "\n        \n      \n    \n    <h1>c1</h1>\n    <button (click)=\"onNavigate()\">Take me to Component 2</button>\n    \n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQ0ksNkJBQW9CLE9BQWU7b0JBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtnQkFBRyxDQUFDO2dCQUV2Qyx3Q0FBVSxHQUFWO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFqQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsNkhBT1Q7cUJBQ0osQ0FBQzs7dUNBQUE7Z0JBUUYsMEJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELHFEQU1DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50MS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQtMScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgXG4gICAgICBcbiAgICBcbiAgICA8aDE+YzE8L2gxPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTmF2aWdhdGUoKVwiPlRha2UgbWUgdG8gQ29tcG9uZW50IDI8L2J1dHRvbj5cbiAgICBcbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgICBvbk5hdmlnYXRlKCl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0NvbXBvbmVudDInXSk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
