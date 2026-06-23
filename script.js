// Console check
console.log("Portfolio script active");

// --- MOBILE NAVIGATION BAR ---
const menuIcon = document.getElementById("menu-icon");
const navlist = document.querySelector(".navlist");

if (menuIcon && navlist) {
  menuIcon.addEventListener("click", () => {
    navlist.classList.toggle("open");
    // Toggle between hamburger menu icon and X icon
    if (menuIcon.classList.contains("bx-menu")) {
      menuIcon.classList.replace("bx-menu", "bx-x");
    } else {
      menuIcon.classList.replace("bx-x", "bx-menu");
    }
  });

  // Close mobile menu when clicking a link
  const navLinks = document.querySelectorAll(".navlist a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navlist.classList.remove("open");
      menuIcon.classList.replace("bx-x", "bx-menu");
    });
  });
}

// --- STICKY HEADER ON SCROLL ---
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 50);
  }
  
  // Update active section link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navlist a");
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= (sectionTop - 150)) {
      currentSectionId = section.getAttribute("id");
    }
  });

  if (currentSectionId) {
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }
});

// --- TYPEWRITER EFFECT IN HERO SECTION ---
const typingTextElement = document.getElementById("typing-text");
if (typingTextElement) {
  const phrases = ["AI Agents", "Python Full Stack", "RAG Pipelines", "SFT/RLHF Systems", "FastAPI Backends", "Intelligent Solutions"];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50; // Speed up deleting
    } else {
      typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 120; // Default typing speed
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typeSpeed = 1500; // Pause at end of phrase
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 400; // Pause before typing next phrase
    }

    setTimeout(typeEffect, typeSpeed);
  }

  // Start the typewriter effect
  setTimeout(typeEffect, 500);
}

// --- TOGGLE FOR ABOUT SECTION (INLINE CALLBACK) ---
function abouttoggle() {
  const aboutPara = document.getElementById("about-para");
  const showMoreBtn = document.querySelector(".about-text .orangebutton");
  if (aboutPara) {
    if (aboutPara.style.display === "none" || aboutPara.style.display === "") {
      aboutPara.style.display = "block";
      if (showMoreBtn) showMoreBtn.textContent = "Show Less";
    } else {
      aboutPara.style.display = "none";
      if (showMoreBtn) showMoreBtn.textContent = "Show More";
    }
  }
}

// --- TOGGLE FOR EXPERTISE / SERVICES DETAILS (INLINE CALLBACKS) ---
function Servicewebtoggle() {
  const servicePara = document.getElementById("servide-webpara");
  const readMoreBtn = document.querySelector(".box:nth-child(1) .read");
  if (servicePara) {
    if (servicePara.style.display === "none" || servicePara.style.display === "") {
      servicePara.style.display = "block";
      if (readMoreBtn) readMoreBtn.textContent = "Read Less";
    } else {
      servicePara.style.display = "none";
      if (readMoreBtn) readMoreBtn.textContent = "Read Details";
    }
  }
}

function programmingtoggle() {
  const programmingPara = document.getElementById("Programming-para");
  const readMoreBtn = document.querySelector(".box:nth-child(2) .read");
  if (programmingPara) {
    if (programmingPara.style.display === "none" || programmingPara.style.display === "") {
      programmingPara.style.display = "block";
      if (readMoreBtn) readMoreBtn.textContent = "Read Less";
    } else {
      programmingPara.style.display = "none";
      if (readMoreBtn) readMoreBtn.textContent = "Read Details";
    }
  }
}

function fullstacktoggle() {
  const fullstackPara = document.getElementById("fullstack-para");
  const readMoreBtn = document.querySelector(".box:nth-child(4) .read");
  if (fullstackPara) {
    if (fullstackPara.style.display === "none" || fullstackPara.style.display === "") {
      fullstackPara.style.display = "block";
      if (readMoreBtn) readMoreBtn.textContent = "Read Less";
    } else {
      fullstackPara.style.display = "none";
      if (readMoreBtn) readMoreBtn.textContent = "Read Details";
    }
  }
}

// --- TIMELINE ACCORDION TOGGLE (TURING SUB-PROJECTS) ---
document.addEventListener("DOMContentLoaded", () => {
  const accHeaders = document.querySelectorAll(".acc-header");
  accHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const accItem = header.parentElement;
      accItem.classList.toggle("active");
    });
  });
});

// --- RESUME SECTIONS TOGGLE (INLINE CALLBACK ON resume.Html) ---
function displayContent(element) {
  const parentDiv = element.parentElement;
  if (parentDiv) {
    parentDiv.classList.toggle("active");
  }
}
