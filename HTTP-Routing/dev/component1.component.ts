import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-component-1',
    template: `
        
      
    
    <h1>c1</h1>
    <button (click)="onNavigate()">Take me to Component 2</button>
    
    `
})

export class Component1Component {
    constructor(private _router: Router) {}

    onNavigate(){
        this._router.navigate(['Component2']);
    }
}