document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    // Grab input values
    const username = document.getElementById('username').value;
    const blogTitle = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // No empty input check
    if (!username || !blogTitle || !content) {
        alert('Mate you gotta fill out all the fields.');
        return;
    }

    // Blog Post Object
    const blogPost = {
        username,
        title: blogTitle,
        content
    };

    // Grab existing blog post from localStorage or create an empty array
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Add the newly created blog post to the array
    blogPosts.push(blogPost);

    // Store the updated blog posts array in the users localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // redirect user to blog html page
    location.href = 'blog.html';
});
