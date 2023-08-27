// Get references to form and result div
const contactForm = document.getElementById("contactForm");
const resultDiv = document.getElementById("result");

// Add event listener for form submission
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    
    // Get form data
    const formData = new FormData(contactForm);
    
    // Display collected data in the result div
    resultDiv.innerHTML = `
        <h3>Submitted Data:</h3>
        <p><strong>Name:</strong> ${formData.get("name")}</p>
        <p><strong>Email:</strong> ${formData.get("email")}</p>
        <p><strong>Message:</strong> ${formData.get("message")}</p>
    `;
    
    // Clear the form fields
    contactForm.reset();
});
