// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
import validation from '../cart/formValidtion.js';

let btnTop=document.querySelector('#back-top')
let formWrap=document.querySelector('.form-wrap')
let contactImg=document.querySelector('.contact-img')

window.addEventListener('scroll', function(){
if(this.scrollY >=830){

  btnTop.classList.add('show')

console.log(btnTop.classList.add('show'));
}else{

  btnTop.classList.remove('show')

}

})
window.addEventListener('scroll', function(){
    console.log(window.scrollY);

   
    if(this.scrollY>=330){

        formWrap.style.opacity='1'
        contactImg.style.opacity='1'
      }else{
      
        formWrap.style.opacity='0'
        contactImg.style.opacity='0'
      
            
      }
 
   
    
    })
    btnTop.addEventListener('click',function(){

        window.scrollTo({
          top:0,
          behavior:"smooth",
        })
        
        })
    // -----------------------------------
    const leftBreakOfContact=document.querySelector('.left-break-of-about')
    const rightBreakOfAbout =document.querySelector('.right-break-about')

    window.addEventListener('scroll',function(){


      const windowScroll=window.scrollY
if(windowScroll >=80){

  leftBreakOfContact.style.width='40%'

}else{

  leftBreakOfContact.style.width='100%'

}

    })

    window.addEventListener('scroll',function(){
console.log(window.scrollY);

      const windowScroll=window.scrollY
if(windowScroll >=640){
  rightBreakOfAbout.style.background='#f1f0ee'
  
}else{
  rightBreakOfAbout.style.background='#3c6e71'


}

    })

    const  rightContact=document.querySelector('.right-contact')
    const  rightBreakContent=document.querySelector('.right-break-content')


    window.addEventListener('scroll',function(){

const windowScroll=window.scrollY
console.log(windowScroll);

if(windowScroll>=1040){

  rightContact.style.opacity='1'
  rightBreakContent.style.left='0'

}else{

  rightContact.style.opacity='0'
  rightBreakContent.style.left='60vw'

}
    })

    //form valition ----------------------------------------------------------------
    validation()