document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simulate form submission (you can replace this with an actual AJAX request)
        setTimeout(function () {
            contactForm.reset();
            confirmationMessage.style.display = "block";
            setTimeout(function () {
                confirmationMessage.style.display = "none";
            }, 5000); // Hide confirmation message after 5 seconds
        }, 1000); // Simulate processing delay (1 second)
    });
});
