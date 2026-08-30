async function userInfo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    const data = await response.json();
    console.log(data.name);
  } catch {
    console.log("Something went wrong");
  }
}

userInfo();
