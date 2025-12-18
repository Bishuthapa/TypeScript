let List : any ;

List = 12;
List = 3.4;
List = "List of number";
List = true;
List.toString();



let topList : unknown;
topList = 12;
topList = 3.4;
topList = "List of number";
topList = true;
//topList.toString();// it throw error 

if(typeof topList === "string"){
    topList.toString();
}