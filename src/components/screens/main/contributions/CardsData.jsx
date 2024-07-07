const names = [
    "Вкладывайтесь",
    "Большой заработок",
    "Выгодные проценты",
    "Я очень длинное название уберите …",
    "Свои правила с Банки.ру",
    "Положительные отзывы",
    "Гарантия качества",
    "Множество успешных кейсов",
    "Работаем по всему миру",
    "Круглосуточная поддержка",
    "И еще много интересного",
    "Просто и быстро",
];

const logos = [
    "images/bank.svg",
    "images/footer-logo.svg"
]

export const cards = [];

for (let i = 1; i <= 12; i++) {
    cards.push({
        id: i,
        name: names[i-1],
        logo: logos[Math.round(Math.random())],
        rate: `от ${(Math.random() * 10).toFixed(1)}%`,
        period: Math.floor(Math.random() * 1000),   //от 0 до 1 умн. на 1000 и округление
        amount: Math.floor(Math.random() * 10 ** 7),
        url: 'https://github.com/Tiranych/Finsweet',
    })
}

export default cards;