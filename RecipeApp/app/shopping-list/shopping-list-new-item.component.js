System.register(['angular2/core', "./shopping-list.service"], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1;
    var ShoppingListNewItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.item = { name: '', amount: 0 }; //item binding with two way db up top
                }
                ShoppingListNewItemComponent.prototype.onClick = function () {
                    this._shoppingListService.insertItem(this.item);
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n\n    <div class=\"input\">\n        <label for=\"item-name\">Name</label>\n        <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n    </div>\n    <div class=\"input\">\n        <label for=\"item-amount\">Amount</label>\n        <input type=\"text\" id=\"item-amount\" [(ngModel)]=\"item.amount\">\n    </div>\n\n    <button (click)=\"onClick()\">Add Item</button>\n\n    ",
                        outputs: ['itemAdded']
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.MyShoppingListService])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBSUksc0NBQW9CLG9CQUEyQztvQkFBM0MseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtvQkFIL0QsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxxQ0FBcUM7Z0JBR0QsQ0FBQztnQkFFbkUsOENBQU8sR0FBUDtvQkFDSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEQsQ0FBQztnQkE1Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsMllBYVQ7d0JBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUV6QixDQUFDOztnREFBQTtnQkFXRixtQ0FBQztZQUFELENBVEEsQUFTQyxJQUFBO1lBVEQsdUVBU0MsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSBcIi4uL2xpc3QtaXRlbVwiO1xuaW1wb3J0IHtNeVNob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gXCIuL3Nob3BwaW5nLWxpc3Quc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2hvcHBpbmctbGlzdC1uZXctaXRlbScsXG4gICAgdGVtcGxhdGU6IGBcblxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1uYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIml0ZW0tYW1vdW50XCI+QW1vdW50PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLWFtb3VudFwiIFsobmdNb2RlbCldPVwiaXRlbS5hbW91bnRcIj5cbiAgICA8L2Rpdj5cblxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soKVwiPkFkZCBJdGVtPC9idXR0b24+XG5cbiAgICBgLFxuICAgIG91dHB1dHM6IFsnaXRlbUFkZGVkJ11cblxufSlcblxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnQge1xuICAgIGl0ZW0gPSB7bmFtZTogJycsIGFtb3VudDogMH07IC8vaXRlbSBiaW5kaW5nIHdpdGggdHdvIHdheSBkYiB1cCB0b3BcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogTXlTaG9wcGluZ0xpc3RTZXJ2aWNlKSB7fVxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbnNlcnRJdGVtKHRoaXMuaXRlbSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
