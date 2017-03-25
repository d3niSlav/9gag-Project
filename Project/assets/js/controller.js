/* Creating some users */
var usersData = [
    [1, "obi4amLeshta", "neObi4amStrani4niEfecti"],
    [2, "deni", "123456789"],
    [3, "minka", "minka"],
    [4, "naMinkaSestrata", "minka"]
]

var users = [];

for (var index = 0; index < usersData.length; index++) {
    user = usersData[index];
    users.push(new User(user[0], user[1], user[2]));
}

/* Create some comments */
var comments = [];