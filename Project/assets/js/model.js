function User(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
}

function Profile(id, firstName, lastName, birthday, eMail) {
    this.userId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.eMail = eMail;
    this.posts = [];
    this.votedPosts = [];
    this.comments = [];
}

function Post(postId, userId, title, source, points, comments, publishDate) {
    this.postId = postId;
    this.userId = userId;
    this.title = title;
    this.source = source;
    this.points = points || 0;
    this.comments = comments || [];
    this.publishDate = publishDate || new Date();
}

function Comment(userId, postId, message) {
    this.userId = userId;
    this.postId = postId;
    this.message = message;
    this.points = 0;
    this.publishDate = new Date();
}