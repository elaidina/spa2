document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They are looking forward to see their grandma.'
    },
    {
      name: '1',
      img: 'Están deseando ver a su abuela.'
    },
    {
      name: '2',
      img: 'Her village is not far from the town.'
    },
    {
      name: '2',
      img: 'Su aldea no está lejos de la ciudad.'
    },
    {
      name: '3',
      img: 'We are coming along with them.'
    },
    {
      name: '3',
      img: 'Nosotros vamos con ellos.'
    },
    {
      name: '4',
      img: 'Can you wait for us?'
    },
    {
      name: '4',
      img: '¿Puedes esperarnos?'
    },
    {
      name: '5',
      img: 'I must ask everyone.'
    },
    {
      name: '5',
      img: 'Debo preguntarle a todos.'
    },
    {
      name: '6',
      img: 'We will be going through the town.'
    },
    {
      name: '6',
      img: 'Iremos por la ciudad.'
    },
    {
      name: '7',
      img: 'We will be able to see lots of cars, shops and big houses.'
    },
    {
      name: '7',
      img: 'Podremos ver muchos autos, tiendas y casas grandes.'
    },
    {
      name: '8',
      img: 'There are lots of people in the streets.'
    },
    {
      name: '8',
      img: 'Hay mucha gente en las calles.'
    },
    {
      name: '9',
      img: 'Show me the way, please.'
    },
    {
      name: '9',
      img: 'Muéstrame el camino, por favor.'
    },
    {
      name: '10',
      img: "Go straight and then turn left."
    },
    {
      name: '10',
      img: 'Sigue recto y luego gira a la izquierda.'
    },
    {
      name: '11',
      img: "Turn right at the giant bridge."
    },
    {
      name: '11',
      img: 'Gira a la derecha en el puente gigante.'
    },
    {
      name: '12',
      img: 'There´s my favourite shop on the right and a church on the left.'
    },
    {
      name: '12',
      img: 'Hay mi tienda favorita a la derecha y una iglesia a la izquierda.'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 16 completed!</h2><a href="https://elaidina.github.io/spa2/level17.html"> Continue to Level 17</a>'


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
