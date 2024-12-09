// Handle Major Selection
document.getElementById('major-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const selectedMajor = document.getElementById('major').value;
    document.getElementById('major-selection-result').innerText = `You have selected: ${selectedMajor}`;
    // Go back to the homepage
    setTimeout(function() {
        window.location.href = 'index.html'; // Redirect after selection
    }, 2000);
});

// Edit Profile functionality
document.getElementById('edit-profile').addEventListener('click', function () {
    const name = prompt("Enter your name:", document.getElementById('profile-name').innerText);
    const major = prompt("Enter your major:", document.getElementById('profile-major').innerText);

    if (name) document.getElementById('profile-name').innerText = name;
    if (major) document.getElementById('profile-major').innerText = major;
});

// Forum Post Submission
document.getElementById('forum-post-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value;

    const postElement = document.createElement('div');
    postElement.classList.add('forum-post');
    postElement.innerHTML = `<h3>${postTitle}</h3><p>${postContent}</p>`;
    document.getElementById('forum-posts').appendChild(postElement);

    // Clear the form after posting
    document.getElementById('forum-post-form').reset();
});
