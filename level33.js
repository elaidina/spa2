document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Dad came to catch us in his car.'
    },
    {
      name: '1',
      img: 'Papá vino a buscarnos en su auto.'
    },
    {
      name: '2',
      img: 'He put us in our safety seats and fastened our safety belts.'
    },
    {
      name: '2',
      img: 'Nos puso en nuestros asientos de seguridad y nos abrochó los cinturones de seguridad.'
    },
    {
      name: '3',
      img: 'Have you enjoyed yourselves?'
    },
    {
      name: '3',
      img: '¿Habéis disfrutado?'
    },
    {
      name: '4',
      img: 'I saved Tom´s life.'
    },
    {
      name: '4',
      img: 'Salvé la vida de Tom.'
    },
    {
      name: '5',
      img: 'Well done.'
    },
    {
      name: '5',
      img: 'Bien hecho.'
    },
    {
      name: '6',
      img: 'Now turn the page.'
    },
    {
      name: '6',
      img: 'Ahora pasa la página.'
    },
    {
      name: '7',
      img: 'Help me solve the puzzle.'
    },
    {
      name: '7',
      img: 'Ayúdame a resolver el rompecabezas.'
    },
    {
      name: '8',
      img: 'Point to the things that could be dangerous.'
    },
    {
      name: '8',
      img: 'Señale las cosas que podrían ser peligrosas.'
    },
    {
      name: '9',
      img: 'This is a haunted house.'
    },
    {
      name: '9',
      img: 'Esta es una casa embrujada.'
    },
    {
      name: '10',
      img: 'Once there was a girl.'
    },
    {
      name: '10',
      img: 'Había una vez una niña.'
    },
    {
      name: '11',
      img: 'She went to live in this big old house.'
    },
    {
      name: '11',
      img: 'Se fue a vivir a esta gran casa antigua.'
    },
    {
      name: '12',
      img: 'It was a splendid place.'
    },
    {
      name: '12',
      img: 'Era un lugar espléndido.'
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

cards[optionOneId].parentElement.classList.remove("green")
      

      

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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/spa2/level34.html'> Continue to next level </a>";


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
