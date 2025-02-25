document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll("#company-description .word");
    let index = 0;

    // Word Changing Effect
    function changeWord() {
        // Remove active class from all words
        words.forEach(word => word.classList.remove("active"));
        
        // Add active class to the current word
        words[index].classList.add("active");
        
        // Move to the next word (loop back to the first word)
        index = (index + 1);
    }

    setInterval(changeWord, 1500);

    // Typing Effect for Tagline
    const phrases = ["Modern Solutions for Your Business Needs", "Helping You Grow", "Reliable & Efficient Services"];
    let i = 0, j = 0, currentPhrase = [], isDeleting = false;

    function typeEffect() {
        if (!isDeleting && j < phrases[i].length) {
            currentPhrase.push(phrases[i][j++]);
        } else if (isDeleting && j >= 0) {
            currentPhrase.pop();
            j--;
        }
        document.getElementById("typing-effect").textContent = currentPhrase.join("");
        if (!isDeleting && j === phrases[i].length) isDeleting = true;
        else if (isDeleting && j === 0) isDeleting = false, i = (i + 1) % phrases.length;
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
});
