document.addEventListener("DOMContentLoaded", () => {
    // Scroll effect for header
    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Word-changing effect
    const words = document.querySelectorAll('.word');
    let currentIndex = 0;

    // Initialize all words to be invisible except the first one
    words.forEach((word, index) => {
        if (index !== 0) {
            word.style.opacity = 0;
        }
    });

    function changeWord() {
        // Fade out the current word
        words[currentIndex].style.opacity = 0;

        // Move to the next word, and wrap around to the first if we reach the last word
        currentIndex = (currentIndex + 1);

        // Fade in the next word
        words[currentIndex].style.opacity = 1;
    }

    // Change word every second (adjustable)
    setInterval(changeWord, 1000);
});
