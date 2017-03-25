/*
var postId;

// If using query parameter

(function() {
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        postId = value;
    });
})();


function getPost(postId) {
    return JSON.parse(window.localStorage.getItem("posts")).find(function(post) {
        return post.postId == postId
    });
}

var currPost = getPost(postId);
*/

var currPost = JSON.parse(window.sessionStorage.getItem("currentPost"));

document.getElementById("post-title-text").innerHTML = currPost.title;
document.getElementById("post-points-text").innerHTML = currPost.points;
document.getElementById("post-comments-text").innerHTML = currPost.comments.length;
document.getElementById("comments-cout-text").innerHTML = currPost.comments.length;
document.getElementById("post-image-source").src = currPost.source;
document.getElementById("post-image-source").alt = currPost.title;