function openTutorPage() {
    window.location.href = "tutor.html"; // Opens tutor.html in the same tab
}
document.getElementById("btn1").addEventListener("click", openTutorPage);

function openLessonsPage() {
    window.location.href = "lessons.html"; // Opens lessons.html in the same tab
}
document.getElementById("btn2").addEventListener("click", openLessonsPage);

function startSlideshowOnHover(buttonId, images) {
    let index = 0;
    const button = document.getElementById(buttonId);
    let interval;

    // Set initial background image
    button.style.backgroundImage = `url('${images[index]}')`;

    function changeImage() {
        index = (index + 1) % images.length;
        button.style.backgroundImage = `url('${images[index]}')`;
    }

    // Start slideshow on hover
    button.addEventListener("mouseenter", () => {
        interval = setInterval(changeImage, 1500); // 1.5s transition
    });

    // Stop slideshow and reset to first image when mouse leaves
    button.addEventListener("mouseleave", () => {
        clearInterval(interval);
        button.style.backgroundImage = `url('${images[0]}')`;
    });
}

// Using Google Photos URLs for each button’s slideshow
startSlideshowOnHover("btn1", ["Pics/ai1.jpg", "Pics/ai2.jpg", "Pics/ai3.jpg"]);

startSlideshowOnHover("btn2", ["Pics/vd1.jpg", "Pics/vd2.jpg", "Pics/vd3.jpg"]);

startSlideshowOnHover("btn3", ["Pics/pdf1.jpg", "Pics/pdf2.jpg", "Pics/pdf3.jpg"]);
