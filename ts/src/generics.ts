function WrapArray<T>(item: T ) : T[]{
    return [item]
}

WrapArray("Choclate");
WrapArray(55);
WrapArray({flavor: "Coconut"})


function pair<A, B>(a:A ,b:B): [A,B]{
    return [a, b]
} 

pair("hancy", "bro");


interface Box<T> {
    content :T
}




interface ApiPromise<T>{
    status: number,
    data : T
}

const res: ApiPromise<{flavor: string}> ={
    status :200,
    data : {flavor: "candy"}
}
