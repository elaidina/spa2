document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'But the girl wasn´t just a girl.'
    },
    {
      name: '1',
      img: 'Pero la niña no era solo una niña.'
    },
    {
      name: '2',
      img: 'She was a witch.'
    },
    {
      name: '2',
      img: 'Ella era una bruja.'
    },
    {
      name: '3',
      img: 'She knew how to catch ghosts.'
    },
    {
      name: '3',
      img: 'Ella sabía cómo atrapar fantasmas.'
    },
    {
      name: '4',
      img: 'I hope there are some more!'
    },
    {
      name: '4',
      img: '¡Espero que haya algunos más!'
    },
    {
      name: '5',
      img: 'She carried on until she had caught all the ghosts in the house.'
    },
    {
      name: '5',
      img: 'Ella continuó hasta que atrapó a todos los fantasmas de la casa.'
    },
    {
      name: '6',
      img: 'Then she went to the kitchen.'
    },
    {
      name: '6',
      img: 'Luego se fue a la cocina.'
    },
    {
      name: '7',
      img: 'She put them all in the washing machine.'
    },
    {
      name: '7',
      img: 'Ella los puso todos en la lavadora.'
    },
    {
      name: '8',
      img: 'When they were clean she hung them out in the garden.'
    },
    {
      name: '8',
      img: 'Cuando estaban limpios, los colgaba en el jardín.'
    },
    {
      name: '9',
      img: 'It was fine weather for drying.'
    },
    {
      name: '9',
      img: 'Hacía buen tiempo para secarse.'
    },
    {
      name: '10',
      img: 'After drying, most of the ghosts became nice curtains.'
    },
    {
      name: '10',
      img: 'Después de secarse, la mayoría de los fantasmas se convirtieron en bonitas cortinas.'
    },
    {
      name: '11',
      img: 'One of them made a good tablecloth.'
    },
    {
      name: '11',
      img: 'Uno de ellos hizo un buen mantel.'
    },
    {
      name: '12',
      img: 'They were all very useful.'
    },
    {
      name: '12',
      img: 'Todos fueron muy útiles.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/spa2/level35.html'> Continue to next level </a>";


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
