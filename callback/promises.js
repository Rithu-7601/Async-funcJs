const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((anything, index) => {
      output += `<li>${anything.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}

function createPosts(newPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);

      const error = false;
      //   try the above line with true or false

      if (!error) {
        resolve();
      } else {
        reject("error: Something went wrong");
      }
    }, 5000);
  });
}
// createPosts({ title: "post three", body: "this is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// async-await
// async function init() {
//   await createPosts({ title: "post three", body: "this is post three" });

//   getPosts();
// }
// init();

// ASYNC/AWAIT/FETCH

async function fetchUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  console.log(data);
}
fetchUsers();
// promise.all
// const promise1 = Promise.resolve("hello everyone");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "goodbye")
// );
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
//   console.log(values);
// });
