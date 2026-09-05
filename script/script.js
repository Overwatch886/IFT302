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
const checkmark = document.getElementById("message_status_mark");
const statusText = document.getElementById("message_status_text");

function showStatus(text, type) {
        statusText.textContent = text;
        successMessage.className = `feedback ${type}`;
        successMessage.classList.add("show");

        checkmark.textContent = type === "success" ? "✓" : "!";
        setTimeout(() => {
            successMessage.classList.remove("show");
        },5000);
    }

contactForm.addEventListener("submit", async (event)=>{
    
    event.preventDefault();
    // Form Validation
     if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }
    const formData = new FormData(contactForm);
    try {
        const response = await fetch("https://formspree.io/f/xkjnvwoy", {
            method: "POST",
            body: new FormData(contactForm),
            headers: {
                Accept: "application/json"
            }
        });

        const result = await response.json();

        console.log("Formspree status:", response.status);
        console.log("Formspree response:", result);

        if (!response.ok) {
                throw new Error(result.error);
            }
        // If the forms server return an okay response, a success message is shown
        showStatus("Message sent successfully!", "success");
        contactForm.reset();
        
        }

    catch (error){
        console.error("Submission error:", error);
        showStatus("Message could not be sent. Try again later", "error");
    }
    
    

});

