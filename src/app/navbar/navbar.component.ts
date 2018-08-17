import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { JSONdata } from '../jsondata';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: ShoppingService, private JSONdata: JSONdata) { }
 

  ngOnInit() {
  }

  shop(option) {
    if (option === 'electronics') {
      this.service.getdata(this.JSONdata.Electronics)
  

    }
    if (option === 'tv') {
      this.service.getdata(this.JSONdata.Appliances)
     
    }
    if (option === 'lifestyle') {
      this.service.getdata(this.JSONdata.Lifestyle)
     
    }
    if (option === 'home') {
      this.service.getdata(this.JSONdata.Furniture)
    }
    if (option === 'sports') {
      this.service.getdata(this.JSONdata.Sports)
    }

  }


}
