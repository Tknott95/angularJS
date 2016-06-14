System.register(['angular2/core', "angular2/http", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            DataService = (function () {
                function DataService(_http) {
                    this._http = _http;
                }
                DataService.prototype.postData = function (data) {
                    //need url targeting and what i am sending
                    var body = JSON.stringify(data); //creation of body to attach to request
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post('https://popping-torch-3510.firebaseio.com/data.json', body, { headers: headers })
                        .map(function (response) { return response.json(); });
                };
                DataService.prototype.getData = function () {
                    return this._http.get('https://popping-torch-3510.firebaseio.com/data.json')
                        .map(function (response) { return response.json(); });
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFDSSxxQkFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO2dCQUFHLENBQUM7Z0JBR25DLDhCQUFRLEdBQVIsVUFBUyxJQUFTO29CQUNkLDBDQUEwQztvQkFDMUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztvQkFDMUUsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztvQkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzt5QkFDbEcsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVELDZCQUFPLEdBQVA7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxDQUFDO3lCQUN2RSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBakJMO29CQUFDLGlCQUFVLEVBQUU7OytCQUFBO2dCQWtCYixrQkFBQztZQUFELENBakJBLEFBaUJDLElBQUE7WUFqQkQscUNBaUJDLENBQUEiLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cblxuICAgIHBvc3REYXRhKGRhdGEgOmFueSk6IE9ic2VydmFibGU8YW55PiB7IC8vZGF0YSBvZiB0eXBlICdhbnknXG4gICAgICAgIC8vbmVlZCB1cmwgdGFyZ2V0aW5nIGFuZCB3aGF0IGkgYW0gc2VuZGluZ1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7IC8vY3JlYXRpb24gb2YgYm9keSB0byBhdHRhY2ggdG8gcmVxdWVzdFxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHBzOi8vcG9wcGluZy10b3JjaC0zNTEwLmZpcmViYXNlaW8uY29tL2RhdGEuanNvbicsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICBnZXREYXRhKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cHM6Ly9wb3BwaW5nLXRvcmNoLTM1MTAuZmlyZWJhc2Vpby5jb20vZGF0YS5qc29uJylcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
