"use strict";
const PI = 22 / 7;
class cricle {
    constructor(radius) {
        this.computeArea = () => {
            return PI * this.radius * this.radius;
        };
        this.radius = radius;
        this.area = this.computeArea();
    }
}
let target = new cricle(5);
console.log(target.area.toFixed(2));
