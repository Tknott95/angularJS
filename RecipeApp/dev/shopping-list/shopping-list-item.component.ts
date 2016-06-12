import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from "../list-item";

@Component({
    selector: 'shopping-list-item',
    template: `
    <div class="input">
        <label for="item-name">Name</label>
        <input type="text" id="item-name" [(ngModel)]="item.name">
    </div>
    <div class="input">
        <label for="item-amount">Amount</label>
        <input type="text" id="item-amount" [(ngModel)]="item.amount">
    </div>

    <button class="danger" (click)="onDelete()">Delete Item</button>


    `,
    inputs: ['item'],
    outputs: ['removed']

})

export class ShoppingListItemComponent {

    removed = new EventEmitter<ListItem>();

    onDelete(){
        this.removed.emit(this.item);
    }

}