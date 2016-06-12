System.register(['angular2/core', './services/logging.service'], function(exports_1, context_1) {
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
    var core_1, logging_service_1;
    var Component2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_loggingService) {
                    this._loggingService = _loggingService;
                }
                Component2Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n\n     <input type=\"text\" #message>\n     <button (click)=\"onLog(message.value)\">Send</button>\n\n    ",
                        providers: [logging_service_1.LoggingService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBQ0ksNkJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7Z0JBQUcsQ0FBQztnQkFHdkQsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBRWpCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV0QyxDQUFDO2dCQXBCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsOEdBS1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztxQkFFOUIsQ0FBQzs7dUNBQUE7Z0JBWUYsMEJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELHFEQVVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50Mi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2xvZ2dpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LTInLFxuICAgIHRlbXBsYXRlOiBgXG5cbiAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI21lc3NhZ2U+XG4gICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuXG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtMb2dnaW5nU2VydmljZV1cblxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDJDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2dpbmdTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSkge31cblxuXG4gICAgb25Mb2cobWVzc2FnZTogc3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xuXG4gICAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
