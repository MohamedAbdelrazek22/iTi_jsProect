
const people = [
    {
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg",
      name: "peter doe",
      job: "product manager",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
    },
    {
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg",
      name: "susan doe",
      job: "developer",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg",
      name: "susan doe",
      job: "developer",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
      name: "emma doe",
      job: "designer",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
  ];

  
const container=document.querySelector('.slide-container');
const nextBtn=document.querySelector('.next-btn')
const prevBtn=document.querySelector('.prev-btn')

container.innerHTML=people.map((person,slideIndex) =>{


const {img,name,job,text}=person


console.log(slideIndex);
// 0 1 2

// more logic later
let position='next'
if(slideIndex ===0){
    position='active'

}
if(slideIndex ===people.length-1){
    position='last'

}



return ` <article class="slide ${position}">
<img class="img" src="${img}" alt="${name}">
<h4>${name}</h4>
<p class="title">${job}</p>
<p class="text">${text}</p>
<div class="quote-icon">
<div class="fas fa-quote-right"></div>
</div> 
</article>`



}).join('')

const stratSlider=(type)=>{
const active=document.querySelector('.active')
const last=document.querySelector('.last')
let next=active.nextElementSibling;
console.log(next);

if(!next){

    next=container.firstElementChild
    console.log(next);
}
active.classList.remove(['active'])
last.classList.remove(['last'])
next.classList.remove(['next'])


if(type ==='prev'){

    active.classList.add('next')
    last.classList.add('active')
    next=last.previousElementSibling
    if(!next){
next=container.lastElementChild
    }
    next.classList.remove('[next]')
    next.classList.add('last')
return

}



next.classList.add('active')
active.classList.add('last')
last.classList.add('next')


}
nextBtn.addEventListener('click',()=>{

    stratSlider()

    
})
prevBtn.addEventListener('click',()=>{


    stratSlider('prev')



})