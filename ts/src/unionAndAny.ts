let apiRequest: "success" | "failed" | "pending" = "pending"; //example of union 

apiRequest = "success";


// console.log(apiRequest);



const foods = ["dhalBhat", "tarkari", "Masu", "kolChiura"];

let Foodorder: string | undefined;

for (let food of foods) {
    if (food === "Masu") {
        Foodorder = food;
        break
    }
};

//console.log(Foodorder);


class coffee {
    serve() {
        return `return balck coffee`
    }
}

class Tea {
    serve() {
        return `return balck tea`
    }
}


function serve(lunch: coffee | Tea) {
    if (lunch instanceof coffee) {
        return lunch.serve();
    }
}

type anime = { type: "anime"; time: number };
type liveAction = { type: "real"; time: number };
type movie = { type: "fiction"; time: number };

type films = anime | liveAction | movie;

function MakeFilms(myMovies: films) {
    switch (myMovies.type) {
        case "anime":
            return `This is anime`
            break;

        case "real":
            return `This is liveAction`
            break;

        case "fiction":
            return `This is movie`
            break;
    }

}
