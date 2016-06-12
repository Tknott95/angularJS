System.register(['angular2/core', "./services/logging.service", "./services/calculator.service", "./services/data.service"], function(exports_1, context_1) {
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
    var core_1, logging_service_1, calculator_service_1, data_service_1;
    var Component2Component;
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
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            Component2Component = (function () {
                function Component2Component(_loggingService, _calculatorService, _dataService) {
                    this._loggingService = _loggingService;
                    this._calculatorService = _calculatorService;
                    this._dataService = _dataService;
                }
                Component2Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component2Component.prototype.onMultiply = function (num1, num2) {
                    this.result = '' + this._calculatorService.multiply(+num1, +num2);
                };
                Component2Component.prototype.onAdd = function (num1, num2) {
                    this.result = '' + this._calculatorService.add(+num1, +num2);
                };
                Component2Component.prototype.onGetData = function () {
                    this.data = this._dataService.getRandomString();
                };
                Component2Component.prototype.onInsert = function (value) {
                    this._dataService.insert(value);
                };
                Component2Component = __decorate([
                    core_1.Component({
                        selector: 'component-2',
                        template: "\n           <div>\n                <h1>Logging Service</h1>\n                <input type=\"text\" #message>\n                <button (click)=\"onLog(message.value)\">Send</button>\n          </div>\n          <div>\n            <h1>Calculator Service</h1>\n            <p>Add or multiply these two numbers:</p>\n            <input type=\"text\" #num1>\n            <input type=\"text\" #num2>\n            <button (click)=\"onMultiply(num1.value, num2.value)\">Multiply</button>\n            <button (click)=\"onAdd(num1.value, num2.value)\">Add</button>\n            <br>\n            <p>Result: {{result}}</p>\n          </div>\n          <div>\n            <h1>Data Service</h1>\n            <button (click)=\"onGetData()\">Get some data</button>\n            <p>Data: {{data}}</p>\n            <input type=\"text\" #newData>\n            <button (click)=\"onInsert(newData.value)\">Insert new Data</button>\n          </div>\n    ",
                        providers: [logging_service_1.LoggingService, calculator_service_1.CalculatorService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService, calculator_service_1.CalculatorService, data_service_1.DataService])
                ], Component2Component);
                return Component2Component;
            }());
            exports_1("Component2Component", Component2Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUNBO2dCQU1JLDZCQUFvQixlQUErQixFQUFVLGtCQUFxQyxFQUFVLFlBQXlCO29CQUFqSCxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUd6SSxtQ0FBSyxHQUFMLFVBQU0sT0FBZTtvQkFFakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXRDLENBQUM7Z0JBRUQsd0NBQVUsR0FBVixVQUFXLElBQVksRUFBRSxJQUFZO29CQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7Z0JBRUQsbUNBQUssR0FBTCxVQUFNLElBQVksRUFBRSxJQUFZO29CQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9ELENBQUM7Z0JBRUQsdUNBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsc0NBQVEsR0FBUixVQUFTLEtBQWE7b0JBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQTNETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUseTZCQXVCVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxFQUFFLHNDQUFpQixDQUFDO3FCQUVqRCxDQUFDOzt1Q0FBQTtnQkFrQ0YsMEJBQUM7WUFBRCxDQWhDQSxBQWdDQyxJQUFBO1lBaENELHFEQWdDQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudDIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NhbGN1bGF0b3JTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9jYWxjdWxhdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7RGF0YVNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC0yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5Mb2dnaW5nIFNlcnZpY2U8L2gxPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNtZXNzYWdlPlxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uTG9nKG1lc3NhZ2UudmFsdWUpXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+Q2FsY3VsYXRvciBTZXJ2aWNlPC9oMT5cbiAgICAgICAgICAgIDxwPkFkZCBvciBtdWx0aXBseSB0aGVzZSB0d28gbnVtYmVyczo8L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtMT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW0yPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25NdWx0aXBseShudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPk11bHRpcGx5PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkFkZChudW0xLnZhbHVlLCBudW0yLnZhbHVlKVwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPHA+UmVzdWx0OiB7e3Jlc3VsdH19PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+RGF0YSBTZXJ2aWNlPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uR2V0RGF0YSgpXCI+R2V0IHNvbWUgZGF0YTwvYnV0dG9uPlxuICAgICAgICAgICAgPHA+RGF0YToge3tkYXRhfX08L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmV3RGF0YT5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uSW5zZXJ0KG5ld0RhdGEudmFsdWUpXCI+SW5zZXJ0IG5ldyBEYXRhPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtMb2dnaW5nU2VydmljZSwgQ2FsY3VsYXRvclNlcnZpY2VdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQyQ29tcG9uZW50IHtcblxuICAgIHJlc3VsdDogc3RyaW5nO1xuICAgIGRhdGE6IHN0cmluZztcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlLCBwcml2YXRlIF9jYWxjdWxhdG9yU2VydmljZTogQ2FsY3VsYXRvclNlcnZpY2UsIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge31cblxuXG4gICAgb25Mb2cobWVzc2FnZTogc3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xuXG4gICAgfVxuXG4gICAgb25NdWx0aXBseShudW0xOiBzdHJpbmcsIG51bTI6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlc3VsdCA9ICcnK3RoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLm11bHRpcGx5KCtudW0xLCArbnVtMik7XG4gICAgfVxuXG4gICAgb25BZGQobnVtMTogc3RyaW5nLCBudW0yOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLnJlc3VsdCA9ICcnK3RoaXMuX2NhbGN1bGF0b3JTZXJ2aWNlLmFkZCgrbnVtMSwgK251bTIpO1xuICAgIH1cblxuICAgIG9uR2V0RGF0YSgpe1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLl9kYXRhU2VydmljZS5nZXRSYW5kb21TdHJpbmcoKTtcbiAgICB9XG5cbiAgICBvbkluc2VydCh2YWx1ZTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuaW5zZXJ0KHZhbHVlKTtcbiAgICB9XG5cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
