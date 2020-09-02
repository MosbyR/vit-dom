let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  function shortenPageTitle() {
    document.getElementById('main-title').innerText = "My name is DOM and I like cars!";

  }

  shortenPageTitle();


  // Part 2
  function changeBodyBgColor() {
    document.body.style.backgroundColor = "green";
  }

  changeBodyBgColor();


  // Part 3
  function removeLastFavoriteThing() {
    var removeLastItem =document.getElementById('favorite-things');

    removeLastItem.removeChild(removeLastItem.lastElementChild);
    


  }
  removeLastFavoriteThing();


  // Part 4
  function makeSpecialTitlesBigger() {
    var makeBigger = document.querySelectorAll('.special-title')

    for(var i =0; i<makeBigger.length;i++){
      makeBigger[i].style.fontSize = '2rem';
    }

  }
  makeSpecialTitlesBigger();


  // Part 5
  function RemoveChicagoRace() {
    var removeChi = document.getElementById('past-races');
    var listItems = removeChi.getElementsByTagName('li')
    // console.log(listItems[5]);

    listItems[3].remove()

    
    // for(var p=0; p < listItems.length; p++){
    //   if(listItems.innerText[p] === 'Chicago'){
    //     listItems[p].remove()
    //   }

    // }
  }

  RemoveChicagoRace();

  // Part 6
  function addPastRace() {
    var newRace = document.createElement("li");
    var addSeattle = document.createTextNode("Seattle");
    var aps = newRace.appendChild(addSeattle)
    
    document.getElementById('past-races').appendChild(aps)
    

  }

  addPastRace();

  // Part 7
  function createNewBlogPost() {

    //create new div and .blog-post class
    var newDiv =document.createElement("div");
    newDiv.setAttribute('class','blog-post purple');


    
    //create h2 tag
    var newH2 = document.createElement("h1")
    var h2Text = document.createTextNode("Seattle");
    newH2.appendChild(h2Text)

    //create p tag
    var newP = document.createElement("p");
    var pText = document.createTextNode('RIP Paul Walker!');
    newP.appendChild(pText)

    
    // newH2.appendChild(addP)

    console.log(newP)
    console.log(newH2)
    console.log(newDiv)


    // appends the paragraph and heading
    newDiv.appendChild(newH2)
    newDiv.append(newP)


    var parent = document.querySelector('.main');

    parent.append(newDiv)

    // document.getElementById('main').insertBefore(newDiv,div)
    console.log(parent)

  }

  createNewBlogPost();

});