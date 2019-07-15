//--------------------------------BURGER-----------------------------------------------------------

const listHeaderMenu = document.querySelector("#headerMenu > .header-menu__list");

let isBurgerOpen = false;
menuItem.addEventListener('click', () =>{
    if(isBurgerOpen){
        isBurgerOpen = false;
        setTimeout(function(){
            headerMenu.classList.remove('db');
            headerMenu.classList.add('dn');
        },400);
    } else{
        isBurgerOpen =true; 
        setTimeout(function(){
            headerMenu.classList.remove('dn')
            headerMenu.classList.add('db');
        },400);
    };
    animations();
});


function animations() {
    if(!isBurgerOpen){
        listHeaderMenu.classList.remove('header-menu__activ');
        listHeaderMenu.classList.add('header-menu__passive');
        menuItem.classList.remove('animation-burger');
        menuItem.classList.add('animation-burger__reverse');
    }
    else{
        listHeaderMenu.classList.remove('header-menu__passive');
        listHeaderMenu.classList.add('header-menu__activ');
        menuItem.classList.add('animation-burger');
        menuItem.classList.remove('animation-burger__reverse');
    };
}
//-----------------------------------------------------------------------------------------------------------

//-------------------------------------------------FORM--------------------------------------------------------------

const formText = document.querySelector('#user-message > .form-text');
const formEmail = document.querySelector('#user-message > .form-email');
const formMessage = document.querySelector('#user-message > .form-message'); 
const warningText = document.querySelector('#user-message > p');

form_submission.addEventListener('click', () =>{
    let noEmptyForm = false;
    if(formMessage.value === ""){
        formMessage.classList.add('form-style');
        warningText.classList.add('form-warning-text');
        formMessage.focus();
    }
    else{
        formMessage.classList.remove('form-style');
        noEmptyForm +=1;
    }
    if(formEmail.value === ""){
        formEmail.classList.add('form-style');
        warningText.classList.add('form-warning-text');
        formEmail.focus();
    }
    else{
        formEmail.classList.remove('form-style');
        noEmptyForm +=1;
    }
    if(formText.value === ""){
        formText.classList.add('form-style');
        warningText.classList.add('form-warning-text');
        formText.focus();
    }
    else{
        formText.classList.remove('form-style');
        noEmptyForm +=1;
    }
    if(noEmptyForm > 2){
        warningText.classList.remove('form-warning-text');
    }
});