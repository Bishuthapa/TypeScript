type Book = {
        
    name :string;
}

let bookString = '{"name" : "go for L"}';
let bookObject = JSON.parse(bookString) as Book; // type assertion


console.log(bookObject.name)
