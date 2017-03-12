function createNewPost(post) {
    var newPost = document.createElement("article");
    newPost.className = "post";

    var postHeader = document.createElement("header");
    var headerContainer = document.createElement("h2");
    var postTitle = document.createElement("a");
    postTitle.appendChild(document.createTextNode(post.title));
    headerContainer.appendChild(postTitle);
    postHeader.appendChild(headerContainer);
    newPost.appendChild(postHeader);

    var postContent = document.createElement("div");
    postContent.className = "post-content";
    var mediaContainer = document.createElement("div");
    mediaContainer.className = "media-container";
    var mediaAnchor = document.createElement("a");
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
    pointsAnchor.className = ("post-points");
    var pointsCount = document.createElement("span");
    pointsCount.className = "post-points-count";
    pointsCount.appendChild(document.createTextNode(post.points));
    pointsAnchor.appendChild(pointsCount);
    pointsAnchor.appendChild(document.createTextNode(" points"));

    var commentsAnchor = document.createElement("a");
    commentsAnchor.className = ("post-comments");
    var commentsCount = document.createElement("span");
    commentsCount.className = "post-points-count";
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
    var likeIcon = document.createElement("i");
    likeIcon.className = "fa fa-thumbs-up";
    likeIcon["aria-hidden"] = "true";
    likeButtonAnchor.appendChild(likeIcon);
    likeButton.appendChild(likeButtonAnchor);
    voteButtons.appendChild(likeButton);

    var dislikeButton = document.createElement("li");
    var dislikeButtonAnchor = document.createElement("a");
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

/* Create some posts */
var postsData = [
    [1, "Internet Explorer RULLZZzz", "assets/images/html.jpg"],
    [1, "KEEP CALM because you are the best mentor ever", "assets/images/niki-pishe.jpg"],
    [2, "That's the real question", "assets/images/variable.jpg"],
    [3, "We all feel the same", "assets/images/doge-has-no-idea.jpg"],
    [2, "When you think you are in the right company but suddenly you find yourself in a totally different continent", "assets/images/this-is-js.jpg"],
    [1, "We all make mistakes", "assets/images/radeva.jpg"],
    [2, "Best book ever", "assets/images/book.jpg"],
    [1, "Confused? I don't think so", "assets/images/confussion.jpg"]
];

var posts = [];

for (var index = 0; index < postsData.length; index++) {
    post = postsData[index];
    posts.push(new Post(post[0], post[1], post[2]));
    createNewPost(posts[index]);
    createHighlinedPost(posts[index]);
}



/* Create some comments */
var comments = [];

console.log(users);
console.log(posts);