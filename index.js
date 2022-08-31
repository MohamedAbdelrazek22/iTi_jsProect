// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store
    setupStore(products);
    const featured = store.filter((product) => product.featured === true);
    display(featured, getElement('.featured-center'));
  }
  
};



// ------------------------------------------------------

window.addEventListener('DOMContentLoaded', init);

let btnTop=document.querySelector('#back-top')
window.addEventListener('scroll', function(){

if(this.scrollY >=200){

  btnTop.classList.add('show')

}else{

  btnTop.classList.remove('show')

}

})
btnTop.addEventListener('click',function(){

window.scrollTo({
  top:0,
  behavior:"smooth",
})

})
// ------------------------------------------------------

const people = [
  {
    img:
      "images/2aboutpexels-fauxels-3184432.jpg",
    name: "peter doe",
    job: "product manager",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
  },
  {
    img:
      "images/2pexels-chepté-cormani-1416530.jpg",
    name: "susan doe",
    job: "developer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
  {
    img:
      "images/2thankspexels-fauxels-3184394.jpg",
    name: "emma doe",
    job: "designer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
  },
];
// ------------------------------------------------------

const container=document.querySelector('.slide-container')
const nextBtn=document.querySelector('.next-btn')
const prevBtn=document.querySelector('.prev-btn')

//   set slides

container.innerHTML=people.map((person,slideIndex)=>{

console.table(person);
console.log(slideIndex); //--> 0-1-2

const {img,name,job,text}=person
// more logic later
let position='next'
if(slideIndex ===0){
position ='active'

}
if(slideIndex === people.length-1){

position='last'
}
return `<article class="slide ${position}">
<img class="imgs" src="${img}" alt="${name}">
<h4>${name}</h4>
<p class="title">${job}</p>
<p class="text">${text}</p>
<div class="quote-icon">
<div class="fas fa-quote-right"></div>
</div> 
</article>`
}).join('')

const startSlider=(type)=>{
const active =document.querySelector('.active')
const last =document.querySelector('.last')
let next=active.nextElementSibling
if(!next){

next=container.firstElementChild

}
active.classList.remove(['active'])
active.classList.remove(['active'])
last.classList.remove(['last'])
next.classList.remove(['next'])

if(type === 'prev'){
active.classList.add('next')
last.classList.add('active')
next=last.previousElementSibling
if(!next){
next=container.lastElementChild
}
next.classList.add('last')
return
}



active.classList.add('last')
last.classList.add('next')
next.classList.add('active')


}
nextBtn.addEventListener('click',()=>{

startSlider()



})
prevBtn.addEventListener('click',()=>{


startSlider('prev')


})
// left breake index-------------------------------------


const leftBreakIndex=document.querySelector('.left-break-index')
const leftBreakContentIndex=document.querySelector('.left-break-content-index')
const leftBreakContentChild=leftBreakContentIndex.children[0]

window.addEventListener('scroll',function(){

  const scrollWindow=window.scrollY
  if(scrollWindow>=200){

    leftBreakIndex.style.left='0'
    leftBreakContentIndex.style.right='0'
    leftBreakContentChild.style.letterSpacing='0'
  }else{
    leftBreakIndex.style.left='121vw'
    leftBreakContentIndex.style.right='80rem'
    leftBreakContentChild.style.letterSpacing='20px'
  }


})




// right breake index-------------------------------------
const chair=document.querySelector('.chair')
const lamp=document.querySelector('.lamp')
const rightIndex=document.querySelector('.right-index')
const rightBreakContentIndex=document.querySelector('.right-break-content-index')

window.addEventListener('scroll',()=>{


const scrollWindow=window.scrollY
if(scrollWindow >=1139){
  chair.style.transform='translateX(0vw)'
  lamp.style.transform='translateX(0vw)'
  rightIndex.style.opacity='1'
  rightBreakContentIndex.style.left='0px'

}else{
  chair.style.transform='translateX(-50vw)'
  lamp.style.transform='translateX(-50vw)'
  rightIndex.style.opacity='0'
  rightBreakContentIndex.style.left='60vw'

}

})