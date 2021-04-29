import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/services/api.service';
import { MainService } from 'src/services/main.service';
import { ShippingPrices } from 'src/services/shippingPrices.service';

@Component({
  selector: 'ht-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  shippings: any[] = []

  constructor(
    private mainService: MainService,
    private api: ApiService,
    private shippingPrice: ShippingPrices,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mainService.getShippings().forEach(element => {
      // It gets all shipping prices
      // On a second run I wouldn't do this, I kept this code simply because it was working
      const prices = this.shippingPrice.getShippingPrices()

      this.api.getCepData(element.cep).subscribe((data:any) => {
        // Get shipping price
        let shippingPrice = 0

        // Finds out if it is a capital city or not
        if (Object.keys(prices.capitais).includes(data.localidade)){
          shippingPrice =  prices.capitais[data.localidade]
        } else {
          shippingPrice = prices.interior[data.uf]
        }
        this.shippings.push(
          {
            name: element.name,
            cep: data.cep,
            state: data.uf,
            city: data.localidade,
            street: data.logradouro,
            neighborhood: data.bairro,
            shipping: shippingPrice
          }
        )
      })
    })
  }

  goHome(){
    this.router.navigate([''])
  }

}
