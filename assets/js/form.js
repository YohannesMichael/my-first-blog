// console.log(username);
document.getElementById('submit').addEventListener('click', function(event) {
    const submitEl = document.getElementById('submit');
    const username = document.getElementById('username').value;
    const blogTitle = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    event.preventDefault();
    console.log(username);

    const postData = {
        username: username,
        title: blogTitle,
        content: content
    }

    location.href = "blog.html"

    console.log(postData);
});