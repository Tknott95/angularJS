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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEyQkE7Z0JBSUMsc0JBQW9CLFlBQXlCO29CQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtnQkFBRyxDQUFDO2dCQUdqRCw2QkFBTSxHQUFOLFVBQU8sS0FBYSxFQUFFLElBQVksRUFBRSxNQUFjO29CQUFsRCxpQkFZQztvQkFWQSxJQUFNLElBQUksR0FBRzt3QkFDWixLQUFLLEVBQUUsS0FBSzt3QkFDWixJQUFJLEVBQUUsSUFBSTt3QkFDVixNQUFNLEVBQUUsTUFBTTtxQkFDZCxDQUFDO29CQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzt5QkFDL0IsU0FBUyxDQUNULFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFwQyxDQUFvQyxFQUM1QyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzNCLENBQUM7Z0JBQ0gsQ0FBQztnQkEzQ0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDhvQkFtQlQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztxQkFDM0IsQ0FBQzs7Z0NBQUE7Z0JBc0JGLG1CQUFDO1lBQUQsQ0FyQkEsQUFxQkMsSUFBQTtZQXJCRCx1Q0FxQkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtEYXRhU2VydmljZX0gZnJvbSBcIi4vZGF0YS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXY+XG4gICAgXHQ8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICBcdFx0PGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxuICAgIFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgI3RpdGxlPlxuICAgIFx0PC9kaXY+XG4gICAgXHQ8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICBcdCAgICA8bGFiZWwgZm9yPVwiYm9keVwiPkJvZHk8L2xhYmVsPlxuICAgIFx0ICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYm9keVwiICNib2R5PlxuICAgIFx0PC9kaXY+XG4gICAgXHQ8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICBcdFx0PGxhYmVsIGZvcj1cInVzZXItaWRcIj5Vc2VyIElEPC9sYWJlbD5cbiAgICBcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VyLWlkXCIgI3VzZXJJZD5cbiAgICBcdDwvZGl2PlxuICAgIFx0PGJ1dHRvbiAoY2xpY2spPVwib25Qb3N0KHRpdGxlLnZhbHVlLCBib2R5LnZhbHVlLCB1c2VySWQudmFsdWUpXCI+UG9zdCBEYXRhPC9idXR0b24+XG4gICAgXHQ8YnV0dG9uIChjbGljayk9XCJvbkdldFBvc3RzKClcIj5HZXQgYWxsIFBvc3RzPC9idXR0b24+XG4gICAgXHQ8cD5SZXNwb25zZToge3tyZXNwb25zZX19PC9wPlxuICAgIDwvZGl2PlxuICAgICAgICBcbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIFxuICAgIHJlc3BvbnNlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7fVxuXG5cblx0b25Qb3N0KHRpdGxlOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgdXNlcklkOiBzdHJpbmcpIHtcblxuXHRcdGNvbnN0IGRhdGEgPSB7XG5cdFx0XHR0aXRsZTogdGl0bGUsXG5cdFx0XHRib2R5OiBib2R5LFxuXHRcdFx0dXNlcklkOiB1c2VySWRcblx0XHR9O1xuXHRcdHRoaXMuX2RhdGFTZXJ2aWNlLnBvc3REYXRhKGRhdGEpXG5cdFx0LnN1YnNjcmliZShcblx0XHRcdGRhdGEgPT4gdGhpcy5yZXNwb25zZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuXHRcdFx0ZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG5cdFx0KTtcblx0fVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
