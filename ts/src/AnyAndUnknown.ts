let List: any;

List = 12;
List = 3.4;
List = "List of number";
List = true;
List.toString();



let topList: unknown;
topList = 12;
topList = 3.4;
topList = "List of number";
topList = true;
//topList.toString();// it throw error 

if (typeof topList === "string") {
    topList.toString();
}


try {

} catch (error) {

    if (error instanceof Error) {
        console.error(error.message)

    }
    //console.error(error.message)  //[it will throw error => it not sure the error has a message]

}

type Role = "Admin" | "User";

function redirectBasedOnRole(role :Role) :void{
    if(role === "Admin"){
        console.log(`Redirectiong to the admin dashbord`);
        return
    }
    if(role === "User"){
        console.log(`Redirectiong to the User dashbord`);
        return
    }
    role;

}

function neverReturn() : never {
    while(true) {}
}