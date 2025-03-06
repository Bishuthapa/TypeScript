"use strict";
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
    constructor(name, age, isMarried) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}
const bibit = new User("bibit", 17, false);
console.log(bibit);
