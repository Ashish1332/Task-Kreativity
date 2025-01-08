document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const servicesContainer = document.querySelector('.service-container');
const services = document.querySelectorAll('.service');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= services.length) {
    currentIndex = 0;
  }
  updateServices();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = services.length - 1;
  }
  updateServices();
});

function updateServices() {
  services.forEach((service, index) => {
    if (index === currentIndex) {
      service.style.display = 'block';
    } else {
      service.style.display = 'none';
    }
  });
}

// Initial display
updateServices();
document.querySelector(".appointment-btn").addEventListener("mouseover", () => {
    console.log("Hovered on the button!"); // Optional animation logging
  });
  
  document.querySelector(".appointment-btn").addEventListener("click", () => {
    alert("Appointment button clicked!"); 
  });
// Testimonial navigation logic
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function updateTestimonials() {
  cards.forEach((card, index) => {
    card.style.display = index === currentIndex ? "block" : "none";
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateTestimonials();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateTestimonials();
});

// Initialize
updateTestimonials();



