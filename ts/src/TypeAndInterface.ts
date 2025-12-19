// type Movies = "drama" | "action" | "fiction";

// function Watch(m : Movies){
//     console.log(m);
// }


interface Person {
    firstName : string,
    lastName : string
}


function getFullName(n : Person){
    return `${n.firstName} ${n.lastName}`
}

let Joshan = {
    firstName : "Joshan",
    lastName : "Leo"
}

console.log(getFullName(Joshan))