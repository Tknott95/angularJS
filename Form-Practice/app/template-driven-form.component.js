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
                    this.user = { mail: '', password: '' };
                }
                TemplateDrivenFormComponent.prototype.onSubmit = function (form) {
                    this.user.mail = form.value['email'];
                    this.user.password = form.controls['password'].value;
                };
                TemplateDrivenFormComponent = __decorate([
                    core_1.Component({
                        selector: 'my-template-driven',
                        template: "\n        <h2>Sign-up form</h2>\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n            <div>\n                <label for=\"mail\">Mail</label>\n                <input ngControl=\"email\" type=\"text\" id=\"mail\" required #email=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!email.valid\">Invalid!</span>\n            </div>\n            <div>\n                <label for=\"password\">Password</label>\n                <input ngControl=\"password\" type=\"text\" id=\"password\" required #password=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!password.valid\">Invalid!</span>\n            </div>\n             <div>\n                <label for=\"confirm-password\">Confirm Password</label>\n                <input ngControl=\"confirm-password\" type=\"text\" id=\"confirm-password\" required #passwordConfirm=\"ngForm\">\n                <span class=\"validation-error\" *ngIf=\"!passwordConfirm.valid\">Invalid!</span>\n            </div>\n            <button type=\"submit\" [disabled]=\"!f.valid || password.value !== passwordConfirm.value\">Submit</button>\n        </form>\n        <h2>You submitted</h2>\n        <div>Mail: {{user.mail}}</div>\n        <div>Password: {{user.password}}</div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TemplateDrivenFormComponent);
                return TemplateDrivenFormComponent;
            }());
            exports_1("TemplateDrivenFormComponent", TemplateDrivenFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRyaXZlbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdDQTtnQkFBQTtvQkFFSSxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFPcEMsQ0FBQztnQkFMRyw4Q0FBUSxHQUFSLFVBQVMsSUFBSTtvQkFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDekQsQ0FBQztnQkFyQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsMnZDQXlCVDtxQkFDSixDQUFDOzsrQ0FBQTtnQkFXRixrQ0FBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQscUVBU0MsQ0FBQSIsImZpbGUiOiJ0ZW1wbGF0ZS1kcml2ZW4tZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktdGVtcGxhdGUtZHJpdmVuJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDI+U2lnbi11cCBmb3JtPC9oMj5cbiAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYpXCIgI2Y9XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1haWxcIj5NYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIGlkPVwibWFpbFwiIHJlcXVpcmVkICNlbWFpbD1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiICpuZ0lmPVwiIWVtYWlsLnZhbGlkXCI+SW52YWxpZCE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwYXNzd29yZFwiIHJlcXVpcmVkICNwYXNzd29yZD1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsaWRhdGlvbi1lcnJvclwiICpuZ0lmPVwiIXBhc3N3b3JkLnZhbGlkXCI+SW52YWxpZCE8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb25maXJtLXBhc3N3b3JkXCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5nQ29udHJvbD1cImNvbmZpcm0tcGFzc3dvcmRcIiB0eXBlPVwidGV4dFwiIGlkPVwiY29uZmlybS1wYXNzd29yZFwiIHJlcXVpcmVkICNwYXNzd29yZENvbmZpcm09XCJuZ0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbGlkYXRpb24tZXJyb3JcIiAqbmdJZj1cIiFwYXNzd29yZENvbmZpcm0udmFsaWRcIj5JbnZhbGlkITwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgW2Rpc2FibGVkXT1cIiFmLnZhbGlkIHx8IHBhc3N3b3JkLnZhbHVlICE9PSBwYXNzd29yZENvbmZpcm0udmFsdWVcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8aDI+WW91IHN1Ym1pdHRlZDwvaDI+XG4gICAgICAgIDxkaXY+TWFpbDoge3t1c2VyLm1haWx9fTwvZGl2PlxuICAgICAgICA8ZGl2PlBhc3N3b3JkOiB7e3VzZXIucGFzc3dvcmR9fTwvZGl2PlxuXG5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVEcml2ZW5Gb3JtQ29tcG9uZW50IHtcblxuICAgIHVzZXIgPSB7bWFpbDogJycsIHBhc3N3b3JkOiAnJ307XG5cbiAgICBvblN1Ym1pdChmb3JtKXtcbiAgICAgICAgdGhpcy51c2VyLm1haWwgPSBmb3JtLnZhbHVlWydlbWFpbCddO1xuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBmb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnZhbHVlO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
