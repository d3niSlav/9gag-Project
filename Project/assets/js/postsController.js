//deni
function createNewPost(post) {
    var newPost = document.createElement("article");
    newPost.id = post.postId;
    newPost.className = "post";

    var postHeader = document.createElement("header");
    var headerContainer = document.createElement("h2");
    var postTitle = document.createElement("a");
    postTitle.href = "./sins.html";
    postTitle.addEventListener('click', function() {
        window.sessionStorage.setItem("currentPost", JSON.stringify(post));
    }, false);
    postTitle.appendChild(document.createTextNode(post.title));
    headerContainer.appendChild(postTitle);
    postHeader.appendChild(headerContainer);
    newPost.appendChild(postHeader);

    var postContent = document.createElement("div");
    postContent.className = "post-content";
    var mediaContainer = document.createElement("div");
    mediaContainer.className = "media-container";
    var mediaAnchor = document.createElement("a");
    mediaAnchor.href = "./sins.html";
    mediaAnchor.addEventListener('click', function() {
        window.sessionStorage.setItem("currentPost", JSON.stringify(post));
    }, false);
    var mediaImage = document.createElement("img");
    mediaImage.src = post.source;
    mediaImage.alt = post.title;
    mediaAnchor.appendChild(mediaImage);
    mediaContainer.appendChild(mediaAnchor);
    postContent.appendChild(mediaContainer);
    newPost.appendChild(postContent);

    var statistics = document.createElement("div");
    statistics.className = "post-statistics";
    var statisticsParagraph = document.createElement("p");

    var pointsAnchor = document.createElement("a");
    pointsAnchor.href = "./sins.html";
    pointsAnchor.addEventListener('click', function() {
        window.sessionStorage.setItem("currentPost", JSON.stringify(post));
    }, false);
    pointsAnchor.className = ("post-points");
    var pointsCount = document.createElement("span");
    pointsCount.className = "post-points-count";
    pointsCount.appendChild(document.createTextNode(post.points));
    pointsAnchor.appendChild(pointsCount);
    pointsAnchor.appendChild(document.createTextNode(" points"));

    var commentsAnchor = document.createElement("a");
    commentsAnchor.className = ("post-comments");
    var commentsCount = document.createElement("span");
    commentsCount.className = "post-comments-count";
    commentsCount.appendChild(document.createTextNode(post.comments.length));
    commentsAnchor.appendChild(commentsCount);
    commentsAnchor.appendChild(document.createTextNode(" comments"));

    statisticsParagraph.appendChild(pointsAnchor);
    statisticsParagraph.appendChild(document.createTextNode(" · "));
    statisticsParagraph.appendChild(commentsAnchor);
    statistics.appendChild(statisticsParagraph);
    newPost.appendChild(statistics);

    var actions = document.createElement("div");
    actions.className = "post-actions";

    var vote = document.createElement("div");
    vote.className = "vote";
    var voteButtons = document.createElement("ul");
    voteButtons.className = "btn-vote";

    var likeButton = document.createElement("li");
    var likeButtonAnchor = document.createElement("a");
    likeButtonAnchor.addEventListener('click', function(e) {
        var buttonElement = e.target;
        if (e.target.tagName == "I") {
            buttonElement = e.target.parentNode;
        }
        likePostAction(buttonElement, "like");
    }, false);
    var likeIcon = document.createElement("i");
    likeIcon.className = "fa fa-thumbs-up";
    likeIcon["aria-hidden"] = "true";
    likeButtonAnchor.appendChild(likeIcon);
    likeButton.appendChild(likeButtonAnchor);
    voteButtons.appendChild(likeButton);

    var dislikeButton = document.createElement("li");
    var dislikeButtonAnchor = document.createElement("a");
    dislikeButtonAnchor.addEventListener('click', function(e) {
        var buttonElement = e.target;
        if (e.target.tagName == "I") {
            buttonElement = e.target.parentNode;
        }
        likePostAction(buttonElement, "dislike");
    }, false);
    var dislikeIcon = document.createElement("i");
    dislikeIcon.className = "fa fa-thumbs-down";
    dislikeIcon["aria-hidden"] = "true";
    dislikeButtonAnchor.appendChild(dislikeIcon);
    dislikeButton.appendChild(dislikeButtonAnchor);
    voteButtons.appendChild(dislikeButton);

    var commentButton = document.createElement("li");
    var commentButtonAnchor = document.createElement("a");
    var commentIcon = document.createElement("i");
    commentIcon.className = "fa fa-comments";
    commentIcon["aria-hidden"] = "true";
    commentButtonAnchor.appendChild(commentIcon);
    commentButton.appendChild(commentButtonAnchor);
    voteButtons.appendChild(commentButton);

    vote.appendChild(voteButtons);
    actions.appendChild(vote);

    var moreButton = document.createElement("div");
    moreButton.className = "more";
    var moreButtonAnchor = document.createElement("a");
    var moreIcon = document.createElement("i");
    moreIcon.className = "fa fa-ellipsis-h";
    moreIcon["aria-hidden"] = "true";
    moreButtonAnchor.appendChild(moreIcon);
    moreButton.appendChild(moreButtonAnchor);
    actions.appendChild(moreButton);

    var share = document.createElement("div");
    share.className = "share";
    var shareButtons = document.createElement("ul");

    var facebookButton = document.createElement("li");
    var facebookButtonAnchor = document.createElement("a");
    facebookButtonAnchor.className = "btn-share facebook";
    var facebookIcon = document.createElement("i");
    facebookIcon.className = "fa fa-facebook";
    facebookIcon["aria-hidden"] = "true";
    facebookButtonAnchor.appendChild(facebookIcon);
    facebookButtonAnchor.appendChild(document.createTextNode("Facebook"));
    facebookButton.appendChild(facebookButtonAnchor);
    shareButtons.appendChild(facebookButton);

    var twitterButton = document.createElement("li");
    var twitterButtonAnchor = document.createElement("a");
    twitterButtonAnchor.className = "btn-share twitter";
    var twitterIcon = document.createElement("i");
    twitterIcon.className = "fa fa-twitter";
    twitterIcon["aria-hidden"] = "true";
    twitterButtonAnchor.appendChild(twitterIcon);
    twitterButtonAnchor.appendChild(document.createTextNode("Twitter"));
    twitterButton.appendChild(twitterButtonAnchor);
    shareButtons.appendChild(twitterButton);

    share.appendChild(shareButtons);
    actions.appendChild(share);
    newPost.appendChild(actions);

    document.getElementById("posts-list").firstElementChild.appendChild(newPost);
}
//deni
function createHighlinedPost(post) {
    var newFeaturedPost = document.createElement("li");
    newFeaturedPost.className = "featured-item";

    var imageContainer = document.createElement("div");
    imageContainer.className = "img-container";

    var postLink = document.createElement("a");
    var image = document.createElement("img");
    image.src = post.source;

    postLink.appendChild(image);
    imageContainer.appendChild(postLink);
    newFeaturedPost.appendChild(imageContainer);

    var infoContainer = document.createElement("div");
    infoContainer.className = "info-container";

    var postTitle = document.createElement("h3");
    var postAnchor = document.createElement("a");
    postAnchor.appendChild(document.createTextNode(post.title));

    postTitle.appendChild(postAnchor);
    infoContainer.appendChild(postTitle);
    newFeaturedPost.appendChild(infoContainer);

    document.getElementById("featured-item-container").appendChild(newFeaturedPost);
}
//deni
var preloadedPostsJSON = [
    { "postId": "p0", "userId": 1, "title": "Internet Explorer RULLZZzz", "source": "assets/images/html.jpg", "points": 367, "comments": [], "publishDate": 1490567523 },
    { "postId": "p1", "userId": 1, "title": "KEEP CALM because you are the best mentor ever", "source": "assets/images/niki-pishe.jpg", "points": 728, "comments": [], "publishDate": 1490481123 },
    { "postId": "p2", "userId": 1, "title": "That's the real question", "source": "assets/images/variable.jpg", "points": 915, "comments": [], "publishDate": 1490394723 },
    { "postId": "p3", "userId": 2, "title": "We all feel the same", "source": "assets/images/doge-has-no-idea.jpg", "points": 866, "comments": [], "publishDate": 1490308323 },
    { "postId": "p4", "userId": 3, "title": "When you think you are in the right company but suddenly you find yourself in a totally different continent", "source": "assets/images/this-is-js.jpg", "points": 333, "comments": [], "publishDate": 1490221923 },
    { "postId": "p5", "userId": 4, "title": "We all make mistakes", "source": "assets/images/radeva.jpg", "points": 719, "comments": [], "publishDate": 1490135523 },
    { "postId": "p6", "userId": 2, "title": "Best book ever", "source": "assets/images/book.jpg", "points": 123, "comments": [], "publishDate": 1490049123 },
    { "postId": "p7", "userId": 2, "title": "Confused? I don't think so", "source": "assets/images/confussion.jpg", "points": 484, "comments": [], "publishDate": 1489962723 }
];


