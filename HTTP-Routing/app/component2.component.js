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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBQ1EsNkJBQW9CLE9BQWU7b0JBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtnQkFBRyxDQUFDO2dCQUV2Qyx3Q0FBVSxHQUFWO29CQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLGFBQWEsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkFmVDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxpSEFLVDtxQkFDSixDQUFDOzt1Q0FBQTtnQkFRRiwwQkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQscURBTUMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnQyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWNvbXBvbmVudC0yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFxuICAgICAgIDxoMT5jMjwvaDE+XG4gICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25OYXZpZ2F0ZSgpXCI+VGFrZSBtZSB0byBDb21wb25lbnQgMTwvYnV0dG9uPlxuICAgIFxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQyQ29tcG9uZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgICAgICAgb25OYXZpZ2F0ZSgpe1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnQ29tcG9uZW50MScsIHtzb3VyY2U6ICdDb21wb25lbnQgMid9XSk7XG4gICAgICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
