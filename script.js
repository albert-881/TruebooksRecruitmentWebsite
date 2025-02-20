document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll('.word');
    let currentIndex = 0;

    // Initialize all words to be invisible except the first one
    words.forEach((word, index) => {
        if (index !== 0) {
            word.style.opacity = 0;
        } else {
            word.style.opacity = 1;
        }
    });

    // Function to change the word
    function changeWord() {
        // Fade out the current word
        words[currentIndex].style.opacity = 0;

        // Move to the next word, and wrap around to the first if we reach the last word
        currentIndex = (currentIndex + 1);

        // Fade in the next word
        words[currentIndex].style.opacity = 1;
    }

    // Change word every second
    setInterval(changeWord, 1000);
});
