export interface FoodItem{
    id: string;
    name: string;
    price: string;
}

export class Food implements FoodItem{
    id: string;
    name: string;
    price: string;
    constructor(obj?: any){
        this.id = obj.id || '';
        this.name = obj.ndbno || '';
        this.price = obj.price || '';
    }
}