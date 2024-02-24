/**************************************************************
* Author: Mario Leyva Moreno
*
* File: UserError.js
*
* Description: Helper function that sets up an object to send error messages.
* It sends the error message, the url of the page that the user is redirected to, 
* and what kind of error was thrown. Used in users.js during user registration and login.
*
**************************************************************/


class UserError extends Error {
    constructor(message, redirectURL, status) {
        super(message);
        this.redirectURL = redirectURL;
        this.status = status;
    }

    getMessage() {
        return this.message;
    }

    getRedirectURL() {
        return this.redirectURL;
    }

    getStatus() {
        return this.status;
    }
}

module.exports = UserError;