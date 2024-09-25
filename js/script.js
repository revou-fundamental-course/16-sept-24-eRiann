// Display current time
document.getElementById('currentTime').innerText = new Date().toLocaleString();

// Form submit handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;
    
    // Display values
    document.getElementById('outputName').innerText = name;
    document.getElementById('outputDate').innerText = date;
    document.getElementById('outputGender').innerText = gender;
    document.getElementById('outputMessage').innerText = message;
});
