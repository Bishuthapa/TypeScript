class Book {
    type: string;
    price : number; 

    constructor (type : string, price : number){
        this.type = type;
        this.price = price;
    }
}

const MyBook = new Book("Comedy", 2000);

class Shop {
    protected shopName = "tea shop"
}

class Branch extends Shop {
    getName(){
        return this.shopName;
    }
}

new Branch().getName;

class Pen {
    private _Ink = 10;

    get Ink() {
        return this._Ink
    }

    set Ink(value :number){
        if(value > 10) throw new Error("Too thick");
        this._Ink = value;
    }
}

const C = new Pen()
C.Ink = 6;