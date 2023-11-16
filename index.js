function addCard() {
    // clone the template
    const template = 
    document.getElementById("card-template").contentEditable.cloneNode(true);

    // populate the template
    template. querySelector('.card-title').innerText = 'My Card';
    template. querySelector('.card-text').innerText = 'This is my card not yours';

    //include the populated template into the page
    document.querySelector('#card-list').appendChild(template);
}

addCard();