import { Component, OnInit } from '@angular/core';
import { KitchenService } from "./menuServices";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  object : any;
  constructor(private service: KitchenService) { }
  ngOnInit() {
    this.service.getKitchen().subscribe(response => {this.object = response, console.log(this.object)}, err => console.log(err));
  }
}
