

// const username = localStorage.getItem("username");
// const blogTitle = localStorage.getItem("title");
// const content = localStorage.getItem("content");

// console.log(username, blogTitle, content);

const username = document.createElement('h2').textContent(localStorage.getItem('username'));
console.log(username);
const title = document.createElement('h3')
const content = document.createElement('p');