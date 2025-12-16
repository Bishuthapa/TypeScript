interface User {
    name:string,
    age: Number,

}

interface Admin{
    name: String,
    age : Number,
    IsAdmin: boolean;
}


function isAdminhere (account : User | Admin) {
    if("IsAdmin" in account){
        return account.IsAdmin;
    }
}

