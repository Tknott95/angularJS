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
    var core_1, core_2, core_3;
    var UnlessDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                function UnlessDirective(_templateRef, _viewContainerRef) {
                    this._templateRef = _templateRef;
                    this._viewContainerRef = _viewContainerRef;
                }
                Object.defineProperty(UnlessDirective.prototype, "myUnless", {
                    set: function (condition) {
                        if (!condition) {
                            this._viewContainerRef.createEmbeddedView(this._templateRef);
                        }
                        else {
                            this._viewContainerRef.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                UnlessDirective = __decorate([
                    core_1.Directive({
                        selector: '[myUnless]',
                        inputs: ['myUnless']
                    }), 
                    __metadata('design:paramtypes', [core_2.TemplateRef, core_3.ViewContainerRef])
                ], UnlessDirective);
                return UnlessDirective;
            }());
            exports_1("UnlessDirective", UnlessDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubGVzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUVJLHlCQUFvQixZQUF5QixFQUFVLGlCQUFtQztvQkFBdEUsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtnQkFBRyxDQUFDO2dCQUU5RixzQkFBSSxxQ0FBUTt5QkFBWixVQUFhLFNBQWtCO3dCQUMzQixFQUFFLENBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7NEJBQ1osSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDakUsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDSixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ25DLENBQUM7b0JBQ0wsQ0FBQzs7O21CQUFBO2dCQWZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztxQkFDdkIsQ0FBQzs7bUNBQUE7Z0JBYUYsc0JBQUM7WUFBRCxDQVhBLEFBV0MsSUFBQTtZQVhELDZDQVdDLENBQUEiLCJmaWxlIjoidW5sZXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7VGVtcGxhdGVSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXG5pbXBvcnQge1ZpZXdDb250YWluZXJSZWZ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW215VW5sZXNzXScsXG4gICAgaW5wdXRzOiBbJ215VW5sZXNzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBVbmxlc3NEaXJlY3RpdmUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmLCBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7fVxuXG4gICAgc2V0IG15VW5sZXNzKGNvbmRpdGlvbjogYm9vbGVhbil7XG4gICAgICAgIGlmKCFjb25kaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlUmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
