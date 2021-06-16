// callback

// console.log("Hi");

// setTimeout(function () {
//   console.log("come in");
// }, 5000);

// console.log("drink water");
// end of callbacks

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

function createPosts(newPost, callback) {
  setTimeout(() => {
    posts.push(newPost);
    callback();
  }, 5000);
}

createPosts({ title: "post three", body: "this is post three" }, getPosts);
