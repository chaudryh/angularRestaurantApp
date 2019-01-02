import { Component, OnInit } from '@angular/core';
import { MenuRegistrationService } from '../services';

@Component({
  selector: 'app-menu-registration',
  templateUrl: './menu-registration.component.html',
  styleUrls: ['./menu-registration.component.css']
})
export class MenuRegistrationComponent implements OnInit {
  

  constructor(private service: MenuRegistrationService) {}

  submitted:boolean;

  menu = {}
  kitchens : any;

  onSubmit() {
      this.service.postmenu(this.menu)
      .subscribe(
        res => {
          console.log(res)
        }, err => console.log(err));
      this.submitted = true;
      
  }

  ngOnInit() {
    this.service.getKitchen().subscribe(response => {this.kitchens = response, console.log(this.kitchens)}, err => console.log(err));
  }
}