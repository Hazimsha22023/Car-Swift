window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})

document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Replace "https://example.com" with the URL you want to redirect to
    window.location.href = "message.html";
});

