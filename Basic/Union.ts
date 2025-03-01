type User = {
    name: string
    age: number
}

type Admin = {
    userName: string
    age: number
    role: string
}


const customer: User | Admin =  {
    name: "bibit",
    userName: "bibit",
    age: 30
}
console.log(customer);