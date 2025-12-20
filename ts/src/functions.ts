function Drinking(type : string, times: number) {
 
    console.log(`He is drinking ${type} more than ${times} times.`);
}

Drinking("Water", 6);

function hey() : void { /// return type is void
 
    console.log("Hi");
}

hey();

function num( type? :string){ 
    console.log(`This is google ${type}`);
}

num();


function number( type :string= "two"){
    console.log(`This is google ${type}`);
}

number();
