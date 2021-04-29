import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FormComponent } from './home/form/form.component';
import { TableComponent } from './home/table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MainService } from 'src/services/main.service';
import { HomeComponent } from './home/home.component';
import { BudgetComponent } from './budget/budget.component';
import { ApiService } from 'src/services/api.service';
import { ShippingPrices } from 'src/services/shippingPrices.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    TableComponent,
    HomeComponent,
    BudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MainService, ApiService, ShippingPrices],
  bootstrap: [AppComponent]
})
export class AppModule { }
