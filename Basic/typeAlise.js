// function createUser(name:string, age:number){
function createUser(user) {
    console.log(user.name, user.age, user.isMarried);
}
var x = { name: 'bibit', age: 30, isMarried: true };
createUser(x);
function createCard(card) {
    console.log(card.cardNumber);
    console.log(card.cardScore);
}
createCard({ cardNumber: "123", cardScore: 100 });
