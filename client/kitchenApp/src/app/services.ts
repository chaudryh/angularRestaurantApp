import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class KitchenService {
    constructor (private http: HttpClient) {}

    getKitchen() {
        return this.http.get('http://localhost:4000/api/kitchens');
    }
}

@Injectable()
export class UserRegistrationService {
    constructor (private http: HttpClient) {}
    
    
    postUser(user) {
        console.log("here")
        return this.http.post('http://localhost:4000/api/users/post', user);
    }

}
