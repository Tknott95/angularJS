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
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService() {
                    this._data = ['Summer', 'Winter', 'Warm', 'Cold'];
                }
                DataService.prototype.getRandomString = function () {
                    var rndNum = Math.floor(Math.random() * this._data.length);
                    return this._data[rndNum];
                };
                DataService.prototype.insert = function (value) {
                    this._data.push(value);
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO29CQUNZLFVBQUssR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQWF6RCxDQUFDO2dCQVhHLHFDQUFlLEdBQWY7b0JBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTlCLENBQUM7Z0JBRUQsNEJBQU0sR0FBTixVQUFPLEtBQWE7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQWJMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQWdCYixrQkFBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQscUNBY0MsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfZGF0YSA9IFsnU3VtbWVyJywgJ1dpbnRlcicsICdXYXJtJywgJ0NvbGQnXTtcblxuICAgIGdldFJhbmRvbVN0cmluZygpIHtcbiAgICAgICAgbGV0IHJuZE51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX2RhdGEubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFbcm5kTnVtXTtcblxuICAgIH1cblxuICAgIGluc2VydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2RhdGEucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
