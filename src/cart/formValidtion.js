const name=document.getElementById('name')
const email=document.getElementById('email')
const password=document.getElementById('password')

const EmailReg=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
function validation(){

    name.addEventListener('blur',function(e) {
    
    if(name.value ==''){
name.setAttribute('placeholder', 'please enter the name')
name.style.borderColor='red'
name.style.borderWidth='2px'

    }else{

        name.style.borderColor='green'


    }
    
    })
    email.addEventListener('blur',function(e) {
    if(!email.value.match(EmailReg) ){
        email.setAttribute('placeholder', 'please enter the correct email')
        email.style.borderColor='red'
        email.style.borderWidth='2px'

    }else{
        email.style.borderColor='green'
        email.style.borderWidth='2px'

    }
    
    })
    password.addEventListener('blur',function(e) {
        if(password.value == '' || password.value.length <=10 ){

            console.log(password.value );
            password.setAttribute('placeholder', 'please enter the correct password')
            password.style.borderColor='red'
            password.style.borderWidth='2px'
        
        }else{
            password.style.borderColor='green'
            password.style.borderWidth='2px'
        
        }
    
    })

    
}


export default validation