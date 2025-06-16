document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener("click", function (event) {
      const hash = this.getAttribute("href");
      if (hash.length > 1 && document.querySelector(hash)) {
        event.preventDefault();
        document.querySelector(hash).scrollIntoView({
          behavior: "smooth"
        });
        // Optionally update the URL hash
        history.pushState(null, null, hash);
      }
    });
  });
});