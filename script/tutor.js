// Get elements
const videoBtn = document.getElementById("videoBtn");
const modal = document.getElementById("videoModal");
const closeBtn = document.querySelector(".close");
const localVideo = document.getElementById("localVideo");

// Open modal when button is clicked
videoBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    localVideo.play(); // Start playing when modal opens
});

// Close modal when 'X' is clicked
closeBtn.addEventListener("click", () => {
    closeModal();
});

// Close modal when clicking outside the video
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on ESC key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

// Function to close modal and stop video
function closeModal() {
    modal.style.display = "none";
    localVideo.pause(); // Pause video when modal closes
    localVideo.currentTime = 0; // Reset video to the start
}
