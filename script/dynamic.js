const dynamicContainer = document.querySelector('.comidians');
const listOfComedians = [
  {
    name: 'Dave Chapp',
    image: 'assets/images/comidians-img/DaveChapp.png',
    title: 'American stand-up comedian.',
    biog: 'David Khari Webber Chappelle is a American stand-up comedian, actor, writer and producer.',
  },
  {
    name: 'Russell Peters',
    image: 'assets/images/comidians-img/RusselPeters.png',
    title: 'Canadian stand-up comedian.',
    biog: 'Russell Dominic Peters is a Canadian stand-up comedian, actor, and producer.',
  },
  {
    name: 'Eddie Murphy',
    image: 'assets/images/comidians-img/EddyMuerphy.png',
    title: 'American stand-up comedy.',
    biog: 'Eddie Murphy Delirious is an American stand-up comedy television special directed by Bruce Gowers.',
  },
  {
    name: 'Jerry Seinfeld',
    image: 'assets/images/comidians-img/JerrySienfield.png',
    title: 'American stand-up comedin.',
    biog: 'Jerome Allen Seinfeld is an American stand-up comedian, actor, writer, and producer.',
  },
  {
    name: 'Kevin Hart',
    image: 'assets/images/comidians-img/Kevinhart.png',
    title: 'American stand-up comedian and actor.',
    biog: 'Kevin Darnell Hart is an American stand-up comedian and actor.',
  },
  {
    name: 'Mike Birbiglia',
    image: 'assets/images/comidians-img/MikeBirbig.png',
    title: 'American stand-up comedian.',
    biog: 'Mike Birbiglia is an American stand-up comedian, actor, director, producer and writer.',
  },
];

for (let i = 0; i < 2; i += 1) {
  dynamicContainer.innerHTML += `
      <div class="comidian">
      <div class="com-img-container">
        <img src="${listOfComedians[i].image}" alt="${listOfComedians[i].name} comidian">
      </div>
      <div class="comidian-info">
        <h3>${listOfComedians[i].name}</h3>
        <h4 class="comidian-title">${listOfComedians[i].title}</h4>
        <div class="grey-line"></div>
        <p>${listOfComedians[i].biog}</p>
      </div>
    </div>`;
}

for (let i = 2; i < listOfComedians.length; i += 1) {
  dynamicContainer.innerHTML += `
       <div class="comidian hidden" id="hiddenInfo${i}">
       <div class="com-img-container">
         <img src="${listOfComedians[i].image}" alt="${listOfComedians[i].name} comidian">
       </div>
       <div class="comidian-info">
         <h3>${listOfComedians[i].name}</h3>
         <h4 class="comidian-title">${listOfComedians[i].title}</h4>
         <div class="grey-line"></div>
         <p>${listOfComedians[i].biog}</p>
       </div>
     </div>`;
}
