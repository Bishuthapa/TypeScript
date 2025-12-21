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