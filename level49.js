document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'We have had adventures.'
    },
    {
      name: '1',
      img: 'Hemos tenido aventuras.'
    },
    {
      name: '2',
      img: 'Mummy could not get the camp stove to work.'
    },
    {
      name: '2',
      img: 'Mamá no pudo hacer funcionar la estufa de campamento.'
    },
    {
      name: '3',
      img: 'We will have to make do with a cold breakfast.'
    },
    {
      name: '3',
      img: 'Tendremos que conformarnos con un desayuno frío.'
    },
    {
      name: '4',
      img: 'Dad came to see what was wrong.'
    },
    {
      name: '4',
      img: 'Papá vino a ver qué estaba mal.'
    },
    /* {
      name: '5',
      img: 'Inside the cupboard were all the things we need to keep the house clean.'
    },
    {
      name: '5',
      img: 'Inuti skåpet fanns allt vi behöver för att hålla huset rent.'
    }, */
    {
      name: '6',
      img: 'Come and join us.'
    },
    {
      name: '6',
      img: 'Ven y únete a nosotros.'
    },
    {
      name: '7',
      img: 'Soon there was the lovely smell of sausages and bacon.'
    },
    {
      name: '7',
      img: 'Pronto hubo un delicioso olor a salchichas y tocino.'
    },
    {
      name: '8',
      img: 'There was plenty for everyone.'
    },
    {
      name: '8',
      img: 'Había suficiente para todos.'
    },
    {
      name: '9',
      img: 'I love camping.'
    },
    {
      name: '9',
      img: 'Me encanta acampar.'
    },
    /* {
      name: '10',
      img: 'The cat has a tiny toy.'
    },
    {
      name: '10',
      img: 'Katten har en liten leksak.'
    },
    {
      name: '11',
      img: 'Spit it out!'
    },
    {
      name: '11',
      img: 'Spotta ut det!'
    },
    {
      name: '12',
      img: 'You could swallow it and choke.'
    },
    {
      name: '12',
      img: 'Du kunde svälja det och kvävas.'
    } */
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/spa2'> Continue to next level </a>";


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
