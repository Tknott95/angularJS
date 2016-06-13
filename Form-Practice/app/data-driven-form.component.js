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
                        'password': ['', common_1.Validators.required],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZHJpdmVuLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUNBO2dCQUtJLGlDQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBSDdDLFNBQUksR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUdnQixDQUFDO2dCQUVqRCwwQ0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUVsQyxDQUFDO2dCQUVELDBDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzt3QkFDbEMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNsQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3JDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUMvQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFoREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZ0JBQWdCO3dCQUMxQixRQUFRLEVBQUUsK3VDQXlCVDtxQkFDSixDQUFDOzsyQ0FBQTtnQkFzQkYsOEJBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELDZEQW9CQyxDQUFBIiwiZmlsZSI6ImRhdGEtZHJpdmVuLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSBcImFuZ3VsYXIyL2NvbW1vblwiO1xuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZGF0YS1kcml2ZW4nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoMj5TaWduLXVwIGZvcm08L2gyPlxuICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1haWxcIj5NYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmNvbnRyb2xzWydlbWFpbCddXCIgdHlwZT1cInRleHRcIiBpZD1cIm1haWxcIiAjbWFpbD1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiICpuZ0lmPVwiIW1haWwudmFsaWRcIj5JbnZhbGlkITwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1sncGFzc3dvcmQnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiICNwYXNzd29yZD1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiICpuZ0lmPVwiIXBhc3N3b3JkLnZhbGlkXCI+SW52YWxpZCE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ11cIiB0eXBlPVwidGV4dFwiIGlkPVwiY29uZmlybS1wYXNzd29yZFwiICNjb25maXJtUGFzc3dvcmQ9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JcIiAqbmdJZj1cIiFjb25maXJtUGFzc3dvcmQudmFsaWRcIj5JbnZhbGlkITwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGgyPllvdSBzdWJtaXR0ZWQ8L2gyPlxuICAgICAgICA8ZGl2Pk1haWw6IHt7dXNlci5lbWFpbH19PC9kaXY+XG4gICAgICAgIDxkaXY+UGFzc3dvcmQ6IHt7dXNlci5wYXNzd29yZH19PC9kaXY+XG5cblxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXRhRHJpdmVuRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbXlGb3JtOiBDb250cm9sR3JvdXA7IC8vdHlwZSBvZiBjb250cm9sIGdyb3VwXG4gICAgdXNlciA9IHttYWlsOiAnJywgcGFzc3dvcmQ6ICcnfTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gICAgb25TdWJtaXQoZm9ybSl7XG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMubXlGb3JtLnZhbHVlO1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnl7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgJ2VtYWlsJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
