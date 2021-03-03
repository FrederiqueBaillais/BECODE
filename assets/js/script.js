let quote = document.getElementById('quote');
let load = document.getElementById('load');
let image = document.getElementById('image');
let author = document.getElementById('author');

const recuperation = () => {
    const req = new XMLHttpRequest(); // https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
    console.log('test');
    req.onload = reqListener; // ' onload ' se déclenche lorsqu'une transaction XMLHttpRequest se termine correctement
    // ' open ' initialise une requête // XMLHttpRequest.open(method, url, async)
    req.open('get', 'https://thatsthespir.it/api', true); // https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/open
    req.send(); // ' send ' envoie la requête // XMLHttpRequest.send(body)
};
const reqListener = response => {
    console.log('Hello');
    let temp = JSON.parse(response.currentTarget.response);
    quote.innerHTML = temp.quote;
    author.textContent = temp.author;
    image.src = temp.photo;
};
window.onload = () => {
    load.onclick = recuperation();
};
document.getElementById('load').addEventListener('click', () => {
    location.reload();
});
recuperation();