export interface IMenu{
    id: number;
    name: string;
    price: number;
    
}

export class Menu implements IMenu {
    id: number;
    name: string;
    price: number;
    // constructor(obj?: any) {
    //     this.id = obj.id || '';
    //     this.name = obj.name || '';
    //     this.price = obj.price || '';
    // }
}