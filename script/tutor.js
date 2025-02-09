function openPerplexity() {
    window.open("https://www.perplexity.ai/", "_blank"); // Opens Perplexity AI in a new tab
}

// Get elements
const videoBtn = document.getElementById("videoBtn");
const modal = document.getElementById("videoModal");
const closeBtn = document.querySelector(".close");
const youtubeVideo = document.getElementById("youtubeVideo");

// Open modal when button is clicked
videoBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close modal when 'X' is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    stopVideo();
});

// Close modal when clicking outside video
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        stopVideo();
    }
});

// Stop video when closing modal
function stopVideo() {
    youtubeVideo.src = youtubeVideo.src;
}

// Close modal on ESC key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
        stopVideo();
    }
});