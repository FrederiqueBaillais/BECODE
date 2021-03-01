const quote = document.getElementById('quote');
const load = document.getElementById('load');
const image = document.getElementById('image');
const author = document.getElementById('author');

function recuperation() {
    // https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest
    const requete = new XMLHttpRequest();
    // ' load ' se déclenche lorsqu'une transaction XMLHttpRequest se termine correctement
    requete.load = affichage;
    // ' open ' initialise une requête
    // https://developer.mozilla.org/fr/docs/Web/API/XMLHttpRequest/open
    // XMLHttpRequest.open(method, url, async)
    requete.open('get', 'https://thatsthespir.it/api', true)
        .then(res => res.json())
        .then((res) => { selectNote(quote) })
        .catch(() => console.log('Requête échouée'));
    // ' send ' envoie la requête
    // XMLHttpRequest.send(body)
    requete.send();
};
const affichage = {
    let temp = JSON.parse(response.currentTarget.response);
    quote.innerHTML = temp.quote;
    author.textContent = temp.author;
    image.src = temp.photo;
};
window.onload = () => {
    loadButton.onclick = recuperation();
};
recuperation();






/*load.addEventListener('click', quotation());*/