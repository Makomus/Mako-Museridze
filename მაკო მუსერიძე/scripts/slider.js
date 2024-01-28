let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
    slides[i].classList.remove("active");
  }

  dots[slideIndex - 1].classList.add("active");
  slides[slideIndex - 1].classList.add("active");
  
}

function resetInterval() {
  clearInterval(slideInterval); 
  startInterval(); 
}

let slideInterval;

function startInterval() {
  slideInterval = setInterval(nextSlide, 3000); 
}

startInterval();
