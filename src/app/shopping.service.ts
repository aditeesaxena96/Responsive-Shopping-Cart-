import { Injectable } from '@angular/core';
import { Subject } from '../../node_modules/rxjs';
import { JSONdata } from './jsondata';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
Alldata;
public data=new Subject<any>()
  constructor(private jsondata : JSONdata) { }
  getdata(res)
  {
    this.data.next(res);
  }
}
