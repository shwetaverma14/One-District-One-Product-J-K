// script.js

// Function to handle form submission
function submitForm() {
    // Get the form element
    const form = document.querySelector('form');
    
    // Check if the form is valid
    if (form.checkValidity()) {
        // Submit the form
        form.submit();
        alert('Form submitted successfully!');
    } else {
        // If the form is not valid, show an error message
        alert('Please fill out all required fields correctly.');
    }
}

// Add event listener to the submit button
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.btn');
    if (submitButton) {
        submitButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default form submission
            submitForm(); // Call the submitForm function
        });
    }
});