document.addEventListener("DOMContentLoaded", function() {
    const text = "Hey, I'm Vanessa! :)";
    let index = 0;
    const typingSpeed = 75; // typing speed in milliseconds
    const deletingSpeed = 50; // deleting speed in milliseconds
    const pauseAfterTyping = 1000; // pause time after typing in milliseconds
    const pauseAfterDeleting = 300; // pause time after deleting in milliseconds
    const typingTextElement = document.getElementById("typing-text"); // Select the element with ID 'typing-text'
  
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function typeWriter() {
        if (index < text.length) {
          typingTextElement.innerHTML += text.charAt(index);
          index++;
          if (!prefersReducedMotion) {
            setTimeout(typeWriter, typingSpeed);
          } else {
            typeWriter(); // Instantly add next character if animations are disabled
          }
        } else {
          setTimeout(deleteWriter, pauseAfterTyping);
        }
      }
    
      function deleteWriter() {
        if (index > 0) {
          typingTextElement.innerHTML = text.substring(0, index - 1);
          index--;
          if (!prefersReducedMotion) {
            setTimeout(deleteWriter, deletingSpeed);
          } else {
            deleteWriter(); // Instantly delete character if animations are disabled
          }
        } else {
          setTimeout(typeWriter, pauseAfterDeleting);
        }
      }
  
    typeWriter();
  });
  