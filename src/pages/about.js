// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';


// breaks btns--------------------------------------
let btnTop=document.querySelector('#back-top')
let aboutContentText=document.querySelector('.about-content-text')
let aboutContentImg=document.querySelector('.about-content-img')

window.addEventListener('scroll', function(){

if(this.scrollY >=400){


  btnTop.style.opacity='1';

console.log(btnTop.classList.add('show'));
}else{

  btnTop.classList.remove('show')

}

})
window.addEventListener('scroll', function(){
console.log(this.scrollY)
   
    if(this.scrollY >=1465){

        aboutContentText.classList.add('visible')
        aboutContentImg.classList.add('visible')
    
      }else{
      
        aboutContentText.classList.remove('visible')
        aboutContentImg.classList.remove('visible')
      
            
      }
 
   
    
    })
    btnTop.addEventListener('click',function(){

        window.scrollTo({
          top:0,
          behavior:"smooth",
        })
        
        })
    // ---------------------------------
    const leftBreakOfAbout =document.querySelector('.left-break-of-about')
    const rightBreakOfAbout =document.querySelector('.right-break-about')
    const rightBreakOfContent =document.querySelector('.right-break-of-content')

    window.addEventListener('scroll',function(){


      const windowScroll=window.scrollY
if(windowScroll >=80){

  leftBreakOfAbout.style.width='40%'

}else{

  leftBreakOfAbout.style.width='100%'

}

    })

    window.addEventListener('scroll',function(){
// console.log(window.scrollY);

      const windowScroll=window.scrollY
if(windowScroll >=690){
  rightBreakOfAbout.style.background='#f1f0ee'
  rightBreakOfContent.style.left='0'
}else{
  rightBreakOfAbout.style.background='#3c6e71'
  rightBreakOfContent.style.left='60vw'


}

    })
    //about counter ---------------------------------------------------

    let number=document.querySelectorAll('.number')
    number.forEach((num)=>{

    
let startValue=0
    const endVal=parseInt(num.getAttribute("data-val"))
    console.log(endVal);
let counter=setInterval(function(){
  startValue++;
 
  num.textContent=startValue
if(startValue == endVal){
clearInterval(counter)
}
},9)
})