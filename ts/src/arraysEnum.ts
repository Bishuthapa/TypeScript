const Books: string[] = ["God of War", "Vengeance"]

const BookPrice: number[] = [5000, 4400];

const rating: Array<number> = [5.0, 4.8];


type Book = {
    name: string,
    price: number
}

//Object array
const BookArray: Book[] = [
    {
        name: "God of war",
        price: 5000
    },
    {
        name: "Vengeance",
        price: 4400
    }
]
//can't modify the array 
const cities : readonly string[] = ["KTM", "BTK", "BRT"];

//M-D
const table: number[][] = [
    [1,2,3],
    [4,5,6]
]

//Tuple 

let userInfo: [string, number, boolean? ] /* boolean is optional*/

userInfo = ["Zoro" , 300]
userInfo = ["Luffy", 500, true];

const location: readonly [number, number] = [28.89, 32.67];

 //name tuple

 let BookInfo : [name: string, price: number];

 BookInfo = ["Basic Formula", 500];


 //Enum

 enum House {
    SMALL,
    MEDIUM,
    LARGE
 }

 const size = House.LARGE;

 enum Status {
    PENDING = 100,
    SERVED, //101 AUTO INCREMENT
    CANCELLED //102
 }
 
//const enums
const enum Sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGH =3
}

const s = Sugar.HIGH;


