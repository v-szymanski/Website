document.addEventListener("DOMContentLoaded", function() {
    const fadeIns = document.querySelectorAll('.fade-in');
  
    function debounce(func, wait = 10, immediate = true) {
      let timeout;
      return function() {
        const context = this, args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
  
    function checkFadeIns() {
      fadeIns.forEach(fadeIn => {
        const top = fadeIn.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (top < windowHeight) {
          setTimeout(() => {
            fadeIn.classList.add('visible');
          }, 50); // Add a 50ms delay before applying the class
        }
      });
    }
  
    // Check on page load
    checkFadeIns();
  
    // Check when scrolling, with debouncing
    document.addEventListener('scroll', debounce(checkFadeIns));
  });
  