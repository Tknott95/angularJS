import {Component} from 'angular2/core';
import {HighlightDirective} from "./highlight.directive";

@Component({
    selector: 'my-attribute-directives',
    template: `
        <div [myHighlight]="'red'">
            Highlight me...
        </div>
        <br>
        <div [myHighlight]="'blue'">
            v2 Highlight me... v2
        </div>


    `,
    directives: [HighlightDirective]

})
export class AttributeDirectives {

}
