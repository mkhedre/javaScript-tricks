function isAcceptablePassword(password) {
    // your code here
    // It should be at least 6 characters long and contain digit.
    return password.length > 6 && password.match(/\d/) !== null;
}