//get posts from local storage by key "post" and parse it to js objects
//local store localStorage.setItem('yourKeyName', 'your value');
// window.localStorage.setItem("post", JSON.stringify(preloadedPostsJSON));
function getAllPosts(){
    var postsJSONArr = localStorage.getItem("post");
    return JSON.parse(postsJSONArr);
}
//compare them by points (tochki)
function getPopularPosts(){
    var allPosts = getAllPosts();
//sort function sort itams of array but also camapre/sort numbers
    allPosts.sort(function(a,b){
        if(a.points < b.points)
            return 1;

        if(a.points > b.points)
            return -1;

        return 0;
    });

    return allPosts;
}
//get images by time ..can get them by seconds and miliseconds
function getRecentPosts(){
    var allPosts = getAllPosts();
//sort also by numbers
    allPosts.sort(function(a,b){
        if(a.publishDate > b.publishDate)
            return 1;

        if(a.publishDate < b.publishDate)
            return -1;

        return 0;
    });

    return allPosts;
}
//how to use local store localStorage.setItem('yourKeyName', 'your value');
    window.localStorage.setItem("post", JSON.stringify(preloadedPostsJSON));
    // document.getElementById("button-recent").addEventListener("click", loadPopularC(), false);
function searchPost(){
    var searchKey = document.getElementById("input-search").value;
    var resultPosts = searchPostsByTitle(searchKey)

    drawPosts(resultPosts);
}
//saerch images by there title and show them
function searchPostsByTitle(title){
    var allPosts = getAllPosts();
    //make empty array 
    var resultPosts = [];
    //
    for(var i = 0; i < allPosts.length; i++){
        //make them with loweCase becouse if i have Tank nad tank will not match the titles with function search
        if(allPosts[i].title.toLowerCase().search(title.toLowerCase()) >= 0){
            //add with push in the empty array push add on tail 
            resultPosts.push(allPosts[i]);
        }
    }

    return resultPosts;
}

