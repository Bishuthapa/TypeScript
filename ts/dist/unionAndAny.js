"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let apiRequest = "pending"; //example of union 
apiRequest = "success";
// console.log(apiRequest);
const foods = ["dhalBhat", "tarkari", "Masu", "kolChiura"];
let Foodorder;
for (let food of foods) {
    if (food === "Masu") {
        Foodorder = food;
        break;
    }
}
;
//console.log(Foodorder);
class coffee {
    serve() {
        return `return balck coffee`;
    }
}
class Tea {
    serve() {
        return `return balck tea`;
    }
}
function serve(lunch) {
    if (lunch instanceof coffee) {
        return lunch.serve();
    }
}
function MakeFilms(myMovies) {
    switch (myMovies.type) {
        case "anime":
            return `This is anime`;
            break;
        case "real":
            return `This is liveAction`;
            break;
        case "fiction":
            return `This is movie`;
            break;
    }
}
//# sourceMappingURL=unionAndAny.js.map