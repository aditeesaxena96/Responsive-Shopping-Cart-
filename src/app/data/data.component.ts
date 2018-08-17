import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { JSONdata } from '../jsondata';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers:[JSONdata]
})
export class DataComponent implements OnInit {
  showItem;
  constructor(private service : ShoppingService, private jsondata :JSONdata, private route : Router) { 
    this.showItem=jsondata.Electronics;
  }

  ngOnInit() {
    this.service.data.subscribe(res=>{this.showItem=res})
  }
  cart=[];
  add(item){
    this.cart.push(item);
   // console.log(this.cart)
   
  }
  checkout()
  {
    this.service.Alldata =this.cart;
    if(this.cart.length>0){
      this.route.navigate(['/Checkout'])
    }
    else{
      alert('Cart is Empty')
    }
  }
}
