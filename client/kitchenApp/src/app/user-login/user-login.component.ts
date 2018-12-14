import { Component, OnInit } from '@angular/core';
import { UserLoginService } from "../services";
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  submitted:boolean;
  message = '';
  data: any;
  constructor(private service: UserLoginService, private router: Router) {}



  userlogin = {}
  onSubmit() {
    this.service.loginUser(this.userlogin)
    .subscribe(
      res => {
        this.data = res;
        console.log(res);
        localStorage.setItem('jwtToken', this.data.token)
        this.router.navigate(['']);
      }, err => this.message = err.error.msg);
    this.submitted = true;
   }


   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  ngOnInit() {
  }

}
