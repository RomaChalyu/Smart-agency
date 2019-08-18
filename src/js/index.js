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

//---------------------------------------------team-------------------------------------------------
const team = document.querySelectorAll('.team-container-item');
const teamGradient = document.querySelectorAll('.team-container-gradient > .team-gradient');
const teamStatistics = document.querySelectorAll('.team-statistics');

team.forEach((elem,i) => {
    elem.addEventListener('click',()=> {
        teamGradient.forEach((e) => {
            if(e.classList.value === 'team-gradient'){  //check element for class
                return;
            }
            e.classList.remove('df');
            e.classList.add('team-gradient-remove');
        });
        teamGradient[i].classList.remove('team-gradient-remove');
        teamGradient[i].classList.add('df');
        teamStatistics.forEach((e) => {
            e.classList.remove('team-statistic-animation');
        })
        teamStatistics[i].classList.add('team-statistic-animation');
    });
});

const stripSkill = document.querySelectorAll('.team-skill');
const teamName = document.querySelectorAll('.team-name');
const socialNetwork = document.querySelectorAll('.team-name__social-network');
const textNameTeam = document.querySelectorAll('.team-name__person');

team.forEach((elem,i) => {
    elem.addEventListener('click', () => {
        stripSkill.forEach((e) => {
            e.classList.add('animation-skill');
        });
        teamName.forEach((e) => {
            e.classList.remove('team-name_active');
        });
        teamName[i].classList.add('team-name_active');
        socialNetwork.forEach((e) => {
            e.classList.remove('df');
        });
        socialNetwork[i].classList.add('df');
        textNameTeam.forEach((e) => {
            e.classList.remove('team-name__person__active');
        });
        textNameTeam[i].classList.add('team-name__person__active');
    });
})

//--------------------------------------------------------------------------------------------
// переменная ширины экрана 
let widthClient = document.documentElement.clientWidth;
window.addEventListener('resize', () =>{
    widthClient = document.documentElement.clientWidth;
});

//------------------------------------------------REVIEWS-------------------------------------------------------------------
const reviewsBtnBack = document.querySelector('.review-btn-back');
const reviewsBtnNext = document.querySelector('.review-btn-next');
const reviewClients = document.querySelectorAll('.review-clients');
const reviewClider = document.querySelectorAll('.review-slider-item');


// btn next review
reviewsBtnNext.addEventListener('click', () => {
    if(widthClient > 425){
        for(var i = 0; i < reviewClients.length; i+=2){
            let strClass = reviewClients[i].classList.value;
            reviewsBtnBack.classList.remove('review-btn__background');

            if(i >= 2) reviewsBtnNext.classList.add('review-btn__background');

            if(i >= 4) break;

            if(strClass.indexOf('review-next') === -1){
                for(var j = 0 ; j <reviewClients.length; j+=2){
                    reviewClients[j].classList.remove('review-back');
                }
                reviewClients[i].classList.add('review-next');
                break;
            }   
        }
    }
    else{
        for(var i = 0; i < reviewClients.length; i++){
            let strClass = reviewClients[i].classList.value;
            reviewsBtnBack.classList.remove('review-btn__background');

            if(i >= 4) reviewsBtnNext.classList.add('review-btn__background');

            if(i >= 5){
                break;
            }

            if(strClass.indexOf('review-next') === -1){
                for(var j = 0 ; j < reviewClients.length; j++){
                    reviewClients[j].classList.remove('review-back');
                }
                reviewClients[i].classList.add('review-next');
                break;
            }
        }
    }  
});
//btn back
reviewsBtnBack.addEventListener('click', () => {
    if(widthClient > 425){
        for(var i =0; i < reviewClients.length; i+=2){
            let strClass = reviewClients[i].classList.value;
            if(strClass.indexOf('review-next') === -1){
                reviewsBtnNext.classList.remove('review-btn__background');
                if(i === 0) break;
            
                let strClass2 = reviewClients[i-2].classList.value;

                if(strClass2.indexOf('review-next review-back')){
                    reviewClients[i-2].classList.remove('review-back');
                    reviewClients[i-2].classList.remove('review-next');
                }
                if(i <= 2) reviewsBtnBack.classList.add('review-btn__background');

                reviewClients[i-2].classList.add('review-back');
                break;
            }   
        } 
    }
    else{
        for(var i = reviewClients.length - 1; i >= 0; i--){
            let strClass = reviewClients[i].classList.value;
            if(strClass.indexOf('review-clients review-next') !== -1){
                reviewsBtnNext.classList.remove('review-btn__background');
                reviewClients[i].classList.remove('review-next');
                reviewClients[i].classList.add('review-back');

                if(i === 0)reviewsBtnBack.classList.add('review-btn__background');

                break;
            }
        }
    } 
});
let sliderActive = 0;

reviewsBtnBack.addEventListener('click',() => {
    reviewClider[sliderActive].classList.remove('slider-item-active');
    sliderActive -=1;
    if(sliderActive < 0) sliderActive = 0;
    reviewClider[sliderActive].classList.add('slider-item-active');
    });


reviewsBtnNext.addEventListener('click', () => {
    reviewClider[sliderActive].classList.remove('slider-item-active');
    sliderActive +=1;
    if(widthClient > 425 && sliderActive > 2) sliderActive = 2;
    else if(sliderActive > 5) sliderActive = 5;
    reviewClider[sliderActive].classList.add('slider-item-active');
});


