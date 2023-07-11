document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Go to the door.'
    },
    {
      name: '1',
      img: "Ve a la puerta."
    },
    {
      name: '2',
      img: 'Can you shut the door?'
    },
    {
      name: '2',
      img: "¿Puedes cerrar la puerta?"
    },
    {
      name: '3',
      img: 'What are you doing right now?'
    },
    {
      name: '3',
      img: "¿Que estás haciendo en este momento?"
    },
    {
      name: '4',
      img: 'I´m drawing a flower.'
    },
    {
      name: '4',
      img: "Estoy dibujando una flor."
    },
    {
      name: '5',
      img: 'I am painting with my new water colours.'
    },
    {
      name: '5',
      img: "Estoy pintando con mis nuevas acuarelas."
    },
    {
      name: '6',
      img: 'You have to eat your breakfast.'
    },
    {
      name: '6',
      img: "Debes desayunar."
    },
    {
      name: '7',
      img: 'What do we have for breakfast?'
    },
    {
      name: '7',
      img: "¿Qué tenemos para el desayuno?"
    },
    {
      name: '8',
      img: 'There is milk, bread and butter.'
    },
    {
      name: '8',
      img: "Hay leche, pan y mantequilla."
    },
    {
      name: '9',
      img: 'I don´t want to drink milk.'
    },
    {
      name: '9',
      img: "No quiero beber leche."
    },
    {
      name: '10',
      img: 'What would you like to drink?'
    },
    {
      name: '10',
      img: "¿Qué le gustaría beber?"
    },
    {
      name: '11',
      img: 'I am not thirsty anymore.'
    },
    {
      name: '11',
      img: 'Ya no tengo sed.'
    },
    {
      name: '12',
      img: 'I´m looking for my wallet.'
    },
    {
      name: '12',
      img: "Estoy buscando mi billetera."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 5 completed!</h2><a href='https://elaidina.github.io/spa2/level6.html'> Continue to Level 6</a>";


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
