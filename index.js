function addCard(title = " Untitles", text = "Missing Text") {
    // clone the template
    const template = 
    document.getElementById("card-template").content.cloneNode(true);

    // populate the template
    template. querySelector('.card-title').innerText = title;
    template. querySelector('.card-text').innerText = text;

    //include the populated template into the page
    document.querySelector('#card-list').appendChild(template);
}

addCard();

const data = [
    { name: "Christina", age: 30 },
    { name: "Sam", age: 31 },
  ];
  
  data.forEach(person => {
      addCard(person.name, `Age: ${person.age}`)
  })