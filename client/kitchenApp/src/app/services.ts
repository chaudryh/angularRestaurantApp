import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



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


@Injectable()
export class UserLoginService {
    constructor (private http: HttpClient) {}
    
    
    loginUser(user) {
        console.log(user);
        return this.http.post('http://localhost:4000/api/users/login', user);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); // log to console instead
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
      }   
}

@Injectable()
export class ProviderRegistrationService {
    constructor (private http: HttpClient) {}
    
    
    postkitchen(kitchen) {
        console.log("here")
        return this.http.post('http://localhost:4000/api/kitchens/post', kitchen);
    }

}