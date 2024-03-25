// Retrieve existing blog posts from localStorage or create an empty array
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// grabbing the main element to append blog posts into
const main = document.querySelector('main');

// creating a header element for blog post
const blogHeader = document.createElement('h2');
blogHeader.textContent = 'Blog Posts';
main.appendChild(blogHeader);

// Looping through blog posts and creating elements for each post
blogPosts.forEach(post => {
    const postDiv = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = post.title;
    postDiv.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `Author: ${post.username}`;
    postDiv.appendChild(author);

    const content = document.createElement('p');
    content.textContent = post.content;
    postDiv.appendChild(content);

    main.appendChild(postDiv);
});