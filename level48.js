document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They had a wonderful time in the wood.'
    },
    {
      name: '1',
      img: 'De hade en underbar tid i skogen.'
    },
    {
      name: '2',
      img: 'They swung from trees like monkeys.'
    },
    {
      name: '2',
      img: 'De svängde från träd som apor.'
    },
    {
      name: '3',
      img: 'I´m the king of the jungle!'
    },
    {
      name: '3',
      img: 'Jag är kungen av djungeln!'
    },
    {
      name: '4',
      img: 'They chased after rabbits, trying to catch them.'
    },
    {
      name: '4',
      img: 'De jagade efter kaniner och försökte fånga dem.'
    },
    {
      name: '5',
      img: 'But the rabbits ran faster.'
    },
    {
      name: '5',
      img: 'Men kaninerna sprang fortare.'
    },
    {
      name: '6',
      img: 'I nearly caught one, but it ran down a rabbit hole.'
    },
    {
      name: '6',
      img: 'Jag fick nästan en, men den rann ner i ett kaninhål.'
    },
    {
      name: '7',
      img: 'At last they began to feel hungry.'
    },
    {
      name: '7',
      img: 'Äntligen började de känna sig hungriga.'
    },
    {
      name: '8',
      img: 'None of them had had breakfast.'
    },
    {
      name: '8',
      img: 'Ingen av dem hade ätit frukost.'
    },
    {
      name: '9',
      img: 'They wanted to go back to the camp, but they did not know which way to go.'
    },
    {
      name: '9',
      img: 'De ville gå tillbaka till lägret, men de visste inte vilken väg de skulle gå.'
    },
    {
      name: '10',
      img: 'We are lost.'
    },
    {
      name: '10',
      img: 'Vi är vilse.'
    },
    {
      name: '11',
      img: 'I was just coming to find you.'
    },
    {
      name: '11',
      img: 'Jag kom precis för att hitta dig.'
    },
    {
      name: '12',
      img: 'What have you been up to?'
    },
    {
      name: '12',
      img: 'Vad har du haft för dig?'
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
