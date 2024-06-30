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

card = [
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
        period: 18,
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

panelListItem = document.querySelectorAll('.panel-list__item');
panelListImg = document.querySelectorAll('.panel-list__img');
panelListText = document.querySelectorAll('.panel-list__text');
panelListRate = document.querySelectorAll('.rate');
panelListPeriod = document.querySelectorAll('.period');
panelListAmount = document.querySelectorAll('.amount');
panelListBtn = document.querySelectorAll('.panel-list__btn');

for (let i = 0; i < panelListItem.length; i++) {
    if (panelListItem[i].id == card[i].id) {
        document.getElementById(`panel-img${i+1}`).src = card[i].logo;
        panelListText[i].innerHTML = card[i].name;
        panelListRate[i].innerHTML = card[i].rate;
        panelListPeriod[i].innerHTML = card[i].period;
        panelListAmount[i].innerHTML = card[i].amount;
        document.getElementById(`panel-btn${i+1}`).href = card[i].url;
    }
}