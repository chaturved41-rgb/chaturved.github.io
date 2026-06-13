const reveals = document.querySelectorAll(
'.service-card, .testimonial-card, .stat-card'
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

},{
threshold:0.2
});

reveals.forEach((el)=>{
observer.observe(el);
});
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

if(glow){

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

}

});
const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");

if(chatBtn){

chatBtn.addEventListener("click",()=>{

if(chatBox.style.display==="block"){

chatBox.style.display="none";

}else{

chatBox.style.display="block";

}

});

}
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}
const counters = document.querySelectorAll(".counter");

const startCounters = () => {

counters.forEach(counter => {

const target = +counter.getAttribute("data-target");

let count = 0;

const increment = target / 50;

const updateCounter = () => {

if(count < target){

count += increment;

counter.innerText = Math.ceil(count);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

};

const statsSection = document.querySelector(".stats");

if(statsSection){

const observer = new IntersectionObserver((entries)=>{

if(entries[0].isIntersecting){

startCounters();

observer.disconnect();

}

});

observer.observe(statsSection);

}
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question = item.querySelector(".faq-question");

question.addEventListener("click",()=>{

item.classList.toggle("active");

});

});
window.addEventListener("scroll",()=>{

const scrollTop =
document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrollPercent =
(scrollTop / scrollHeight) * 100;

document.getElementById("progressBar")
.style.width = scrollPercent + "%";

});
const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});