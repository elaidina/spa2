document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'It was nearly time for tea, so they all went indoors to wash their hands.'
    },
    {
      name: '1',
      img: 'Era casi la hora del té, así que todos entraron a lavarse las manos.'
    },
    {
      name: '2',
      img: 'Tom undid the stair gate and Josie helped her sister to climb the stairs.'
    },
    {
      name: '2',
      img: 'Tom abrió la puerta de la escalera y Josie ayudó a su hermana a subir las escaleras.'
    },
    {
      name: '3',
      img: 'I made sure that the water was not too hot.'
    },
    {
      name: '3',
      img: 'Me aseguré de que el agua no estuviera demasiado caliente.'
    },
    {
      name: '4',
      img: 'We all washed our hands.'
    },
    {
      name: '4',
      img: 'Todos nos lavamos las manos.'
    },
    {
      name: '5',
      img: 'I wanted to look out of the bathroom window.'
    },
    {
      name: '5',
      img: 'Quería mirar por la ventana del baño.'
    },
    {
      name: '6',
      img: 'Be careful, please.'
    },
    {
      name: '6',
      img: 'Ten cuidado, por favor.'
    },
    {
      name: '7',
      img: 'It is not safe to lean out of windows.'
    },
    {
      name: '7',
      img: 'No es seguro asomarse por las ventanas.'
    },
    {
      name: '8',
      img: 'I wasn´t going to.'
    },
    {
      name: '8',
      img: 'Yo no iba a hacerlo.'
    },
    {
      name: '9',
      img: 'Tom ran out of the bathroom and held the door shut.'
    },
    {
      name: '9',
      img: 'Tom salió corriendo del baño y mantuvo la puerta cerrada.'
    },
    {
      name: '10',
      img: 'Let me out, Tom.'
    },
    {
      name: '10',
      img: 'Déjame salir, Tom.'
    },
    {
      name: '11',
      img: 'It is dangerous to play with doors.'
    },
    {
      name: '11',
      img: 'Es peligroso jugar con las puertas.'
    },
    {
      name: '12',
      img: 'Someone´s fingers could get trapped.'
    },
    {
      name: '12',
      img: 'Los dedos de alguien podrían quedar atrapados.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 31 completed!</h2><a href='https://elaidina.github.io/spa2/level32.html'> Continue to Level 32</a>";


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
