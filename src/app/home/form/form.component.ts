import { Component, OnInit } from '@angular/core';
import { Shippings } from 'src/models/shipping.model';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'ht-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  error: boolean = false
  errorMessage: string = ""

  constructor(
    public mainService: MainService,
  ) {}

  ngOnInit(): void {
  }

  onSubmit(data: Shippings): void {
    let shippings = this.mainService.getShippings()
    if(data.cep.match(/[^\d]/)){
      return this.throwError("Erro! Coloque somente números no CEP!", 5000)
    }
    if (!shippings.includes(data)){
      this.mainService.addShipping(data)
    } else {
      this.throwError("Erro! Esses dados já existem.", 5000)
    }
  }

  throwError(message:string, fadeOut:number){
    this.error = true
    this.errorMessage = message
    setTimeout(() => {this.error = false}, fadeOut)
  }

}
