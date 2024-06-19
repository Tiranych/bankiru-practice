burgerBtn = document.querySelector('.burger');
navList = document.querySelector('.header__nav-list');

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navList.classList.toggle("header__nav-list--active");
});

panelBtn = document.querySelectorAll('.panel-list__btn');
panelText = document.querySelectorAll('.panel-list__text');

panelBtn.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(element.parentNode.firstElementChild.lastElementChild.textContent);
    });
});