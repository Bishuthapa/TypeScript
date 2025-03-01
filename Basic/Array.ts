// const hub:string[] = ["A", "B", "C", "D", "E"];
// const google: number[] = [23,45,5,56];


// google.push(345);
// console.log(google);

type Person = {
    name: string
    age: number
    isMarried: boolean
}

let user:Person[] = [];

user.push({ name: "bibit", age: 30, isMarried: true });

console.log(user);