document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They are very dirty and fat but also funny.'
    },
    {
      name: '1',
      img: 'De är väldigt smutsiga och feta men också roliga.'
    },
    {
      name: '2',
      img: 'They like playing in the mud.'
    },
    {
      name: '2',
      img: 'De gillar att leka i leran.'
    },
    {
      name: '3',
      img: 'The children like playing in the yard.'
    },
    {
      name: '3',
      img: 'Barnen gillar att leka på gården.'
    },
    {
      name: '4',
      img: 'They are looking forward to making a hut.'
    },
    {
      name: '4',
      img: 'De ser fram emot att få bygga en koja.'
    },
    {
      name: '5',
      img: 'They need a hammer, nails and planks.'
    },
    {
      name: '5',
      img: 'De behöver en hammare, spikar och plankor.'
    },
    {
      name: '6',
      img: 'I´d like to help them to hammer the planks.'
    },
    {
      name: '6',
      img: 'Jag skulle vilja hjälpa dem att hamra plankorna.'
    },
    {
      name: '7',
      img: 'Rather help us to hammer the nails.'
    },
    {
      name: '7',
      img: 'Hjälp oss hellre att hamra på spikarna.'
    },
    {
      name: '8',
      img: 'How do you like the finished hut?'
    },
    {
      name: '8',
      img: 'Hur tycker du om den färdiga kojan?'
    },
    {
      name: '9',
      img: 'It´s the best hut ever.'
    },
    {
      name: '9',
      img: 'Det är den bästa stugan någonsin.'
    },
    {
      name: '10',
      img: 'It´s a lovely hot day.'
    },
    {
      name: '10',
      img: 'Det är en härlig varm dag.'
    },
    {
      name: '11',
      img: 'The children are at the riverside.'
    },
    {
      name: '11',
      img: 'Barnen är vid floden.'
    },
    {
      name: '12',
      img: 'There is a lot of sand everywhere.'
    },
    {
      name: '12',
      img: 'Det är mycket sand överallt.'
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
