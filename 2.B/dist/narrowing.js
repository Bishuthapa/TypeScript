"use strict";
function isAdminhere(account) {
    if ("IsAdmin" in account) {
        return account.IsAdmin;
    }
}
