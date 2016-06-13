System.register(['angular2/core', 'angular2/router', "./comp1-main.component", "./comp2-sub.component"], function(exports_1, context_1) {
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
    var core_1, router_1, comp1_main_component_1, comp2_sub_component_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (comp1_main_component_1_1) {
                comp1_main_component_1 = comp1_main_component_1_1;
            },
            function (comp2_sub_component_1_1) {
                comp2_sub_component_1 = comp2_sub_component_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_routeParams) {
                    this._routeParams = _routeParams;
                }
                Component1Component.prototype.ngOnInit = function () {
                    this.source = this._routeParams.get('source');
                    this.optional = this._routeParams.get('optional');
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'my-component-1',
                        template: "\n        \n    <h1>c1</h1>\n    <div>\n        Source was {{source}}\n    </div>\n    <div>\n        Optional: {{optional}}\n</div>\n<div><a [routerLink]=\"['Component1Main']\">Main</a></div>\n<div><a [routerLink]=\"['Component1Sub']\">Sub</a></div>\n<router-outlet></router-outlet>\n    \n    \n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Component1Main', component: comp1_main_component_1.Comp1MainComponent, useAsDefault: true },
                        { path: '/subroute', name: 'Component1Sub', component: comp2_sub_component_1.Comp2SubComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQUlJLDZCQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7Z0JBQUcsQ0FBQztnQkFFakQsc0NBQVEsR0FBUjtvQkFDRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUVyRCxDQUFDO2dCQWpDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSwrU0FjVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ3RGLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBQztxQkFDM0UsQ0FBQzs7dUNBQUE7Z0JBY0YsMEJBQUM7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELHFEQWFDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50MS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlUGFyYW1zLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0NvbXAxTWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcDEtbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29tcDJTdWJDb21wb25lbnR9IGZyb20gXCIuL2NvbXAyLXN1Yi5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQtMScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgXG4gICAgPGgxPmMxPC9oMT5cbiAgICA8ZGl2PlxuICAgICAgICBTb3VyY2Ugd2FzIHt7c291cmNlfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICBPcHRpb25hbDoge3tvcHRpb25hbH19XG48L2Rpdj5cbjxkaXY+PGEgW3JvdXRlckxpbmtdPVwiWydDb21wb25lbnQxTWFpbiddXCI+TWFpbjwvYT48L2Rpdj5cbjxkaXY+PGEgW3JvdXRlckxpbmtdPVwiWydDb21wb25lbnQxU3ViJ11cIj5TdWI8L2E+PC9kaXY+XG48cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgXG4gICAgXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDogJy8nLCBuYW1lOiAnQ29tcG9uZW50MU1haW4nLCBjb21wb25lbnQ6IENvbXAxTWFpbkNvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAgICB7cGF0aDogJy9zdWJyb3V0ZScsIG5hbWU6ICdDb21wb25lbnQxU3ViJywgY29tcG9uZW50OiBDb21wMlN1YkNvbXBvbmVudH1cbl0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgc291cmNlOiBzdHJpbmc7XG4gICAgb3B0aW9uYWw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlUGFyYW1zOiBSb3V0ZVBhcmFtcykge31cblxuICAgIG5nT25Jbml0KCk6YW55e1xuICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdzb3VyY2UnKTtcbiAgICAgICB0aGlzLm9wdGlvbmFsID0gdGhpcy5fcm91dGVQYXJhbXMuZ2V0KCdvcHRpb25hbCcpO1xuXG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