function loadRecent(){
    //from function getRecentsPost with camapre them by time 
    var recent = getRecentPosts();
    //from function  drawPosts witch draw new posts in middle and right in the browser
    drawPosts(recent);
}
function loadPopular(){    
    var popularSortedPosts = getPopularPosts();
    //     var divPostsMainList = document.getElementById("posts");
    // var ulPostNav = document.getElementById("featured-item-container");
    // divPostsMainList.innerHTML = "";
    // ulPostNav.innerHTML = "";

    drawPosts(popularSortedPosts);
}

function drawPosts(arr){
    posts = [];

    var divPostsMainList = document.getElementById("div-posts"); 
    var ulPostNav = document.getElementById("featured-item-container");
    //empty the div with images middle and right
    divPostsMainList.innerHTML = "";
    ulPostNav.innerHTML = "";
    //iterage array with post and draw it in the miidle and in the right wit createNewpost and createHiglinedPOst
    //get them from Deni code in postsController 2 roll and 161 roll
    for (var index = 0; index < arr.length; index++) {
        post = arr[index];
        //constructor Post  in model push add new itam in array at the end ! from Deni Constructor
        posts.push(new Post(post.postId, post.userId, post.title, post.source, post.points, post.comments, post.publishDate));
        //middle
        createNewPost(posts[index]);
        //right
        createHighlinedPost(posts[index]);
    }
}

var posts = [];

//deni
function likePostAction(buttonElement, action) {
    var currentPost = getPostFromButtonPress(buttonElement);
    if (action == "like") {
        if (buttonElement.parentNode.parentNode.getElementsByTagName("li")[1].firstElementChild.className) {
            buttonElement.parentNode.parentNode.getElementsByTagName("li")[1].firstElementChild.removeAttribute("class");
            currentPost.points++;
        }
        updateButton(buttonElement) ? currentPost.points++ : currentPost.points--;
    } else {
        if (buttonElement.parentNode.parentNode.getElementsByTagName("li")[0].firstElementChild.className) {
            buttonElement.parentNode.parentNode.getElementsByTagName("li")[0].firstElementChild.removeAttribute("class");
            currentPost.points--;
        }
        updateButton(buttonElement) ? currentPost.points-- : currentPost.points++;
    }
    updatePointsCount(buttonElement, currentPost.points);
}
//deni
function getPostFromButtonPress(buttonElement) {
    var postId = getPostIdFromButtonElement(buttonElement);

    var post = posts.find(function(post) {
        return post.postId == postId
    })

    return post;
}
//deni
function getPostIdFromButtonElement(buttonElement) {
    return buttonElement.parentNode.parentNode.parentNode.parentNode.parentNode.id;
}
//deni
function updatePointsCount(buttonElement, newPoints) {
    var postId = getPostIdFromButtonElement(buttonElement);
    var pointsCount = document.querySelector("article#" + postId + " .post-statistics .post-points-count");
    pointsCount.innerHTML = newPoints;
}
//deni
function updateButton(buttonElement) {
    if (buttonElement.tagName == "I") {
        buttonElement = buttonElement.parentNode;
    }

    if (buttonElement.className == "clicked") {
        buttonElement.removeAttribute("class");
        return false;
    } else {
        buttonElement.setAttribute("class", "clicked");
        return true;
    }
}