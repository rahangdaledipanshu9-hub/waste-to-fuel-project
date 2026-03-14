/* PIPELINE INTERACTION */

const stages = document.querySelectorAll(".stage");
const infoBox = document.querySelector(".stage-info");

stages.forEach(stage => {

stage.addEventListener("click", () => {

infoBox.innerText = stage.dataset.info;

});

});


/* SCROLL ANIMATION */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";
}

});

});

sections.forEach(section=>{

section.style.opacity=0;
section.style.transform="translateY(40px)";
section.style.transition="0.6s";

observer.observe(section);

});
