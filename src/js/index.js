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

form_submission.addEventListener('click', () => {
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

//-----------------------------------------GALLERY------- (BLOCK - FEATURED WORKS)-----------------------------------------------------------------

const closeGallery = document.querySelector('.modal-window-contain > .modal-btn-close');
const windowGallery = document.querySelector('.modal-window-gallery');
// btn closeGallery
closeGallery.addEventListener('click', () => {
    windowGallery.classList.remove("df");
    windowGallery.classList.add("g-hidden");
});


const galleryBtnNext = document.querySelector('.modal-btn-contain > .modal-btn__next');
const galleyBtnBack = document.querySelector('.modal-btn-contain > .modal-btn__back');

const photoGallery = document.querySelectorAll('.modal-gallery_contain > .works-gallery__item');

let countPhoto = 0;
// btn next photo gallery
galleryBtnNext.addEventListener('click', () => {
    photoGallery[countPhoto].classList.remove('modal-opacity');
    countPhoto++;
    countPhoto === photoGallery.length ? countPhoto = 0 : countPhoto;
    photoGallery[countPhoto].classList.add('modal-opacity');
});
// btn back photo gallery
galleyBtnBack.addEventListener('click', () => {
    photoGallery[countPhoto].classList.remove('modal-opacity');
    countPhoto--;
    countPhoto < 0 ? countPhoto = photoGallery.length - 1 : countPhoto;
    photoGallery[countPhoto].classList.add('modal-opacity');
});

const worksGallery = document.querySelectorAll(".Works-gallery > .works-gallery__item");
//open modal window gallery by clicking a photo
worksGallery.forEach((elem) => {
    elem.addEventListener('click', (elem) => {
        windowGallery.classList.remove("g-hidden");
        windowGallery.classList.add('df');
        photoGallery[countPhoto].classList.remove('modal-opacity');
        countPhoto = (elem.target.getAttribute('data-id')) -1;
        photoGallery[countPhoto].classList.add('modal-opacity');
    });
});
//open the modal window gallery by clicking a btn-mobile
const mobileOoenGallery = document.querySelector('.mobile-photo > .mobile-photo-btn');
mobileOoenGallery.addEventListener('click', () => {
    windowGallery.classList.remove("g-hidden");
    windowGallery.classList.add('df');
});

//----------------------------------Services----------------------------------------------------------------

const servicesIcon = document.querySelectorAll('.services-contain-icon > .services-icon');
const servicesText = document.querySelectorAll('.contain-text');

servicesIcon.forEach((elem,i) => {
    elem.addEventListener('click', () => {
        servicesIcon.forEach((element) => {
            element.classList.remove('shadow');
        });
        servicesText.forEach((element) => {
            element.classList.remove('db');
        });
        servicesText[i].classList.add('db');
        elem.classList.add('shadow');
    });
});


//team-contai