import { Component,OnInit } from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FeastFreedom';
  
  logout() {
    localStorage.clearAll();
    localStorage.removeItem('jwtToken');
    console.log("logging out");
    //this.router.navigate(['login']);
  }
  
}
