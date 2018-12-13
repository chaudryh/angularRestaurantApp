import { Component, OnInit } from '@angular/core';
import { KitchenService } from "../services";


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {

  kitchens : any;
  constructor(private service: KitchenService) {}

  ngOnInit() {
    this.service.getKitchen().subscribe(response => {this.kitchens = response, console.log(this.kitchens)}, err => console.log(err));
  }
}
