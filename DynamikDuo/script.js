const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add('show');
}

});

});

document.querySelectorAll('.fade').forEach(el => {
observer.observe(el);
});

const counters = document.querySelectorAll('.counter');

const runCounter = () => {

counters.forEach(counter => {

const target = +counter.dataset.target;

let current = 0;

const increment = target / 40;

const updateCounter = () => {

current += increment;

if(current < target){

counter.innerText = Math.ceil(current);
requestAnimationFrame(updateCounter);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

});

};

const statsSection = document.querySelector('.stats');

const statsObserver = new IntersectionObserver(entries => {

if(entries[0].isIntersecting){

runCounter();
statsObserver.disconnect();

}

});

statsObserver.observe(statsSection);
