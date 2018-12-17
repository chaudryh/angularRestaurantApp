import { Component, OnInit } from '@angular/core';
import { OrderService, MenuService } from "../services";
import { QueryReadType } from '@angular/core/src/render3/interfaces/query';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
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
  menu : any;
 /*  orders: {new order}
  order:{
    provideqr:"";
    dish:"";
    price:0;
    qty: 0;
    total: 0;
  }
  quanti = 10; */

  constructor(private service: OrderService, private service2: MenuService) {}
  
  shoppingCart = [];

  ngOnInit() {
      this.kitchen = this.service.setItem();
      //console.log(this.kitchen);
      this.service2.getMenu(this.kitchen.provider).subscribe(
        response => {this.menu = response, console.log(this.menu)
          for(let item of this.menu){
            let shopItem = {
              item: item.item,
              price: item.price,
              veg: item.veg,
              quantity: 0,
              total: 0
            }
            this.shoppingCart.push(shopItem);
          }
          console.log(this.shoppingCart)
        }, 
        err => console.log(err));
    }


  /*   orders(){
        for(var dish in this.menu){
            this. order
        }

    } */

  
   getTotal(){
     let total = 0;
     for(let i of this.shoppingCart){
       console.log(i);
       total += i.quantity * i.price;
     }
     console.log(total)
     return total;
   } 
}
