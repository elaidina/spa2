document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'He says that I put more fruit in my tummy than in the basket.'
    },
    {
      name: '1',
      img: 'Han säger att jag lägger mer frukt i magen än i korgen.'
    },
    {
      name: '2',
      img: 'In winter Grandpa makes a bird-house and hangs it in the tree.'
    },
    {
      name: '2',
      img: 'På vintern gör morfar ett fågelhus och hänger det i trädet.'
    },
    {
      name: '3',
      img: 'He puts some food there, so that the birds are not hungry in the cold winter.'
    },
    {
      name: '3',
      img: 'Han lägger lite mat där, så att fåglarna inte är hungriga i den kalla vintern.'
    },
    {
      name: '4',
      img: 'We must protect them bacause they help us.'
    },
    {
      name: '4',
      img: 'Vi måste skydda dem för de hjälper oss.'
    },
    {
      name: '5',
      img: 'They eat insects.'
    },
    {
      name: '5',
      img: 'De äter insekter.'
    },
    {
      name: '6',
      img: 'Some insects can damage the plants.'
    },
    {
      name: '6',
      img: 'Vissa insekter kan skada växterna.'
    },
    {
      name: '7',
      img: 'Why don´t we have ice-cream for breakfast?'
    },
    {
      name: '7',
      img: 'Varför äter vi inte glass till frukost?'
    },
    {
      name: '8',
      img: 'It´s snowing and cold wind is blowing.'
    },
    {
      name: '8',
      img: 'Det snöar och det blåser kall vind.'
    },
    {
      name: '9',
      img: 'The tea is too bitter.'
    },
    {
      name: '9',
      img: 'Teet är för bittert.'
    },
    {
      name: '10',
      img: 'Lemon juice makes it more sour.'
    },
    {
      name: '10',
      img: 'Citronsaft gör det surare.'
    },
    {
      name: '11',
      img: 'I eat my breakfast up and go out.'
    },
    {
      name: '11',
      img: 'Jag äter upp min frukost och går ut.'
    },
    {
      name: '12',
      img: 'The ice is slippery.'
    },
    {
      name: '12',
      img: 'Isen är hal.'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 24 completed!</h2><a href='https://elaidina.github.io/spa2/level25.html'> Continue to Level 25</a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
