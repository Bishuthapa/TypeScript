// function createUser(name:string, age:number){

//     console.log(name);
//     console.log(age);

// }

// createUser("bibit", 20);

type User = {
    name: string,
    age: number,
    isMarried: boolean
}

function createUser(user: User): void {
    console.log(user.name, user.age, user.isMarried);
}

let x: User = { name: 'bibit', age: 30, isMarried: true };
createUser(x);

type CardNumber = {
    cardNumber: string;
}

type CardScore = {
    cardScore: number;
}

type Card = CardNumber & CardScore;

function createCard(card: Card): void {
    console.log(card.cardNumber);
    console.log(card.cardScore);
}
createCard({ cardNumber: "124", cardScore: 100 });