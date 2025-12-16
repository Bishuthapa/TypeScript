function book <T>(x: T){
    return "xo";
}

let you = book("121");


// class box <type> {
//     contents: type;
//     constructor(value: type){
//         this.contents = value;
//     }

// }

// let x = new box("nine")


function getSomeBox<T>(products: T[]): T{
    const myIndex = 3;
    return products[myIndex]
}