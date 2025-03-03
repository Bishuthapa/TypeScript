// class User {
//     name: string;
//     age: number;
//     isMarried: boolean;

//     constructor(name:string,age:number,isMarried:boolean){
//         this.name = name;
//         this.age = age;
//         this.isMarried = isMarried;
//     }
// }

// let bibit = new User("bibit", 17, false);
// console.log(bibit);


class User {
    constructor(
        public name: string,
        public age:Number,
        public isMarried:Boolean) {
    }
}
const bibit = new User("bibit", 17, false);
console.log(bibit);