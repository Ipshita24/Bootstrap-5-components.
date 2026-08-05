// Bootstrap Learning Hub JS

// Current Year (if you add a span with id="year")
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Navbar Shadow on Scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});

// Form Validation

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const course = form.querySelector("select");
    const message = form.querySelector("textarea");

    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      course.selectedIndex === 0 ||
      message.value.trim() === ""
    ) {
      alert("Please fill in all fields.");

      return;
    }

    alert("🎉 Registration Successful!");

    form.reset();
  });
}

// Card Hover Animation

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Button Ripple Effect

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");

    const diameter = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = diameter + "px";

    circle.style.left = e.offsetX - diameter / 2 + "px";

    circle.style.top = e.offsetY - diameter / 2 + "px";

    circle.classList.add("ripple");

    const ripple = this.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    this.appendChild(circle);
  });
});

const revealElements = document.querySelectorAll(".card, section, .hero");

const reveal = () => {
  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;

    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);

reveal();

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

const carousel = document.querySelector("#slider");

if (carousel) {
  new bootstrap.Carousel(carousel, {
    interval: 3000,

    ride: "carousel",

    pause: false,

    wrap: true,
  });
}

console.log("Bootstrap Learning Hub Loaded Successfully 🚀");
