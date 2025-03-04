interface Shape {
    area : number;
    computeArea: () => number;
}


const PI = 22/7;

class cricle implements Shape {
    radius: number;
    area: number;
    constructor(radius: number){
        this.radius = radius;
        this.area = this.computeArea();
    }
    computeArea = () :number => {
        return PI * this.radius * this.radius;
    }
}

let target = new cricle(5);
console.log(target.area.toFixed(2));