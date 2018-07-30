export interface IMenu{
    id: number;
    name: string;
    price: number;
    description: string;
    
}

export class Menu implements IMenu {
    id: number;
    name: string;
    price: number;
    description: string;
    constructor(obj?: any) {
        this.id = obj.id ;
        this.name = obj.name || '';
        this.price = obj.price;
        this.description= obj.description || '';
    }
}