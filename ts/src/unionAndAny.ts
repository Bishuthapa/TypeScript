let apiRequest : "success" | "failed" | "pending"= "pending"; //example of union 

apiRequest = "success";


// console.log(apiRequest);



const foods = ["dhalBhat", "tarkari", "Masu", "kolChiura"];

let Foodorder: string | undefined;

for(let food of foods){
    if(food === "Masu"){
        Foodorder = food;
        break
    }  
};

//console.log(Foodorder);



