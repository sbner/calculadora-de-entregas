import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService{
    constructor(private http: HttpClient) { }

    getCepData(cep:string){
        return this.http.get( `http://viacep.com.br/ws/${cep}/json/`)
    }
}