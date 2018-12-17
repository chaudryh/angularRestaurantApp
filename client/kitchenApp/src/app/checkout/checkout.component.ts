import { Component, OnInit } from '@angular/core';
import { MenuService, OrderService } from "../services";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private service: OrderService) { }
  kitchen : {
    provider: "",
    email: "",
    password: "",
    kitchenDays: "",
    starttime: "",
    endtime: "",
    image: "",
    item: [0],
    price: [0]
  };

  ngOnInit() {
    this.kitchen = this.service.setItem();
  }

}
