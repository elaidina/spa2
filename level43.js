document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They searched through a box of glittering decorations.'
    },
    {
      name: '1',
      img: 'Buscaron en una caja de decoraciones brillantes.'
    },
    {
      name: '2',
      img: 'Tom found a little angel for the top of the tree.'
    },
    {
      name: '2',
      img: 'Tom encontró un angelito para la copa del árbol.'
    },
    {
      name: '3',
      img: 'You are very helpful.'
    },
    {
      name: '3',
      img: 'Eres muy útil.'
    },
    {
      name: '4',
      img: 'There is a special someone waiting to meet you before we go home.'
    },
    {
      name: '4',
      img: 'Hay alguien especial esperándote para conocerte antes de irnos a casa.'
    },
    {
      name: '5',
      img: 'The little wooden house was covered with snow.'
    },
    {
      name: '5',
      img: 'La casita de madera estaba cubierta de nieve.'
    },
    {
      name: '6',
      img: 'Do come in and meet Father Christmas.'
    },
    {
      name: '6',
      img: 'Entra y conoce a Papá Noel.'
    },
    {
      name: '7',
      img: 'The lady was dressed as an elf.'
    },
    {
      name: '7',
      img: 'La dama estaba vestida como un elfo.'
    },
    {
      name: '8',
      img: 'Have you been good children?'
    },
    {
      name: '8',
      img: '¿Habéis sido buenos niños?'
    },
    {
      name: '9',
      img: 'Yes, always.'
    },
    {
      name: '9',
      img: 'Sí, siempre.'
    },
    {
      name: '10',
      img: 'Will you come down our chimney with presents on Christmas Eve?'
    },
    {
      name: '10',
      img: '¿Bajarás por nuestra chimenea con regalos en Nochebuena?'
    },
    {
      name: '11',
      img: 'Don´t you worry.'
    },
    {
      name: '11',
      img: 'No te preocupes.'
    },
    {
      name: '12',
      img: 'I will be there.'
    },
    {
      name: '12',
      img: 'Voy a estar allí.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/spa2/level44.html'> Continue to next level </a>";


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
