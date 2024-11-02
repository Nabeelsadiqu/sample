document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation and response
    if (name && email && message) {
        document.getElementById('formResponse').innerText = 'Thank you for reaching out!';
    } else {
        document.getElementById('formResponse').innerText = 'Please fill in all fields.';
    }
});

function showDetails(apartmentId) {
    alert(`Showing details for Apartment ${apartnmentId}`);
}
