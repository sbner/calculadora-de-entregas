import { Injectable } from '@angular/core';

// The way this service works is not ideal...
// in the 'real world' it would fetch the shipping prices on a back-end server.
@Injectable()
export class ShippingPrices{
  
    shippingPrices:any = {
        capitais: {

            'Rio Branco'        : '100,00',
            'Macapá'            : '100,00',        
            'Manaus'            : '100,00',        
            'Belém'             : '100,00',        
            'Porto Velho'       : '100,00',        
            'Boa Vista'         : '100,00',        
            'Palmas'            : '100,00',        
            'Maceió'            : '70,00',        
            'Salvador'          : '70,00',        
            'Fortaleza'         : '70,00',        
            'São Luís'          : '70,00',        
            'João Pessoa'       : '70,00',        
            'Recife'            : '70,00',        
            'Teresina'          : '70,00',        
            'Natal'             : '70,00',        
            'Aracaju'           : '70,00',        
            'Brasília'          : '100,00',        
            'Goiânia'           : '100,00',        
            'Cuiabá'            : '100,00',        
            'Campo Grande'      : '100,00',        
            'Vitória'           : '50,00',        
            'Belo Horizonte'    : '50,00',        
            'Rio de Janeiro'    : '50,00',        
            'São Paulo'         : '00,00',        
            'Curitiba'          : '70,00',        
            'Porto Alegre'      : '70,00',        
            'Florianópolis'     : '70,00',        
        },
        interior: {

            'AC':   '150,00',
            'AP':   '150,00',
            'AM':   '150,00',
            'PA':   '150,00',
            'RO':   '150,00',
            'RR':   '150,00',
            'TO':   '150,00',
            'AL':   '100,00',
            'BA':   '100,00',
            'CE':   '100,00',
            'MA':   '100,00',
            'PB':   '100,00',
            'PE':   '100,00',
            'PI':   '100,00',
            'RN':   '100,00',
            'SE':   '100,00',
            'DF':   '100,00',
            'GO':   '150,00',
            'MT':   '150,00',
            'MS':   '150,00',
            'ES':   '80,00',
            'MG':   '80,00',
            'RJ':   '80,00',
            'SP':   '80,00',
            'PR':   '100,00',
            'RS':   '100,00',
            'SC':   '100,00',
        }
    }   

   getShippingPrices(){
       return this.shippingPrices
   }
}