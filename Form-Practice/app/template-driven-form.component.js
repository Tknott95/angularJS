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
    var TemplateDrivenFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TemplateDrivenFormComponent = (function () {
                function TemplateDrivenFormComponent() {
                }
                TemplateDrivenFormComponent.prototype.onSubmit = function (form) {
                    console.log(form.value);
                };
                TemplateDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-driven',
                        template: "\n        <h2>Sign-up form</h2>\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n            <div>\n                <label for=\"mail\">Mail</label>\n                <input ngControl=\"email\" type=\"text\" id=\"mail\" required>\n            </div>\n            <div>\n                <label for=\"password\">Password</label>\n                <input ngControl=\"password\" type=\"text\" id=\"password\" required>\n            </div>\n             <div>\n                <label for=\"confirm-password\">Confirm Password</label>\n                <input ngControl=\"confirm-password\" type=\"text\" id=\"confirm-password\" required>\n            </div>\n            <button type=\"submit\">Submit</button>\n        </form>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDrivenFormComponent);
                return TemplateDrivenFormComponent;
            }());
            exports_1("TemplateDrivenFormComponent", TemplateDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRyaXZlbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTBCQTtnQkFBQTtnQkFNQSxDQUFDO2dCQUpHLDhDQUFRLEdBQVIsVUFBUyxJQUFJO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQTVCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7d0JBQzlCLFFBQVEsRUFBRSxvdUJBbUJUO3FCQUNKLENBQUM7OytDQUFBO2dCQVFGLGtDQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCxxRUFNQyxDQUFBIiwiZmlsZSI6InRlbXBsYXRlLWRyaXZlbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS10ZW1wbGF0ZS1kcml2ZW4nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMj5TaWduLXVwIGZvcm08L2gyPlxuICAgICAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIiAjZj1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWFpbFwiPk1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJjb25maXJtLXBhc3N3b3JkXCIgdHlwZT1cInRleHRcIiBpZD1cImNvbmZpcm0tcGFzc3dvcmRcIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuXG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRHJpdmVuRm9ybUNvbXBvbmVudCB7XG5cbiAgICBvblN1Ym1pdChmb3JtKXtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
