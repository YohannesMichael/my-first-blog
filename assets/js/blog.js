// Retrieve existing blog posts from localStorage or create an empty array
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// grabbing the main element to append blog posts into
const main = document.querySelector('main');

// creating a header element for blog post
const blogHeader = document.createElement('h2');
blogHeader.textContent = 'Blog Posts';
main.appendChild(blogHeader);
