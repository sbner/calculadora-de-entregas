import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Shippings } from 'src/models/shipping.model';
import { MainService } from 'src/services/main.service';


@Component({
  selector: 'ht-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  faPen = faPen
  faTrashAlt = faTrashAlt
  faCheck = faCheck
  // Array with the currently 'to edit' items
  editArray: any[] = []

  // Main object
  shippings: Shippings[] = []
  constructor(
    public mainService: MainService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.shippings = this.mainService.getShippings()
  }

  remove(data:any){
    let index = this.shippings.indexOf(data)
    this.mainService.remove(index)
    this.shippings = this.mainService.getShippings()
  }

  edit(element:any){
    this.editArray.push(element);
  }

  save(element:any){
    let indexEdit = this.editArray.indexOf(element) 
    this.editArray.splice(indexEdit,1)
  }

  sendShipping(){
    this.router.navigate(['budget'])
  }

}
