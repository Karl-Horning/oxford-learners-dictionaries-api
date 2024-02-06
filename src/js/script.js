/**
 * Automatically plays audio when elements with the class "pron-gs" are clicked.
 *
 * @function
 * @returns {void}
 */
(() => {
    // Wait for the DOM content to be loaded before executing the script
    document.addEventListener("DOMContentLoaded", () => {
        // Get all elements with class "pron-gs"
        const pronElements = document.querySelectorAll(".pron-gs");

        // Iterate through each "pron-gs" element
        pronElements.forEach((element) => {
            // Add click event listener to each "pron-gs" element
            element.addEventListener("click", () => {
                // Find the audio element within this "pron-gs" element
                const audioElement = element.querySelector("audio");

                // If an audio element is found
                if (audioElement) {
                    // Pause any other playing audio elements
                    document.querySelectorAll("audio").forEach((audio) => {
                        if (audio !== audioElement && !audio.paused) {
                            audio.pause();
                        }
                    });

                    // Attempt to play the audio
                    audioElement.play().catch((error) => {
                        console.error("Failed to play audio:", error);
                    });

                    // Add CSS class to indicate audio is playing
                    element.classList.add("audio-playing");

                    // Remove CSS class when audio playback ends
                    audioElement.addEventListener("ended", () => {
                        element.classList.remove("audio-playing");
                    });
                }
            });
        });
    });
})();
