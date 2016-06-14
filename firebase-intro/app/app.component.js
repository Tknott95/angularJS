System.register(['angular2/core', "./data.service"], function(exports_1, context_1) {
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
    var core_1, data_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_dataService) {
                    this._dataService = _dataService;
                }
                AppComponent.prototype.onPost = function (title, body, userId) {
                    var _this = this;
                    var data = {
                        title: title,
                        body: body,
                        userId: userId
                    };
                    this._dataService.postData(data)
                        .subscribe(function (data) { return _this.response = JSON.stringify(data); }, function (error) { return console.log(error); });
                };
                AppComponent.prototype.onGetPosts = function () {
                    var _this = this;
                    this._dataService.getData()
                        .subscribe(function (data) {
                        console.log(data);
                        _this.response = JSON.stringify(data);
                    }, function (error) { return console.error(error); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <div>\n    \t<div class=\"input\">\n    \t\t<label for=\"title\">Title</label>\n    \t\t<input type=\"text\" id=\"title\" #title>\n    \t</div>\n    \t<div class=\"input\">\n    \t    <label for=\"body\">Body</label>\n    \t    <input type=\"text\" id=\"body\" #body>\n    \t</div>\n    \t<div class=\"input\">\n    \t\t<label for=\"user-id\">User ID</label>\n    \t\t<input type=\"text\" id=\"user-id\" #userId>\n    \t</div>\n    \t<button (click)=\"onPost(title.value, body.value, userId.value)\">Post Data</button>\n    \t<button (click)=\"onGetPosts()\">Get all Posts</button>\n    \t<p>Response: {{response}}</p>\n    </div>\n        \n    ",
                        providers: [data_service_1.DataService]
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBSUMsc0JBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUdqRCw2QkFBTSxHQUFOLFVBQU8sS0FBYSxFQUFFLElBQVksRUFBRSxNQUFjO29CQUFsRCxpQkFZQztvQkFWQSxJQUFNLElBQUksR0FBRzt3QkFDWixLQUFLLEVBQUUsS0FBSzt3QkFDWixJQUFJLEVBQUUsSUFBSTt3QkFDVixNQUFNLEVBQUUsTUFBTTtxQkFDZCxDQUFDO29CQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt5QkFDL0IsU0FBUyxDQUNULFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFwQyxDQUFvQyxFQUM1QyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzNCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRSxpQ0FBVSxHQUFWO29CQUFBLGlCQVVDO29CQVRHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO3lCQUMxQixTQUFTLENBQ04sVUFBQSxJQUFJO3dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFekMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQTtnQkFDTCxDQUFDO2dCQXZETDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsOG9CQW1CVDt3QkFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO3FCQUMzQixDQUFDOztnQ0FBQTtnQkFrQ0YsbUJBQUM7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNELHVDQWlDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0RhdGFTZXJ2aWNlfSBmcm9tIFwiLi9kYXRhLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5cbiAgICBcdDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgIFx0XHQ8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XG4gICAgXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiAjdGl0bGU+XG4gICAgXHQ8L2Rpdj5cbiAgICBcdDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgIFx0ICAgIDxsYWJlbCBmb3I9XCJib2R5XCI+Qm9keTwvbGFiZWw+XG4gICAgXHQgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJib2R5XCIgI2JvZHk+XG4gICAgXHQ8L2Rpdj5cbiAgICBcdDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgIFx0XHQ8bGFiZWwgZm9yPVwidXNlci1pZFwiPlVzZXIgSUQ8L2xhYmVsPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXItaWRcIiAjdXNlcklkPlxuICAgIFx0PC9kaXY+XG4gICAgXHQ8YnV0dG9uIChjbGljayk9XCJvblBvc3QodGl0bGUudmFsdWUsIGJvZHkudmFsdWUsIHVzZXJJZC52YWx1ZSlcIj5Qb3N0IERhdGE8L2J1dHRvbj5cbiAgICBcdDxidXR0b24gKGNsaWNrKT1cIm9uR2V0UG9zdHMoKVwiPkdldCBhbGwgUG9zdHM8L2J1dHRvbj5cbiAgICBcdDxwPlJlc3BvbnNlOiB7e3Jlc3BvbnNlfX08L3A+XG4gICAgPC9kaXY+XG4gICAgICAgIFxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbRGF0YVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgXG4gICAgcmVzcG9uc2U6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UpIHt9XG5cblxuXHRvblBvc3QodGl0bGU6IHN0cmluZywgYm9keTogc3RyaW5nLCB1c2VySWQ6IHN0cmluZykge1xuXG5cdFx0Y29uc3QgZGF0YSA9IHtcblx0XHRcdHRpdGxlOiB0aXRsZSxcblx0XHRcdGJvZHk6IGJvZHksXG5cdFx0XHR1c2VySWQ6IHVzZXJJZFxuXHRcdH07XG5cdFx0dGhpcy5fZGF0YVNlcnZpY2UucG9zdERhdGEoZGF0YSlcblx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0ZGF0YSA9PiB0aGlzLnJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkoZGF0YSksXG5cdFx0XHRlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcblx0XHQpO1xuXHR9XG5cbiAgICBvbkdldFBvc3RzKCl7XG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmdldERhdGEoKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgKVxuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
