document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: "There´s a bridge across the river."
    },
    {
      name: '1',
      img: 'Hay un puente que cruza el río.'
    },
    {
      name: '2',
      img: "It doesn´t matter."
    },
    {
      name: '2',
      img: 'No importa.'
    },
    {
      name: '3',
      img: 'We can drink water or orange juice.'
    },
    {
      name: '3',
      img: 'Podemos beber agua o jugo de naranja.'
    },
    {
      name: '4',
      img: "You´re swimming like a dog."
    },
    {
      name: '4',
      img: 'Estás nadando como un perro.'
    },
    {
      name: '5',
      img: 'I´m swimming like a cat.'
    },
    {
      name: '5',
      img: 'Estoy nadando como un gato.'
    },
    {
      name: '6',
      img: "Can you speak English?"
    },
    {
      name: '6',
      img: '¿Puede hablar Inglés?'
    },
    {
      name: '7',
      img: 'I am leaving on Monday.'
    },
    {
      name: '7',
      img: '"Me voy el lunes.'
    },
    {
      name: '8',
      img: 'I am very sorry that I have to leave.'
    },
    {
      name: '8',
      img: 'Lamento mucho tener que irme.'
    },
    {
      name: '9',
      img: 'We would like to say good-bye to you.'
    },
    {
      name: '9',
      img: 'Nos gustaría despedirnos de ti.'
    },
    {
      name: '10',
      img: 'It´s a pitty, that you are leaving.'
    },
    {
      name: '10',
      img: 'Es una pena que te vayas.'
    },
    {
      name: '11',
      img: 'Take care and good luck.'
    },
    {
      name: '11',
      img: 'Tenga cuidado y buena suerte.'
    },
    {
      name: '12',
      img: 'I enjoy a lot of snow in January.'
    },
    {
      name: '12',
      img: 'Disfruto de mucha nieve en enero.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 19 completed!</h2><a href='https://elaidina.github.io/spa2/level20.html'> Continue to Level 20</a>";


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
