document.getElementById("orderButton").addEventListener("click", function() {
    window.location.href = "your-order-page-link.html"; // Replace with your actual order page link
});



function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Thanks, ${name}! Your message has been sent. We'll get back to you soon.`);
  
  // Optionally, clear the form fields
  document.getElementById("contact-form").reset();
}