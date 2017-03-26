function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

var usersKey = "users";
var loggedUserKey = "loggedUsers";

var staticUsers =  [
    { "username": "kosmos", "email": "kos@abv.bg", "password": "kos"},
    { "username": "myhata", "email": "my@abv.bg", "password": "kos"},
    { "username": "belov", "email": "Internet Explorer RULLZZzz", "password": "assets/images/html.jpg"},
    { "username": "pchelata", "email": "Internet Explorer RULLZZzz", "password": "assets/images/html.jpg"},
    { "username": "myhala", "email": "Internet Explorer RULLZZzz", "password": "assets/images/html.jpg"},
];

function initUser(){
    for(var i = 0; i < staticUsers; i++){
        localStorage.setItem(staticUsers[i].username, JSON.stringify(staticUsers[i]));
    }
}

function registerUser(username, email, password){
    var newUser = new User(username, email, password);

    localStorage.setItem(newUser.username, JSON.stringify(newUser));
}

function login(username, password){
    var userJSON = localStorage.getItem(username);

    if(userJSON){
        var user = JSON.parse(userJSON);
        if(user.password === password){
            alert("Login Success");
            return true; 
        } else {
            alert("Incorrect password");
            return false; 
        }
    } else {
        alert("User not found")
        return false; 
    }
}

function getLogedUser(){
    return JSON.parse(localStorage.getItem(loggedUserKey));
}

function logInUser(userName){
    var userJSON = localStorage.getItem(username);
    localStorage.setItem(loggedUserKey, userJSON);
}

function logout(){
    localStorage.setItem(loggedUserKey, null);
}