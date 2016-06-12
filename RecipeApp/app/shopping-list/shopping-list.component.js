System.register(['angular2/core', "./shopping-list-new-item.component", "./shopping-list-item.component"], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemsAdded = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onRemove = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectedItem = null;
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n           <section>\n                <shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n           </section>\n           <section>\n                <h3>My List</h3>\n                <div class=\"list\">\n                    <ul>\n                        <li *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\" >{{listItem.name}} ({{listItem.amount}})</li>\n                    </ul>\n                </div>\n           </section>\n           <section *ngIf=\"selectedItem != null\">\n                <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove($event)\"></shopping-list-item>\n           </section>\n\n    ",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0QkE7Z0JBQUE7b0JBRUksY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7Z0JBZ0J0QyxDQUFDO2dCQWJHLDRDQUFZLEdBQVosVUFBYSxJQUFjO29CQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztnQkFDaEUsQ0FBQztnQkFHRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQsd0NBQVEsR0FBUixVQUFTLElBQWM7b0JBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkF4Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsZUFBZTt3QkFDekIsUUFBUSxFQUFFLDBxQkFnQlQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsK0RBQTRCLEVBQUUsd0RBQXlCLENBQUM7cUJBRXhFLENBQUM7O3lDQUFBO2dCQW9CRiw0QkFBQztZQUFELENBbEJBLEFBa0JDLElBQUE7WUFsQkQseURBa0JDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcbmltcG9ydCB7U2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudH0gZnJvbSBcIi4vc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzaG9wcGluZy1saXN0LW5ldy1pdGVtIChpdGVtQWRkZWQpPVwib25JdGVtQWRkZWQoJGV2ZW50KVwiPjwvc2hvcHBpbmctbGlzdC1uZXctaXRlbT5cbiAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8aDM+TXkgTGlzdDwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNsaXN0SXRlbSBvZiBsaXN0SXRlbXNcIiAoY2xpY2spPVwib25TZWxlY3QobGlzdEl0ZW0pXCIgPnt7bGlzdEl0ZW0ubmFtZX19ICh7e2xpc3RJdGVtLmFtb3VudH19KTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgPHNlY3Rpb24gKm5nSWY9XCJzZWxlY3RlZEl0ZW0gIT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgIDxzaG9wcGluZy1saXN0LWl0ZW0gW2l0ZW1dPVwic2VsZWN0ZWRJdGVtXCIgKHJlbW92ZWQpPVwib25SZW1vdmUoJGV2ZW50KVwiPjwvc2hvcHBpbmctbGlzdC1pdGVtPlxuICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50LCBTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50XVxuXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IHtcblxuICAgIGxpc3RJdGVtcyA9IG5ldyBBcnJheTxMaXN0SXRlbT4oKTtcbiAgICBzZWxlY3RlZEl0ZW06IExpc3RJdGVtO1xuXG4gICAgb25JdGVtc0FkZGVkKGl0ZW06IExpc3RJdGVtKSB7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zLnB1c2goe25hbWU6IGl0ZW0ubmFtZSwgYW1vdW50OiBpdGVtLmFtb3VudH0pO1xuICAgIH1cblxuXG4gICAgb25TZWxlY3QoaXRlbTogTGlzdEl0ZW0pe1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuXG4gICAgb25SZW1vdmUoaXRlbTogTGlzdEl0ZW0pe1xuICAgICAgICB0aGlzLmxpc3RJdGVtcy5zcGxpY2UodGhpcy5saXN0SXRlbXMuaW5kZXhPZihpdGVtKSwgMSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
