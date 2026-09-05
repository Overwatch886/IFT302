const track = document.querySelector(".project-track");
const images = document.querySelectorAll(".project-card img");

let currentProject = 0;

setInterval(() => {
    currentProject++;

    if (currentProject >= images.length) {
        currentProject = 0;
    }

    track.style.transform =
        `translateX(-${currentProject * 100}%)`;
}, 4000);

images.forEach((image) => {
    image.addEventListener("click", () => {
        image.classList.toggle("zoomed");
    });
});

// // Form Validation and Submission successful pop up message
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");




contactForm.addEventListener("submit", (event)=>{
    
    event.preventDefault();
    // Form Validation
     if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }
    else {
        successMessage.classList.add('show');
        contactForm.reset();
        setTimeout(() => {
            successMessage.classList.remove("show");
        },5000);
    }

});
    
