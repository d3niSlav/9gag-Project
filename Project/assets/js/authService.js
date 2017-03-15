function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

var userManager = (function () {

    // tui tuka e skrito
    var users = [new User('Pani', '1234', 30)];

    return { // tui tuka e publichno
        registerUser: function (user) {
            if (user instanceof User) {
                users.push(user);
            }
        },

        loginUser: function (username, password) {
            return users.some(function (u) {
                return (u.username === username) &&
                    (u.password === password);
            });
        },

        isUserNameExists: function (username) {
            return users.some(function (u) {
                return (u.username === username);
            });
        },

        getAllUser: function(){
            return users.toString();
        }
    }
})();