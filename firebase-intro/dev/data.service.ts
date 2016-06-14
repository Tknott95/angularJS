import {Injectable} from 'angular2/core';
import {Http, Headers} from "angular2/http";
import 'rxjs/Rx';


@Injectable()
export class DataService {
    constructor(private _http: Http) {}


    postData(data :any) { //data of type 'any'
        //need url targeting and what i am sending
        const body = JSON.stringify(data); //creation of body to attach to request
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('https://popping-torch-3510.firebaseio.com/data.json', body, {headers: headers})
            .map(response => response.json());
    }
}
