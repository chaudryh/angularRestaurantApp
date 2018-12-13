import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class KitchenService {
    constructor (private http: HttpClient) {}

    getKitchen() {
        return this.http.get('http://localhost:4000/api/kitchens');
    }

    
}

export class UserService {
    constructor (private http: HttpClient) {}

    postUser() {
        return this.http.get('http://localhost:4000/api/users');
    }
}