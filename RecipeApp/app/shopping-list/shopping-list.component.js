System.register(['angular2/core', "../shopping-list/shopping-list-new-item.component.ts", "./shopping-list-item.component.ts"], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_ts_1, shopping_list_item_component_ts_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_ts_1_1) {
                shopping_list_new_item_component_ts_1 = shopping_list_new_item_component_ts_1_1;
            },
            function (shopping_list_item_component_ts_1_1) {
                shopping_list_item_component_ts_1 = shopping_list_item_component_ts_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.listItems = new Array();
                }
                ShoppingListComponent.prototype.onItemAdded = function (item) {
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
                        template: "\n        <section>\n            <shopping-list-new-item (itemAdded)=\"onItemAdded($event)\"></shopping-list-new-item>\n        </section>\n        <section>\n            <h3>My List</h3>\n            <div class=\"list\">\n                <ul>\n                    <li *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\">{{listItem.name}} ({{listItem.amount}})</li>\n                </ul>\n            </div>\n        </section>\n        <section *ngIf=\"selectedItem != null\">\n            <shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemove($event)\"></shopping-list-item>\n        </section>\n    ",
                        directives: [shopping_list_new_item_component_ts_1.ShoppingListNewItemComponent, shopping_list_item_component_ts_1.ShoppingListItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7b0JBQ0ksY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7Z0JBZXRDLENBQUM7Z0JBWkcsMkNBQVcsR0FBWCxVQUFZLElBQWM7b0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO2dCQUVELHdDQUFRLEdBQVIsVUFBUyxJQUFjO29CQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQW5DTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixRQUFRLEVBQUUscW5CQWVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGtFQUE0QixFQUFFLDJEQUF5QixDQUFDO3FCQUN4RSxDQUFDOzt5Q0FBQTtnQkFpQkYsNEJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELHlEQWdCQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Nob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnR9IGZyb20gXCIuLi9zaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50LnRzXCI7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tIFwiLi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQge1Nob3BwaW5nTGlzdEl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3QtaXRlbS5jb21wb25lbnQudHNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxzaG9wcGluZy1saXN0LW5ldy1pdGVtIChpdGVtQWRkZWQpPVwib25JdGVtQWRkZWQoJGV2ZW50KVwiPjwvc2hvcHBpbmctbGlzdC1uZXctaXRlbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoMz5NeSBMaXN0PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwiI2xpc3RJdGVtIG9mIGxpc3RJdGVtc1wiIChjbGljayk9XCJvblNlbGVjdChsaXN0SXRlbSlcIj57e2xpc3RJdGVtLm5hbWV9fSAoe3tsaXN0SXRlbS5hbW91bnR9fSk8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiAqbmdJZj1cInNlbGVjdGVkSXRlbSAhPSBudWxsXCI+XG4gICAgICAgICAgICA8c2hvcHBpbmctbGlzdC1pdGVtIFtpdGVtXT1cInNlbGVjdGVkSXRlbVwiIChyZW1vdmVkKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L3Nob3BwaW5nLWxpc3QtaXRlbT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1Nob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnQsIFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCB7XG4gICAgbGlzdEl0ZW1zID0gbmV3IEFycmF5PExpc3RJdGVtPigpO1xuICAgIHNlbGVjdGVkSXRlbTogTGlzdEl0ZW07XG5cbiAgICBvbkl0ZW1BZGRlZChpdGVtOiBMaXN0SXRlbSkge1xuICAgICAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKHtuYW1lOiBpdGVtLm5hbWUsIGFtb3VudDogaXRlbS5hbW91bnR9KTtcbiAgICB9XG5cbiAgICBvblNlbGVjdChpdGVtOiBMaXN0SXRlbSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuXG4gICAgb25SZW1vdmUoaXRlbTogTGlzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMuc3BsaWNlKHRoaXMubGlzdEl0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
