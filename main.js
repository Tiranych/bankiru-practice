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
        /* e.preventDefault(); */
        console.log(element.parentNode.firstElementChild.lastElementChild.textContent);
    });
});

cards = [
    {
        id: 'panel-1',
        name: "Вкладывайтесь, не стесняйтесь",
        logo: "images/bank.svg",
        rate: "от 9.3%",
        period: 181,
        amount: 5000000,
        url: 'https://github.com/Tiranych/Finsweet'
    },
    {
        id: 'panel-2',
        name: "Вк=айтесь, не стесняйтесь",
        logo: "images/logo.svg",
        rate: "от 9.3%",
        period: 468,
        amount: 5000000,
        url: 'https://github.com/Tiranych/SMT'
    },
    {
        id: 'panel-3',
        name: "Вкладесь, не стесняйтесь",
        logo: "./images/logo.svg",
        rate: "от 9.3%",
        period: 11,
        amount: 5000000,
        url: 'https://github.com/Tiranych/Lease-cars'
    },

    //здесь можно добавлять сколько угодно карточек
];