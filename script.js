/* ===============================
NAVBAR ACTIVE SECTION
================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop - 200){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});


/* ===============================
SCROLL REVEAL ANIMATION
================================*/

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

const hiddenElements = document.querySelectorAll(".section");

hiddenElements.forEach(el => observer.observe(el));



/* ===============================
ANIMATED PERFORMANCE COUNTERS
================================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const current = +counter.innerText;

const increment = target / 150;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(updateCounter, 15);

}else{

counter.innerText = target;

}

};

updateCounter();

});


/* ===============================
REACTOR PIPELINE INTERACTION
================================*/

const stages = document.querySelectorAll(".stage");

stages.forEach(stage => {

stage.addEventListener("mouseenter", () => {

stage.style.transform = "scale(1.1)";
stage.style.background = "#16a34a";

});

stage.addEventListener("mouseleave", () => {

stage.style.transform = "scale(1)";
stage.style.background = "#2563eb";

});

});


/* ===============================
IMAGE / DIAGRAM MODAL VIEWER
================================*/

const images = document.querySelectorAll(".diagram");

const modal = document.createElement("div");
modal.classList.add("modal");

const modalImg = document.createElement("img");
modal.appendChild(modalImg);

document.body.appendChild(modal);

images.forEach(img => {

img.addEventListener("click", () => {

modal.style.display = "flex";
modalImg.src = img.src;

});

});

modal.addEventListener("click", () => {

modal.style.display = "none";

});


/* ===============================
SCROLL PROGRESS BAR
================================*/

const progressBar = document.createElement("div");
progressBar.classList.add("progress-bar");

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

const scrollTop = window.scrollY;
const docHeight = document.body.scrollHeight - window.innerHeight;

const progress = (scrollTop / docHeight) * 100;

progressBar.style.width = progress + "%";

});


/* ===============================
EXPANDABLE TECHNICAL DETAILS
================================*/

const expandBtns = document.querySelectorAll(".expand-btn");

expandBtns.forEach(btn => {

btn.addEventListener("click", () => {

const content = btn.nextElementSibling;

content.classList.toggle("open");

});

});
