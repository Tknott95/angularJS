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
    var ShoppingListNewItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent() {
                    this.item = { name: '', amount: 0 }; //item binding with two way db up top
                    this.itemAdded = new core_1.EventEmitter();
                }
                ShoppingListNewItemComponent.prototype.onClick = function () {
                    this.itemAdded.emit(this.item);
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n\n    <div class=\"input\">\n        <label for=\"item-name\">Name</label>\n        <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n    </div>\n    <div class=\"input\">\n        <label for=\"item-amount\">Amount</label>\n        <input type=\"text\" id=\"item-amount\" [(ngModel)]=\"item.amount\">\n    </div>\n\n    <button (click)=\"onClick()\">Add Item</button>\n\n    ",
                        outputs: ['itemAdded']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3QkE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxxQ0FBcUM7b0JBQ25FLGNBQVMsR0FBRyxJQUFJLG1CQUFZLEVBQVksQ0FBQztnQkFLN0MsQ0FBQztnQkFIRyw4Q0FBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkExQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsMllBYVQ7d0JBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUV6QixDQUFDOztnREFBQTtnQkFTRixtQ0FBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsdUVBT0MsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tIFwiLi4vbGlzdC1pdGVtXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LW5ldy1pdGVtJyxcbiAgICB0ZW1wbGF0ZTogYFxuXG4gICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbW91bnRcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW1vdW50XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiPlxuICAgIDwvZGl2PlxuXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25DbGljaygpXCI+QWRkIEl0ZW08L2J1dHRvbj5cblxuICAgIGAsXG4gICAgb3V0cHV0czogWydpdGVtQWRkZWQnXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudCB7XG4gICAgaXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTsgLy9pdGVtIGJpbmRpbmcgd2l0aCB0d28gd2F5IGRiIHVwIHRvcFxuICAgIGl0ZW1BZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TGlzdEl0ZW0+KCk7XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLml0ZW1BZGRlZC5lbWl0KHRoaXMuaXRlbSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
