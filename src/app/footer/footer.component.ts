import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showItem;
  total=0;
  constructor(private service :ShoppingService) {
    this.showItem=service.Alldata;
     this.showItem.forEach(element => {
       this.total +=element.price;
     });
   }

  ngOnInit() {
  }

}
