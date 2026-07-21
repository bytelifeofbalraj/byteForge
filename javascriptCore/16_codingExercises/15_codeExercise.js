// for now assuming that all are returing promise, just for practice, I am not implimenting fetch reqeusts in these functions for now.

function fetchUser() {
  /* returns  Promise */
}
function fetchPosts() {
  /* returns Promise */
}
function fetchComments() {
  /* returns Promise */
}

Promise.all([fetchUser(), fetchPosts(), fetchComments()])
  .then(([user, posts, comments]) => {
    console.log(User);
    console.log(posts);
    console.log(comments);
  })
  .catch((error) => {
    console.log(error);
  });
