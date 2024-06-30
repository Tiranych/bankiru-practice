async function makeRequests(urls, maxRequests) {
    let promisesArr = [];
    for (let curRequests = 0; curRequests < maxRequests; curRequests++) {
        let fetchRes = fetch(urls[curRequests]);
        promisesArr.push(fetchRes);
    }
    while (promisesArr.length != urls.length) {
        if(Promise.race(promisesArr)) {
            let i = maxRequests;
            promisesArr.push(fetch(urls[i]));
            i++;
        }
    }
    return promisesArr;
}

let urls = [
    'https://github.com/Tiranych/Finsweet',
    'https://github.com/Tiranych/SMT',
    'https://github.com/Tiranych/Lease-cars',
    'https://github.com/Tiranych/bankiru-practice',
    'https://github.com/Tiranych/Parallax-effect',
    'https://github.com/Tiranych/Dior'
];

let maxRequests = 2;

let result = makeRequests(urls, maxRequests)
.then(response => response.forEach(element => {
    element.then(response => console.log(response));
}));