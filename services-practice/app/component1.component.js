System.register(['angular2/core', "./services/logging.service"], function(exports_1, context_1) {
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
    var Component1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            }],
        execute: function() {
            Component1Component = (function () {
                function Component1Component(_loggingService) {
                    this._loggingService = _loggingService;
                }
                Component1Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Component1Component = __decorate([
                    core_1.Component({
                        selector: 'component-1',
                        template: "\n\n        <input type=\"text\" #message>\n        <button (click)=\"onLog(message.value)\">Send</button>\n\n    ",
                        providers: [logging_service_1.LoggingService]
                    }), 
                    __metadata('design:paramtypes', [logging_service_1.LoggingService])
                ], Component1Component);
                return Component1Component;
            }());
            exports_1("Component1Component", Component1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZUE7Z0JBRUksNkJBQW9CLGVBQStCO29CQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7Z0JBQUcsQ0FBQztnQkFHdkQsbUNBQUssR0FBTCxVQUFNLE9BQWU7b0JBRWpCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV0QyxDQUFDO2dCQXJCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxhQUFhO3dCQUN2QixRQUFRLEVBQUUsb0hBS1Q7d0JBQ0QsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztxQkFFOUIsQ0FBQzs7dUNBQUE7Z0JBWUYsMEJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELHFEQVVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50MS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dnaW5nLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb21wb25lbnQtMScsXG4gICAgdGVtcGxhdGU6IGBcblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbWVzc2FnZT5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25Mb2cobWVzc2FnZS52YWx1ZSlcIj5TZW5kPC9idXR0b24+XG5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0xvZ2dpbmdTZXJ2aWNlXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50MUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTogTG9nZ2luZ1NlcnZpY2UpIHt9XG5cblxuICAgIG9uTG9nKG1lc3NhZ2U6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuX2xvZ2dpbmdTZXJ2aWNlLmxvZyhtZXNzYWdlKTtcblxuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
