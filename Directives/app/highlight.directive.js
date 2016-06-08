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
    var HighlightDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            HighlightDirective = (function () {
                function HighlightDirective(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                }
                //ngOnInit():any{
                //   this._renderer.setElementStyle(this._elRef, 'background-color', this.highlightColor || this._defaultColor);
                //}
                HighlightDirective.prototype.onMouseEnter = function () {
                    this.highlight(this.highlightColor || this._defaultColor);
                };
                HighlightDirective.prototype.onMouseLeave = function () {
                    this.highlight(null);
                };
                HighlightDirective.prototype.highlight = function (color) {
                    this._renderer.setElementStyle(this._elRef, 'background-color', color);
                };
                HighlightDirective = __decorate([
                    core_1.Directive({
                        selector: '[myHighlight]',
                        inputs: ['highlightColor:myHighlight'],
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_2.ElementRef, core_3.Renderer])
                ], HighlightDirective);
                return HighlightDirective;
            }());
            exports_1("HighlightDirective", HighlightDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUlJLDRCQUFvQixNQUFrQixFQUFVLFNBQW1CO29CQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFZO29CQUFVLGNBQVMsR0FBVCxTQUFTLENBQVU7Z0JBQUUsQ0FBQztnQkFFdEUsaUJBQWlCO2dCQUNoQixnSEFBZ0g7Z0JBQ2pILEdBQUc7Z0JBRUgseUNBQVksR0FBWjtvQkFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUVELHlDQUFZLEdBQVo7b0JBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkFFTyxzQ0FBUyxHQUFqQixVQUFrQixLQUFhO29CQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMzRSxDQUFDO2dCQTdCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixNQUFNLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzt3QkFDdEMsSUFBSSxFQUFFOzRCQUNGLGNBQWMsRUFBRSxnQkFBZ0I7NEJBQ2hDLGNBQWMsRUFBRSxnQkFBZ0I7eUJBQ25DO3FCQUNKLENBQUM7O3NDQUFBO2dCQXVCRix5QkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQsbURBcUJDLENBQUEiLCJmaWxlIjoiaGlnaGxpZ2h0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7UmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW215SGlnaGxpZ2h0XScsXG4gICAgaW5wdXRzOiBbJ2hpZ2hsaWdodENvbG9yOm15SGlnaGxpZ2h0J10sXG4gICAgaG9zdDoge1xuICAgICAgICAnKG1vdXNlZW50ZXIpJzogJ29uTW91c2VFbnRlcigpJyxcbiAgICAgICAgJyhtb3VzZWxlYXZlKSc6ICdvbk1vdXNlTGVhdmUoKSdcbiAgICB9XG59KVxuXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0RGlyZWN0aXZlIHtcbiAgICBwcml2YXRlIF9kZWZhdWx0Q29sb3I6ICdncmVlbic7XG4gICAgaGlnaGxpZ2h0Q29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIpe31cblxuICAgIC8vbmdPbkluaXQoKTphbnl7XG4gICAgIC8vICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuX2VsUmVmLCAnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMuaGlnaGxpZ2h0Q29sb3IgfHwgdGhpcy5fZGVmYXVsdENvbG9yKTtcbiAgICAvL31cblxuICAgIG9uTW91c2VFbnRlcigpe1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCh0aGlzLmhpZ2hsaWdodENvbG9yIHx8IHRoaXMuX2RlZmF1bHRDb2xvcik7XG4gICAgfVxuXG4gICAgb25Nb3VzZUxlYXZlKCl7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0KG51bGwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGlnaGxpZ2h0KGNvbG9yOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5fZWxSZWYsICdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3IpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
