document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'On the way home they passed a sweet shop.'
    },
    {
      name: '1',
      img: 'En el camino a casa pasaron por una tienda de dulces.'
    },
    {
      name: '2',
      img: 'I would like some sweets but I don´t want toothache like Tom.'
    },
    {
      name: '2',
      img: 'Me gustarían algunos dulces, pero no quiero un dolor de muelas como el de Tom.'
    },
    {
      name: '3',
      img: 'There are other tasty things that are better for you.'
    },
    {
      name: '3',
      img: 'Hay otras cosas sabrosas que son mejores para ti.'
    },
    {
      name: '4',
      img: 'So they bought two crunchy apples from the greengrocer.'
    },
    {
      name: '4',
      img: 'Así que compraron dos manzanas crujientes en el verdulero.'
    },
    {
      name: '5',
      img: 'Then they went to the chemist´s to buy new toothbrushes.'
    },
    {
      name: '5',
      img: 'Luego fueron a la farmacia a comprar cepillos de dientes nuevos.'
    },
    {
      name: '6',
      img: 'The chemist told them about disclosing tablets.'
    },
    {
      name: '6',
      img: 'El químico les habló de las tabletas reveladoras.'
    },
    {
      name: '7',
      img: 'Just chew half a tablet, then rinse your mouth with water.'
    },
    {
      name: '7',
      img: 'Bara tugga en halv tablett, skölj sedan munnen med vatten.'
    },
    {
      name: '8',
      img: 'He explained.'
    },
    {
      name: '8',
      img: 'Han förklarade.'
    },
    {
      name: '9',
      img: 'The parts of your teeth that most need cleaning will turn pink.'
    },
    {
      name: '9',
      img: 'De delar av dina tänder som behöver rengöras mest kommer att bli rosa.'
    },
    {
      name: '10',
      img: 'We would look funny going to playground with pink teeth.'
    },
    {
      name: '10',
      img: 'Vi skulle se roliga ut att gå till lekplatsen med rosa tänder.'
    },
    {
      name: '11',
      img: 'The chemist laughed.'
    },
    {
      name: '11',
      img: 'Kemisten skrattade.'
    },
    {
      name: '12',
      img: 'When there is no pink left, you know your teeth are clean.'
    },
    {
      name: '12',
      img: 'När det inte finns någon rosa kvar, vet du att dina tänder är rena.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/spa2/level42.html'> Continue to next level </a>";


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
