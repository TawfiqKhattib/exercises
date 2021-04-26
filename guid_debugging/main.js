const posts = [{
        id: 1,
        text: "Love this product",
        comments: []
    },
    {
        id: 2,
        text: "This is the worst. DON'T BUY!",
        comments: [
            { id: 1, text: "Idiot has no idea" },
            { id: 2, text: "Fool!" },
            { id: 3, text: "I agree!" }
        ]
    },
    {
        id: 3,
        text: "So glad I found this. Bought four already!",
        comments: []
    }
]
const removeComment = function(postId, commentId) {
    for (post in posts) {
        if (posts[post].id === postId) {
            removeCommentFromPost(posts[post], commentId);
        }
    }
}
const removeCommentFromPost = function(post, commentId) {
    for (let i = 0; i < post.comments.length; i++) {
        if (post.comments[i].id === commentId) {
            delete post.comments[i]
        }
    }
}
removeComment(2, 3)