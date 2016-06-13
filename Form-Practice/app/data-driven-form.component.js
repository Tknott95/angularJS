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
                    console.log(this.myForm);
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
                        template: "\n        <h2>Sign-up form</h2>\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <div>\n                <label for=\"mail\">Mail</label>\n                <input [ngFormControl]=\"myForm.controls['email']\" type=\"text\" id=\"mail\">\n                <span class=\"validation-error\">Invalid!</span>\n            </div>\n            <div>\n                <label for=\"password\">Password</label>\n                <input [ngFormControl]=\"myForm.controls['password']\" type=\"text\" id=\"password\">\n                <span class=\"validation-error\" >Invalid!</span>\n            </div>\n             <div>\n                <label for=\"confirm-password\">Confirm Password</label>\n                <input [ngFormControl]=\"myForm.controls['confirmPassword']\" type=\"text\" id=\"confirm-password\">\n                <span class=\"validation-error\" >Invalid!</span>\n            </div>\n            <button type=\"submit\">Submit</button>\n        </form>\n        <h2>You submitted</h2>\n        <div>Mail: {{user.mail}}</div>\n        <div>Password: {{user.password}}</div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], DataDrivenFormComponent);
                return DataDrivenFormComponent;
            }());
            exports_1("DataDrivenFormComponent", DataDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEtZHJpdmVuLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUNBO2dCQUtJLGlDQUFvQixZQUF5QjtvQkFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBSDdDLFNBQUksR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDO2dCQUdnQixDQUFDO2dCQUVqRCwwQ0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFN0IsQ0FBQztnQkFFRCwwQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7d0JBQ2xDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUNyQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDL0MsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBaERMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLDZsQ0F5QlQ7cUJBQ0osQ0FBQzs7MkNBQUE7Z0JBc0JGLDhCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCw2REFvQkMsQ0FBQSIsImZpbGUiOiJkYXRhLWRyaXZlbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gXCJhbmd1bGFyMi9jb21tb25cIjtcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWRhdGEtZHJpdmVuJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDI+U2lnbi11cCBmb3JtPC9oMj5cbiAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYWlsXCI+TWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snZW1haWwnXVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtYWlsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yXCI+SW52YWxpZCE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ11cIiB0eXBlPVwidGV4dFwiIGlkPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JcIiA+SW52YWxpZCE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snY29uZmlybVBhc3N3b3JkJ11cIiB0eXBlPVwidGV4dFwiIGlkPVwiY29uZmlybS1wYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiID5JbnZhbGlkITwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGgyPllvdSBzdWJtaXR0ZWQ8L2gyPlxuICAgICAgICA8ZGl2Pk1haWw6IHt7dXNlci5tYWlsfX08L2Rpdj5cbiAgICAgICAgPGRpdj5QYXNzd29yZDoge3t1c2VyLnBhc3N3b3JkfX08L2Rpdj5cblxuXG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIERhdGFEcml2ZW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBteUZvcm06IENvbnRyb2xHcm91cDsgLy90eXBlIG9mIGNvbnRyb2wgZ3JvdXBcbiAgICB1c2VyID0ge21haWw6ICcnLCBwYXNzd29yZDogJyd9O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgICBvblN1Ym1pdChmb3JtKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUZvcm0pO1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnl7XG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgJ2VtYWlsJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgICdwYXNzd29yZCc6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICAgICAgICAnY29uZmlybVBhc3N3b3JkJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
