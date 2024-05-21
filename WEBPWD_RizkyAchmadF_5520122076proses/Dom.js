var scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", function() {
 
  if (window.scrollY > 400) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});


scrollToTopBtn.addEventListener("click", function() {
  
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
});