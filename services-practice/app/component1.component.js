System.register(['angular2/core', "./services/logging.service", "./services/calculator.service"], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1;
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (calculator_service_1_1) {
                calculator_service_1 = calculator_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService, _calculatorService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                }
                Component1Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component1Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2);
                };
                Component1Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n           <div>\n                <h1>Logging Service</h1>\n                <input type=\"text\" #message>\n                <button (click)=\"onLog(message.value)\">Send</button>\n          </div>\n          <div>\n            <h1>Calculator Service</h1>\n            <p>Add or multiply these two numbers:</p>\n            <input type=\"text\" #num1>\n            <input type=\"text\" #num2>\n            <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>\n            <button (click)=\"onAdd(num1.value, num2.value)\">Add</button>\n            <br>\n            <p>Result: {{result}}</p>\n          </div>\n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUdJLDZCQUFvQixlQUErQixFQUFVLGtCQUFxQztvQkFBOUUsb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7Z0JBQUcsQ0FBQztnQkFHdEcsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBRWpCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV0QyxDQUFDO2dCQUVELHdDQUFVLEdBQVYsVUFBVyxJQUFZLEVBQUUsSUFBWTtvQkFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO2dCQUNELG1DQUFLLEdBQUwsVUFBTSxJQUFZLEVBQUUsSUFBWTtvQkFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO2dCQXhDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsOG5CQWdCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLHNDQUFpQixDQUFDO3FCQUVqRCxDQUFDOzt1Q0FBQTtnQkFvQkYsMEJBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELHFEQWtCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NhbGN1bGF0b3JTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9jYWxjdWxhdG9yLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+TG9nZ2luZyBTZXJ2aWNlPC9oMT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkxvZyhtZXNzYWdlLnZhbHVlKVwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkNhbGN1bGF0b3IgU2VydmljZTwvaDE+XG4gICAgICAgICAgICA8cD5BZGQgb3IgbXVsdGlwbHkgdGhlc2UgdHdvIG51bWJlcnM6PC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bTE+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTXVsdGlwbHkobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5NdWx0aXBseTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25BZGQobnVtMS52YWx1ZSwgbnVtMi52YWx1ZSlcIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxwPlJlc3VsdDoge3tyZXN1bHR9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0xvZ2dpbmdTZXJ2aWNlLCBDYWxjdWxhdG9yU2VydmljZV1cblxufSlcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDFDb21wb25lbnQge1xuXG4gICAgcmVzdWx0OiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlLCBwcml2YXRlIF9jYWxjdWxhdG9yU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2UpIHt9XG5cblxuICAgIG9uTG9nKG1lc3NhZ2U6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdTZXJ2aWNlLmxvZyhtZXNzYWdlKTtcblxuICAgIH1cblxuICAgIG9uTXVsdGlwbHkobnVtMTogc3RyaW5nLCBudW0yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSAnJyt0aGlzLl9jYWxjdWxhdG9yU2VydmljZS5tdWx0aXBseSgrbnVtMSwgK251bTIpO1xuICAgIH1cbiAgICBvbkFkZChudW0xOiBzdHJpbmcsIG51bTI6IHN0cmluZyl7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gJycrdGhpcy5fY2FsY3VsYXRvclNlcnZpY2UuYWRkKCtudW0xLCArbnVtMik7XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
