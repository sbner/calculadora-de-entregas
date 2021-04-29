import { Shippings } from "src/models/shipping.model";

export class MainService{
    shippings: Shippings[] = [] 

    addShipping(data:Shippings): void{
        this.shippings.push(data)
    }

    getShippings(){
        return this.shippings
    }

    shippingExist(){
        if (this.shippings.length > 0){
            return true
        } else {
            return false
        }
    }

    remove(index:number){
        this.shippings.splice(index,1)
    }
}