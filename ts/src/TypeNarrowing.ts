function OrderBook (data : "large" | "small" |"medium" | number) {
    if( data === "large"){
        return data;
    }
    if(  data === "small" || data === "medium"){
        return data;
    }

    return data;

}