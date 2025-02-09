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

startSlideshowOnHover("btn2", [
    "https://photos.google.com/photo/AF1QipPjo8fQcTKwH4PlDXR_By7HORpJqNZ_HkpLDYSa",
    "https://photos.google.com/photo/AF1QipP9Ve7VFvYFa8t-pyMlaluWcCFCsrwaDwA0Uofh",
    "https://photos.google.com/photo/AF1QipMoObhSDsQ8AZcRkrFLkAdxYrvS2F-5xevLee5W"
]);

startSlideshowOnHover("btn3", [
    "https://photos.google.com/photo/AF1QipO1FtvbuhqIxlgmmuaiKiCHe99NnZbZqFxahm1V",
    "https://photos.google.com/photo/AF1QipPTeGEX330gHODLztstEMEyddjhB2lGMF1m4Eic",
    "https://photos.google.com/photo/AF1QipO7sHFud_smjZwYcE1-f9_oJw2yRDz_GCHZaZoQ"
]);