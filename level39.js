document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Tom watched her.'
    },
    {
      name: '1',
      img: 'Tom la observó.'
    },
    {
      name: '2',
      img: 'Mrs White pushed the silver filing into the hole of Tom´s tooth.'
    },
    {
      name: '2',
      img: 'La Sra. White empujó el limado de plata en el agujero del diente de Tom.'
    },
    {
      name: '3',
      img: 'She pressed it down and made it perfectly smooth.'
    },
    {
      name: '3',
      img: 'Ella lo presionó y lo hizo perfectamente suave.'
    },
    {
      name: '4',
      img: 'Good as new!'
    },
    {
      name: '4',
      img: '¡Como nuevo!'
    },
    {
      name: '5',
      img: 'Did it hurt?'
    },
    {
      name: '5',
      img: '¿Dolió?'
    },
    {
      name: '6',
      img: 'The drill was noisy.'
    },
    {
      name: '6',
      img: 'El taladro hacía ruido.'
    },
    {
      name: '7',
      img: 'But it didn´t hurt.'
    },
    {
      name: '7',
      img: 'Pero no me dolió.'
    },
    {
      name: '8',
      img: 'You have both got good teeth.'
    },
    {
      name: '8',
      img: 'Ambos tienen buenos dientes.'
    },
    {
      name: '9',
      img: 'Keep them that way.'
    },
    {
      name: '9',
      img: 'Mantenlos así.'
    },
    {
      name: '10',
      img: 'Eat a lot of different foods.'
    },
    {
      name: '10',
      img: 'Come muchos alimentos diferentes.'
    },
    {
      name: '11',
      img: 'But remember, sweet foods can hurt your teeth, so don´t eat them too often.'
    },
    {
      name: '11',
      img: 'Pero recuerda, los alimentos dulces pueden dañar tus dientes, así que no los comas con demasiada frecuencia.'
    },
    {
      name: '12',
      img: 'Never forget to clean your teeth in the morning and at bedtime with a floride toothpaste.'
    },
    {
      name: '12',
      img: 'Nunca olvides lavarte los dientes por la mañana y antes de acostarte con un dentífrico florido.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/spa2/level40.html'> Continue to next level </a>";


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
