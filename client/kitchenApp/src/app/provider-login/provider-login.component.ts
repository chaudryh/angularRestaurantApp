import { Component, OnInit } from '@angular/core';
import { ProviderLoginService } from "../services";
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-provider-login',
  templateUrl: './provider-login.component.html',
  styleUrls: ['./provider-login.component.css']
})
export class ProviderLoginComponent implements OnInit {

  submitted:boolean;
  message = '';
  data: any;
  constructor(private service: ProviderLoginService, private router: Router) {}



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
