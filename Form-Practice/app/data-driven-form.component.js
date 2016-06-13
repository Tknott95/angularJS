System.register(['angular2/core', "angular2/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var DataDrivenFormComponent;
    function hasNumbers(control) {
        if (!control.value.match('\\d+')) {
            return { noNumbers: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DataDrivenFormComponent = (function () {
                function DataDrivenFormComponent(_formBuilder) {
                    this._formBuilder = _formBuilder;
                    this.user = { mail: '', password: '' };
                }
                DataDrivenFormComponent.prototype.onSubmit = function (form) {
                    this.user = this.myForm.value;
                };
                DataDrivenFormComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'email': ['', common_1.Validators.required],
                        'password': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                hasNumbers //makes sure a number is added to Password
                            ])],
                        'confirmPassword': ['', common_1.Validators.required]
                    });
                };
                DataDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-data-driven',
                        template: "\n        <h2>Sign-up form</h2>\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <div>\n                <label for=\"mail\">Mail</label>\n                <input [ngFormControl]=\"myForm.controls['email']\" type=\"text\" id=\"mail\" #mail=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!mail.valid\">Invalid!</span>\n            </div>\n            <div>\n                <label for=\"password\">Password</label>\n                <input [ngFormControl]=\"myForm.controls['password']\" type=\"text\" id=\"password\" #password=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!password.valid\">Invalid!</span>\n            </div>\n             <div>\n                <label for=\"confirm-password\">Confirm Password</label>\n                <input [ngFormControl]=\"myForm.controls['confirmPassword']\" type=\"text\" id=\"confirm-password\" #confirmPassword=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!confirmPassword.valid\">Invalid!</span>\n            </div>\n            <button type=\"submit\">Submit</button>\n        </form>\n        <h2>You submitted</h2>\n        <div>Mail: {{user.email}}</div>\n        <div>Password: {{user.password}}</div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DataDrivenFormComponent);
                return DataDrivenFormComponent;
            }());
            exports_1("DataDrivenFormComponent", DataDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZHJpdmVuLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBOERBLG9CQUFvQixPQUFnQjtRQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUE7UUFDNUIsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7WUE5QkQ7Z0JBS0ksaUNBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFIN0MsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFDLENBQUM7Z0JBR2dCLENBQUM7Z0JBRWpELDBDQUFRLEdBQVIsVUFBUyxJQUFJO29CQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRWxDLENBQUM7Z0JBRUQsMENBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNsQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ2xDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDaEMsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQixVQUFVLENBQUMsMENBQTBDOzZCQUN4RCxDQUFDLENBQUM7d0JBQ0gsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7cUJBQy9DLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQW5ETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSwrdUNBeUJUO3FCQUNKLENBQUM7OzJDQUFBO2dCQXlCRiw4QkFBQztZQUFELENBdkJBLEFBdUJDLElBQUE7WUF2QkQsNkRBdUJDLENBQUEiLCJmaWxlIjoiZGF0YS1kcml2ZW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbidcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWRhdGEtZHJpdmVuJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDI+U2lnbi11cCBmb3JtPC9oMj5cbiAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWlsXCI+TWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snZW1haWwnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCIgI21haWw9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JcIiAqbmdJZj1cIiFtYWlsLnZhbGlkXCI+SW52YWxpZCE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cIiB0eXBlPVwidGV4dFwiIGlkPVwicGFzc3dvcmRcIiAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JcIiAqbmdJZj1cIiFwYXNzd29yZC52YWxpZFwiPkludmFsaWQhPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29uZmlybS1wYXNzd29yZFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2NvbmZpcm1QYXNzd29yZCddXCIgdHlwZT1cInRleHRcIiBpZD1cImNvbmZpcm0tcGFzc3dvcmRcIiAjY29uZmlybVBhc3N3b3JkPVwibmdGb3JtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCIgKm5nSWY9XCIhY29uZmlybVBhc3N3b3JkLnZhbGlkXCI+SW52YWxpZCE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxoMj5Zb3Ugc3VibWl0dGVkPC9oMj5cbiAgICAgICAgPGRpdj5NYWlsOiB7e3VzZXIuZW1haWx9fTwvZGl2PlxuICAgICAgICA8ZGl2PlBhc3N3b3JkOiB7e3VzZXIucGFzc3dvcmR9fTwvZGl2PlxuXG5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0YURyaXZlbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG15Rm9ybTogQ29udHJvbEdyb3VwOyAvL3R5cGUgb2YgY29udHJvbCBncm91cFxuICAgIHVzZXIgPSB7bWFpbDogJycsIHBhc3N3b3JkOiAnJ307XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICAgIG9uU3VibWl0KGZvcm0pe1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLm15Rm9ybS52YWx1ZTtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6YW55e1xuICAgICAgICB0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICAgICdlbWFpbCc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAncGFzc3dvcmQnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBoYXNOdW1iZXJzIC8vbWFrZXMgc3VyZSBhIG51bWJlciBpcyBhZGRlZCB0byBQYXNzd29yZFxuICAgICAgICAgICAgXSldLFxuICAgICAgICAgICAgJ2NvbmZpcm1QYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gaGFzTnVtYmVycyhjb250cm9sOiBDb250cm9sKToge1tzOiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlLm1hdGNoKCdcXFxcZCsnKSkge1xuICAgICAgICByZXR1cm4ge25vTnVtYmVyczogdHJ1ZX1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
