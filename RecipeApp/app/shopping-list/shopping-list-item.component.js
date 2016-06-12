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
    var ShoppingListItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListItemComponent = (function () {
                function ShoppingListItemComponent() {
                    this.removed = new core_1.EventEmitter();
                }
                ShoppingListItemComponent.prototype.onDelete = function () {
                    this.removed.emit(this.item);
                };
                ShoppingListItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n    <div class=\"input\">\n        <label for=\"item-name\">Name</label>\n        <input type=\"text\" id=\"item-name\" [(ngModel)]=\"item.name\">\n    </div>\n    <div class=\"input\">\n        <label for=\"item-amount\">Amount</label>\n        <input type=\"text\" id=\"item-amount\" [(ngModel)]=\"item.amount\">\n    </div>\n\n    <button class=\"danger\" (click)=\"onDelete()\">Delete Item</button>\n\n\n    ",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListItemComponent);
                return ShoppingListItemComponent;
            }());
            exports_1("ShoppingListItemComponent", ShoppingListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFBQTtvQkFFSSxZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFZLENBQUM7Z0JBTTNDLENBQUM7Z0JBSkcsNENBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBM0JMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLGdhQWFUO3dCQUNELE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQzt3QkFDaEIsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO3FCQUV2QixDQUFDOzs2Q0FBQTtnQkFVRixnQ0FBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsaUVBUUMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gXCIuLi9saXN0LWl0ZW1cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LWl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImlucHV0XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiaXRlbS1hbW91bnRcIj5BbW91bnQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIml0ZW0tYW1vdW50XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiPlxuICAgIDwvZGl2PlxuXG4gICAgPGJ1dHRvbiBjbGFzcz1cImRhbmdlclwiIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+RGVsZXRlIEl0ZW08L2J1dHRvbj5cblxuXG4gICAgYCxcbiAgICBpbnB1dHM6IFsnaXRlbSddLFxuICAgIG91dHB1dHM6IFsncmVtb3ZlZCddXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3RJdGVtQ29tcG9uZW50IHtcblxuICAgIHJlbW92ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPExpc3RJdGVtPigpO1xuXG4gICAgb25EZWxldGUoKXtcbiAgICAgICAgdGhpcy5yZW1vdmVkLmVtaXQodGhpcy5pdGVtKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
