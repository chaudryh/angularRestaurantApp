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
        //console.log("derp")
        //console.log(user);
        localStorage.setItem("email", user.email);
        document.getElementById("result").innerHTML = localStorage.getItem("email");
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

// Login Service for Provider
@Injectable()
export class ProviderLoginService {
    constructor (private http: HttpClient) {}
    
    loginUser(user) {
        console.log(user);
        localStorage.setItem("email", user.email);
        document.getElementById("result").innerHTML = localStorage.getItem("email");
        return this.http.post('http://localhost:4000/api/kitchens/login', user);
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
export class MenuRegistrationService {
    constructor (private http: HttpClient) {}
    
    postmenu(menu) {
        console.log("here")
        return this.http.post('http://localhost:4000/api/menus/post', menu);
    }
    getKitchen() {
        return this.http.get('http://localhost:4000/api/kitchens');
    }
    
}

@Injectable()
export class OrderService {
    constructor (private http: HttpClient) {}

    kitcheninfo : any;
    getItem(kitchen){
        this.kitcheninfo = kitchen;
    }
    setItem()
    {
        return this.kitcheninfo;
    }

}

@Injectable()
export class MenuService {
    constructor (private http: HttpClient) {}

    getMenu(providername) {
        console.log("here")
        return this.http.get('http://localhost:4000/api/menus/'+ providername);
    }

    setorder(){}
    getorder(){}
}
