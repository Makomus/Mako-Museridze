document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("header-js");
  let scrollPosition = window.scrollY;

  window.addEventListener("scroll", function () {
    scrollPosition = window.scrollY;

    if (scrollPosition > 50) { 
      header.style.backgroundColor = "rgb(34, 34, 34, 0.95)"; 
    } else {
      header.style.backgroundColor = "rgb(26, 30, 31)"; 
    }
  });
});
      
  
