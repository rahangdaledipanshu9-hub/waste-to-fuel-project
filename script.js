/* ===============================
NAVBAR ACTIVE SECTION
================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(window.scrollY >= sectionTop - 200){
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

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".section").forEach(el => observer.observe(el));


/* ===============================
PERFORMANCE COUNTERS
================================*/

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.dataset.target;
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
PIPELINE HOVER EFFECT
================================*/

document.querySelectorAll(".stage").forEach(stage => {

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
