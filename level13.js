document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'What do you think about it?'
    },
    {
      name: '1',
      img: '¿Qué piensas acerca de eso?'
    },
    {
      name: '2',
      img: 'Switch off the light.'
    },
    {
      name: '2',
      img: 'Apaga la luz.'
    },
    {
      name: '3',
      img: 'Where do you play with your friends?'
    },
    {
      name: '3',
      img: '¿Dónde juegas con tus amigos?'
    },
    {
      name: '4',
      img: 'When do you come home from work?'
    },
    {
      name: '4',
      img: '¿Cuándo llegas a casa del trabajo?'
    },
    {
      name: '5',
      img: 'Hold the screw-driver.'
    },
    {
      name: '5',
      img: 'Sujeta el destornillador.'
    },
    {
      name: '6',
      img: 'I watch a bedtime story every evening.'
    },
    {
      name: '6',
      img: 'Veo un cuento antes de dormir todas las noches.'
    },
    {
      name: '7',
      img: 'Can you guess what I am?'
    },
    {
      name: '7',
      img: '¿Puedes adivinar lo que soy?'
    },
    {
      name: '8',
      img: 'Do you plant flowers and trees?'
    },
    {
      name: '8',
      img: '¿Plantas flores y árboles?'
    },
    {
      name: '9',
      img: 'Yes, I am a gardener.'
    },
    {
      name: '9',
      img: 'Sí, soy jardinero.'
    },
    {
      name: '10',
      img: 'Guess what I am thinking of.'
    },
    {
      name: '10',
      img: 'Adivina en qué estoy pensando.'
    },
    {
      name: '11',
      img: 'Is it a boy, a girl, an animal or a thing?'
    },
    {
      name: '11',
      img: '¿Es un niño, una niña, un animal o una cosa?'
    },
    {
      name: '12',
      img: 'Does it hang on the wall?'
    },
    {
      name: '12',
      img: '¿Está colgado en la pared?'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 13 completed!</h2><a href='https://elaidina.github.io/spa2/level14.html'> Continue to Level 14</a>";


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
