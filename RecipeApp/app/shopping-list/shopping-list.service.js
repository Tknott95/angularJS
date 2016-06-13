System.register(['angular2/core', "./mock-shopping-list"], function(exports_1, context_1) {
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
    var core_1, mock_shopping_list_1;
    var MyShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_shopping_list_1_1) {
                mock_shopping_list_1 = mock_shopping_list_1_1;
            }],
        execute: function() {
            MyShoppingListService = (function () {
                function MyShoppingListService() {
                }
                MyShoppingListService.prototype.getItems = function () {
                    return mock_shopping_list_1.shopping_list;
                };
                MyShoppingListService.prototype.insertItem = function (item) {
                    mock_shopping_list_1.shopping_list.push(item);
                };
                MyShoppingListService.prototype.deleteItem = function (item) {
                    mock_shopping_list_1.shopping_list.splice(mock_shopping_list_1.shopping_list.indexOf(item), 1);
                };
                MyShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MyShoppingListService);
                return MyShoppingListService;
            }());
            exports_1("MyShoppingListService", MyShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUE7Z0JBZUEsQ0FBQztnQkFiRyx3Q0FBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxrQ0FBYSxDQUFDO2dCQUV6QixDQUFDO2dCQUVELDBDQUFVLEdBQVYsVUFBVyxJQUFjO29CQUNyQixrQ0FBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCwwQ0FBVSxHQUFWLFVBQVcsSUFBYztvQkFDckIsa0NBQWEsQ0FBQyxNQUFNLENBQUMsa0NBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBZkw7b0JBQUMsaUJBQVUsRUFBRTs7eUNBQUE7Z0JBaUJiLDRCQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCx5REFlQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJy4uL2xpc3QtaXRlbSc7XG5pbXBvcnQge3Nob3BwaW5nX2xpc3R9IGZyb20gXCIuL21vY2stc2hvcHBpbmctbGlzdFwiO1xuXG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIE15U2hvcHBpbmdMaXN0U2VydmljZSB7XG5cbiAgICBnZXRJdGVtcygpe1xuICAgICAgICByZXR1cm4gc2hvcHBpbmdfbGlzdDtcblxuICAgIH1cblxuICAgIGluc2VydEl0ZW0oaXRlbTogTGlzdEl0ZW0pe1xuICAgICAgICBzaG9wcGluZ19saXN0LnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgZGVsZXRlSXRlbShpdGVtOiBMaXN0SXRlbSl7XG4gICAgICAgIHNob3BwaW5nX2xpc3Quc3BsaWNlKHNob3BwaW5nX2xpc3QuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
