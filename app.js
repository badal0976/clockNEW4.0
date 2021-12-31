const linktree = document.querySelector('.linktree');
const walk = 100;
function effect(e){
const {offsetWidth : width, offsetHeight: height} = linktree;

const {offsetX:x, offsetY: y} = e;
const rotX = Math.round(((x/ width *walk) - (walk/2))/3);
const rotY = Math.round(((y/ width *walk) - (walk/2))/3);

console.log(x);
linktree.style.transform = `rotateX(${rotY}deg) rotateY(${rotX}deg)`;
}
linktree.addEventListener('mousemove', effect);