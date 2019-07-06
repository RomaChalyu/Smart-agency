//--------------------------------BURGER-----------------------------------------------------------

let ulHeader = document.querySelector("#headerMenu > ul");

var temp = false;
burgerIcon.addEventListener('click', function(){
    if(temp){
        temp = false;
        setTimeout(function(){
            headerMenu.classList.remove('db');
            headerMenu.classList.add('dn');
        },400);
    } else{
        temp =true; 
        setTimeout(function(){
            headerMenu.classList.remove('dn')
            headerMenu.classList.add('db');
        },400);
    };
    animations();
});


function animations() {
    if(!temp){
        ulHeader.classList.remove('header-menu__activ');
        ulHeader.classList.add('header-menu__passive');
        burgerIcon.classList.remove('animationIcon');
        burgerIcon.classList.add('animationIcon-reverse');
    }
    else{
        ulHeader.classList.remove('header-menu__passive');
        ulHeader.classList.add('header-menu__activ');
        burgerIcon.classList.add('animationIcon');
        burgerIcon.classList.remove('animationIcon-reverse');
    };
}
//---------------------------------------------------------------------------------------

//-------------------------------------------------FORM--------------------------------------------------------------

let formText = document.querySelector("#user-message > .form-text");
let formEmail = document.querySelector("#user-message > .form-email");
let formMessage = document.querySelector("#user-message > .form-message"); 

let warningText = document.querySelector("#user-message > p");

form_submission.addEventListener('click', function(){
    if(formMessage.value === ""){
        formMessage.classList.add('form-style');
        warningText.classList.add('form-warning-text');
        formMessage.focus();
    }
    else{
        formMessage.classList.remove('form-style');
    }
    if(formEmail.value === ""){
        formEmail.classList.add('form-style');
        warningText.classList.add('form-warning-text');
        formEmail.focus();
    }
    else{
        formEmail.classList.remove('form-style');
    }
    if(formText.value === ""){
        formText.classList.add('form-style');
        warningText.classList.add('form-warning-text');
        formText.focus();
    }
    else{
        formText.classList.remove('form-style');
    }
    if(formMessage.value !=="" && formEmail.value !== "" && formText.value !== ""){
        warningText.classList.remove('form-warning-text');
        
    }
});
