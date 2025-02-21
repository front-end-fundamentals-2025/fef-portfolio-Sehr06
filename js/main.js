document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) 
    {event.preventDefault();
        document.getElementById("message").textContent = "Thank you!";
    });
});