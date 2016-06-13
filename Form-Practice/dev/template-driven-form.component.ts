import {Component} from 'angular2/core';

@Component({
    selector: 'my-template-driven',
    template: `
        <h2>Sign-up form</h2>
        <form>
            <div>
                <label for="mail">Mail</label>
                <input type="text" id="mail" required>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="text" id="password" required>
            </div>
             <div>
                <label for="confirm-password">Confirm Password</label>
                <input type="text" id="confirm-password" required>
            </div>
            <button type="submit">Submit</button>
        </form>


    `
})

export class TemplateDrivenFormComponent {

}
