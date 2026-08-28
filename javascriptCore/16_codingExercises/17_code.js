/*
Write an async function that:

Fetches the user.
Fetches that user's posts.
Prints:
the user's name
the number of posts returned
If any request fails, handle the error gracefully.
*/

// as both requests are independent and required I can execute both requests parallal.

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1");
}

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
}

async function UserData(requests) {
  const [fetchUser, fetchPosts] = requests;
  try {
    const responseArr = await Promise.all([fetchUser(), fetchPosts()]);

    const [user, posts] = responseArr;
    const userData = await user.json();
    const userPosts = await posts.json();

    console.log(userData.name);
    console.log(userPosts.length);
  } catch (error) {
    console.log("one of the reqeust failed", error);
  }
}

UserData([fetchUser, fetchPosts]);
