// Typed.js initialization
var typed = new Typed('#element', {
    strings: ['<i>Web developer</i> Graphic  designer.'],
    typeSpeed: 50,
});

// Form validation function
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
        alert('Please fill in all fields.');
        return false;
    }

    return true;
}

// Function to display dynamic content
function displayContent() {
    var dynamicContent = "<h1>Dynamic Content</h1><p>This is dynamically generated content.</p>";
    document.getElementById('dynamic-content').innerHTML = dynamicContent;
}