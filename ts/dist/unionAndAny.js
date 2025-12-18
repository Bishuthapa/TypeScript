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
console.log(Foodorder);
//# sourceMappingURL=unionAndAny.js.map