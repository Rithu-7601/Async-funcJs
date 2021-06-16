// http request

// const request = new XMLHttpRequest();
// request.open("GET", "https://jsonplaceholder.typicode.com/users"); initialise our req
// request.send(); initiate the process
// still now u can view only in networks tab, to view in console tab use request.onload method
// request.onload = () => {
//   console.log(request);
//   if (request.status === 200) {
//     console.log(JSON.parse(request.response));
//   } else {
//     console.log(`error ${request.status}`);
//   }
// };
// end
// -------------------------------------------------
// fetch api

// 1st approach
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   });

//  2nd approach
async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
}
getUsers().then((response) => {
  console.log(response);
});
