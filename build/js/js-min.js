const listHeaderMenu=document.querySelector("#headerMenu > .header-menu__list");let isBurgerOpen=!1;function animations(){isBurgerOpen?(listHeaderMenu.classList.remove("header-menu__passive"),listHeaderMenu.classList.add("header-menu__activ"),menuItem.classList.add("animation-burger"),menuItem.classList.remove("animation-burger__reverse")):(listHeaderMenu.classList.remove("header-menu__activ"),listHeaderMenu.classList.add("header-menu__passive"),menuItem.classList.remove("animation-burger"),menuItem.classList.add("animation-burger__reverse"))}menuItem.addEventListener("click",()=>{isBurgerOpen?(isBurgerOpen=!1,setTimeout(function(){headerMenu.classList.remove("db"),headerMenu.classList.add("dn")},400)):(isBurgerOpen=!0,setTimeout(function(){headerMenu.classList.remove("dn"),headerMenu.classList.add("db")},400)),animations()});const formText=document.querySelector("#user-message > .form-text"),formEmail=document.querySelector("#user-message > .form-email"),formMessage=document.querySelector("#user-message > .form-message"),warningText=document.querySelector("#user-message > p");form_submission.addEventListener("click",()=>{let e=!1;""===formMessage.value?(formMessage.classList.add("form-style"),warningText.classList.add("form-warning-text"),formMessage.focus()):(formMessage.classList.remove("form-style"),e+=1),""===formEmail.value?(formEmail.classList.add("form-style"),warningText.classList.add("form-warning-text"),formEmail.focus()):(formEmail.classList.remove("form-style"),e+=1),""===formText.value?(formText.classList.add("form-style"),warningText.classList.add("form-warning-text"),formText.focus()):(formText.classList.remove("form-style"),e+=1),e>2&&warningText.classList.remove("form-warning-text")});const closeGallery=document.querySelector(".modal-window-contain > .modal-btn-close"),windowGallery=document.querySelector(".modal-window-gallery");closeGallery.addEventListener("click",()=>{windowGallery.style.display="none"});const galleryBtnNext=document.querySelector(".modal-btn-contain > .modal-btn__next"),galleyBtnBack=document.querySelector(".modal-btn-contain > .modal-btn__back"),photoGallery=document.querySelectorAll(".modal-gallery_contain > .works-gallery__item");let countPhoto=0;galleryBtnNext.addEventListener("click",()=>{photoGallery[countPhoto].classList.remove("modal-opacity"),++countPhoto===photoGallery.length&&(countPhoto=0),photoGallery[countPhoto].classList.add("modal-opacity")}),galleyBtnBack.addEventListener("click",()=>{photoGallery[countPhoto].classList.remove("modal-opacity"),--countPhoto<0&&(countPhoto=photoGallery.length-1),photoGallery[countPhoto].classList.add("modal-opacity")});let worksGallery=document.querySelectorAll(".Works-gallery > .works-gallery__item");for(let e=0;e<worksGallery.length;e++)worksGallery[e].addEventListener("click",e=>{windowGallery.style.display="flex",photoGallery[countPhoto].classList.remove("modal-opacity"),countPhoto=e.target.getAttribute("data-id")-1,photoGallery[countPhoto].classList.add("modal-opacity")});const mobileOoenGallery=document.querySelector(".mobile-photo > .mobile-photo-btn");mobileOoenGallery.addEventListener("click",()=>{windowGallery.style.display="flex"});