class Book {
    type: string;
    price : number; 

    constructor (type : string, price : number){
        this.type = type;
        this.price = price;
    }
}

const MyBook = new Book("Comedy", 2000);