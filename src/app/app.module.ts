import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataComponent } from './data/data.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule } from '@angular/router'
import { ShoppingService } from './shopping.service';
import { JSONdata } from './jsondata';

const routes=[{
  path: '',
  component :DataComponent
},
{
  path: 'checkout',
  component : FooterComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataComponent,
    FooterComponent,    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ShoppingService,JSONdata],
  bootstrap: [AppComponent]
})
export class AppModule { }
