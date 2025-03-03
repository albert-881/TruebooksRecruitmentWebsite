document.addEventListener("DOMContentLoaded", () => {
    // Word-changing effect
    const words = document.querySelectorAll("#company-description .word");
    let index = 0;

    // Check if words exist before running the effect
    if (words.length > 0) {
        function changeWord() {
            // Remove active class from all words
            words.forEach(word => word.classList.remove("active"));

            // Add active class to the current word
            words[index].classList.add("active");

            // Move to the next word (loop back to the first word)
            index = (index + 1) % words.length;
        }

        setInterval(changeWord, 1500);
    } else {
        console.warn("No words found in #company-description.");
    }

    
});
