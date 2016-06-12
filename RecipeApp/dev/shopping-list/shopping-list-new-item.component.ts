import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from "../list-item";


@Component({
    selector: 'shopping-list-new-item',
    template: `

    <div class="input">
        <label for="item-name">Name</label>
        <input type="text" id="item-name" [(ngModel)]="item.name">
    </div>
    <div class="input">
        <label for="item-amount">Amount</label>
        <input type="text" id="item-amount" [(ngModel)]="item.amount">
    </div>

    <button (click)="onClick()">Add Item</button>

    `,
    outputs: ['itemAdded']

})

export class ShoppingListNewItemComponent {
    item = {name: '', amount: 0}; //item binding with two way db up top
    itemAdded = new EventEmitter<ListItem>();

    onClick() {
        this.itemAdded.emit(this.item);
    }
}
