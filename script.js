/* NAVBAR ACTIVE SECTION */

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


/* PERFORMANCE COUNTERS */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

let count = 0;

const target = +counter.dataset.target;

const update = () => {

count += target / 100;

if(count < target){

counter.innerText = Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

};

update();

});


/* SCROLL PROGRESS BAR */

window.addEventListener("scroll", () => {

const scrollTop = window.scrollY;
const docHeight = document.body.scrollHeight - window.innerHeight;

const progress = (scrollTop / docHeight) * 100;

document.querySelector(".progress-bar").style.width = progress + "%";

});
