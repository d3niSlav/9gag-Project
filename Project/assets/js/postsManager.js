function Post(userId, title, source, points, comments, publishDate){
    this.postId = "p8";//TODO: generate id get last elemetn of post arr increase 1
    this.title = title;
    this.source = source;
    this.points = points;
    this.comments = comments;
    this.publishDate = publishDate;
}

//ket for posts in lockal storage
var postsKey = "post";

var preloadedPostsJSON = [
    { "postId": "p0", "userId": 1, "title": "Internet Explorer RULLZZzz", "source": "assets/images/html.jpg", "points": 367, "comments": [], "publishDate": "2017-02-125T09:05:36.974Z" },
    { "postId": "p1", "userId": 1, "title": "KEEP CALM because you are the best mentor ever", "source": "assets/images/niki-pishe.jpg", "points": 728, "comments": [], "publishDate": "2017-01-01T09:05:36.981Z" },
    { "postId": "p2", "userId": 1, "title": "That's the real question", "source": "assets/images/variable.jpg", "points": 915, "comments": [], "publishDate": "2017-03-05T09:05:36.983Z" },
    { "postId": "p3", "userId": 2, "title": "We all feel the same", "source": "assets/images/doge-has-no-idea.jpg", "points": 866, "comments": [], "publishDate": "2017-02-25T09:05:36.986Z" },
    { "postId": "p4", "userId": 3, "title": "When you think you are in the right company but suddenly you find yourself in a totally different continent", "source": "assets/images/this-is-js.jpg", "points": 333, "comments": [], "publishDate": "2017-01-06T09:05:36.987Z" },
    { "postId": "p5", "userId": 4, "title": "We all make mistakes", "source": "assets/images/radeva.jpg", "points": 719, "comments": [], "publishDate": "2017-03-24T09:05:36.990Z" },
    { "postId": "p6", "userId": 2, "title": "Best book ever", "source": "assets/images/book.jpg", "points": 123, "comments": [], "publishDate": "2017-03-24T09:04:36.992Z" },
    { "postId": "p7", "userId": 2, "title": "Confused? I don't think so", "source": "assets/images/confussion.jpg", "points": 484, "comments": [], "publishDate": "2017-01-19T09:05:36.994Z" }
];

function initPosts(){
    var posts = localStorage.getItem(postsKey);

    if(!posts){
        localStorage.setItem(postsKey, JSON.stringify(preloadedPostsJSON));
    }
}

function getAllPosts(){
    var postsJSONArr = localStorage.getItem(postsKey);
    return JSON.parse(postsJSONArr);
}

function getPopularPosts(){
    var allPosts = getAllPosts();

    allPosts.sort(function(a,b){
        if(a.points > b.points)
            return 1;

        if(a.points < b.points)
            return -1;

        return 0;
    });

    return allPosts;
}

function getRecentPosts(){
    var allPosts = getAllPosts();

    allPosts.sort(function(a,b){
        if(a.publishDate > b.publishDate)
            return 1;

        if(a.publishDate < b.publishDate)
            return -1;

        return 0;
    });

    return allPosts;
}

function getRecentPosts(){
    
}

function getTodayPosts(){
    
}

function searchPostsByTitle(title){
    var allPosts = getAllPosts();
    var resultPosts = [];
    
    for(var i = 0; i < allPosts.length; i++){
        if(allPosts[i].title.search(title) >= 0){
            resultPosts.push(allPosts[i]);
        }
    }

    return resultPosts;
}

function addPost(post){
    var posts = JSON.parse(localStorage.getItem(postsKey));
    posts.push(post);

    localStorage.setItem(postsKey, JSON.stringify(posts));
}