document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They had a wonderful time in the wood.'
    },
    {
      name: '1',
      img: 'Pasaron un tiempo maravilloso en el bosque.'
    },
    {
      name: '2',
      img: 'They swung from trees like monkeys.'
    },
    {
      name: '2',
      img: 'Se balanceaban de los árboles como monos.'
    },
    {
      name: '3',
      img: 'I´m the king of the jungle!'
    },
    {
      name: '3',
      img: '¡Soy el rey de la jungla!'
    },
    {
      name: '4',
      img: 'They chased after rabbits, trying to catch them.'
    },
    {
      name: '4',
      img: 'Persiguieron conejos, tratando de atraparlos.'
    },
    {
      name: '5',
      img: 'But the rabbits ran faster.'
    },
    {
      name: '5',
      img: 'Pero los conejos corrieron más rápido.'
    },
    {
      name: '6',
      img: 'I nearly caught one, but it ran down a rabbit hole.'
    },
    {
      name: '6',
      img: 'Casi atrapo uno, pero se metió en una madriguera de conejo.'
    },
    {
      name: '7',
      img: 'At last they began to feel hungry.'
    },
    {
      name: '7',
      img: 'Por fin empezaron a sentir hambre.'
    },
    {
      name: '8',
      img: 'None of them had had breakfast.'
    },
    {
      name: '8',
      img: 'Ninguno de ellos había desayunado.'
    },
    {
      name: '9',
      img: 'They wanted to go back to the camp, but they did not know which way to go.'
    },
    {
      name: '9',
      img: 'Querían volver al campamento, pero no sabían qué camino tomar.'
    },
    {
      name: '10',
      img: 'We are lost.'
    },
    {
      name: '10',
      img: 'Estamos perdidos.'
    },
    {
      name: '11',
      img: 'I was just coming to find you.'
    },
    {
      name: '11',
      img: 'Solo venía a buscarte.'
    },
    {
      name: '12',
      img: 'What have you been up to?'
    },
    {
      name: '12',
      img: '¿En qué has estado?'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/spa2/level49.html'> Continue to next level </a>";


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
