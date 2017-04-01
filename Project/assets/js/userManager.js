function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

//loged user sotrage key
var loggedUserKey = "loggedUsers";

var staticUsers =  [
    { "username": "kosmos", "email": "kos@abv.bg", "password": "kos"},
    { "username": "myhata", "email": "my@abv.bg", "password": "kos"},
    { "username": "belov", "email": "ba@abv.bg", "password": "beloviq"},
    { "username": "pchelata", "email": "mango@gmail.com", "password": "mangito"},
    { "username": "myhala", "email": "hanman@abv.bg", "password": "muhalata"},
];

function initUser(){
    for(var i = 0; i < staticUsers.length; i++){
        //To stor it first need to make it var dataToStore = JSON.stringify(data);
        //localStorage.setItem('yourKeyName', 'your value');
        //storing the new JSON-formatted string in local storage:
        //localStorage.setItem('someData', dataToStore);
        localStorage.setItem(staticUsers[i].username, JSON.stringify(staticUsers[i]));
    }
}
//from constructor Users
function registerUser(username, email, password){
    var newUser = new User(username, email, password);

    localStorage.setItem(newUser.username, JSON.stringify(newUser));
}

function doLogin(username, password){
     //To store a JSON object in local storage you will need 
    //to convert it into a JSON-formatted string, using the JSON.stringify() function.
    //example var dataToStore = JSON.stringify(data);
        //get from storage username and make json
    var userJSON = localStorage.getItem(username);
    //if have this username get in if 
    if(userJSON){
        //object was previously converted to a JSON-formatted string, to reverse the effects
        // of the stringify function yo access the data within the object.
         //is done through use of the JSON.parse() function:

         //make userJson JS object
        var user = JSON.parse(userJSON);
        if(user.password === password){
            logInUser(user);            
            alert("Login Success");
            return true; 
        } else {
            alert("Incorrect password");
            return false; 
        }
    } else {
        //if not have user return user not found
        alert("User not found")
        return false; 
    }
}

function getLogedUser(){
    //return  itam (object) with key loggedUsersKey
    return JSON.parse(localStorage.getItem(loggedUserKey));
}

function logInUser(user){
    //with (key)name loggedUserKey put user with 
    localStorage.setItem(loggedUserKey, JSON.stringify(user));
}

function doLogout(){
    //when logout with key loggedUserKey get null
    //logout with profile.
    localStorage.setItem(loggedUserKey, null);
}