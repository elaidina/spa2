document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They are very dirty and fat but also funny.'
    },
    {
      name: '1',
      img: 'Son muy sucios y gordos, pero también divertidos.'
    },
    {
      name: '2',
      img: 'They like playing in the mud.'
    },
    {
      name: '2',
      img: 'Les gusta jugar en el barro.'
    },
    {
      name: '3',
      img: 'The children like playing in the yard.'
    },
    {
      name: '3',
      img: 'A los niños les gusta jugar en el patio.'
    },
    {
      name: '4',
      img: 'They are looking forward to making a hut.'
    },
    {
      name: '4',
      img: 'Están ansiosos por hacer una choza.'
    },
    {
      name: '5',
      img: 'They need a hammer, nails and planks.'
    },
    {
      name: '5',
      img: 'Necesitan un martillo, clavos y tablones.'
    },
    {
      name: '6',
      img: 'I´d like to help them to hammer the planks.'
    },
    {
      name: '6',
      img: 'Me gusta ayudarlos a martillar las tablas.'
    },
    {
      name: '7',
      img: 'Rather help us to hammer the nails.'
    },
    {
      name: '7',
      img: 'Más bien ayúdanos a martillar los clavos.'
    },
    {
      name: '8',
      img: 'How do you like the finished hut?'
    },
    {
      name: '8',
      img: '¿Qué te parece la cabaña terminada?'
    },
    {
      name: '9',
      img: 'It´s the best hut ever.'
    },
    {
      name: '9',
      img: 'Es la mejor cabaña que existe.'
    },
    {
      name: '10',
      img: 'It´s a lovely hot day.'
    },
    {
      name: '10',
      img: 'Es un hermoso día caluroso.'
    },
    {
      name: '11',
      img: 'The children are at the riverside.'
    },
    {
      name: '11',
      img: 'Los niños están en la orilla del río.'
    },
    {
      name: '12',
      img: 'There is a lot of sand everywhere.'
    },
    {
      name: '12',
      img: 'Hay mucha arena por todas partes.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 18 completed!</h2><a href='https://elaidina.github.io/spa2/level19.html'> Continue to Level 19</a>";


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
