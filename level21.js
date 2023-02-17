document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'We learn because we want to know the world around us.'
    },
    {
      name: '1',
      img: 'Vi lär oss för att vi vill lära känna världen omkring oss.'
    },
    {
      name: '2',
      img: 'We also want to know how to make things.'
    },
    {
      name: '2',
      img: 'Vi vill också veta hur man gör saker.'
    },
    {
      name: '3',
      img: 'My friend has got a little brother.'
    },
    {
      name: '3',
      img: 'Min kompis har en lillebror.'
    },
    {
      name: '4',
      img: 'He wants to know everything.'
    },
    {
      name: '4',
      img: 'Han vill veta allt.'
    },
    {
      name: '5',
      img: 'He always asks questions.'
    },
    {
      name: '5',
      img: 'Han ställer alltid frågor.'
    },
    {
      name: '6',
      img: 'Do people live on the Moon?'
    },
    {
      name: '6',
      img: 'Bor människor på månen?'
    },
    {
      name: '7',
      img: 'Why do people work?'
    },
    {
      name: '7',
      img: 'Varför arbetar människor?'
    },
    {
      name: '8',
      img: 'Do flowers eat and drink?'
    },
    {
      name: '8',
      img: 'Äter och dricker blommor?'
    },
    {
      name: '9',
      img: 'I go to my father and ask him.'
    },
    {
      name: '9',
      img: 'Jag går till min pappa och frågar honom.'
    },
    {
      name: '10',
      img: 'He knows a lot.'
    },
    {
      name: '10',
      img: 'Han vet mycket.'
    },
    {
      name: '11',
      img: 'I live in a block of flats.'
    },
    {
      name: '11',
      img: 'Jag bor i ett flerfamiljshus.'
    },
    {
      name: '12',
      img: 'There´s no chimney on our house.'
    },
    {
      name: '12',
      img: 'Det finns ingen skorsten på vårt hus.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 21 completed!</h2><a href='https://elaidina.github.io/spa2/level22.html'> Continue to Level 12</a>";


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
