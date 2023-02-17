document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Stick the eyes, the nose and the mouth on the mask.'
    },
    {
      name: '1',
      img: 'Lima fast ögonen, näsan och munnen på masken.'
    },
    {
      name: '2',
      img: 'My dress is too short and wide.'
    },
    {
      name: '2',
      img: 'Min klänning är för kort och säckig.'
    },
    {
      name: '3',
      img: 'I´m standing in the middle of a circle.'
    },
    {
      name: '3',
      img: 'Jag står i mitten av cirkeln.'
    },
    {
      name: '4',
      img: 'Put your shoes on.'
    },
    {
      name: '4',
      img: 'Sätt på dig dina skor.'
    },
    {
      name: '5',
      img: 'Take care of you.'
    },
    {
      name: '5',
      img: 'Ta hand om dig själv.'
    },
    {
      name: '6',
      img: 'Do you live in a town or a village?'
    },
    {
      name: '6',
      img: 'Bor du i stan eller på landet?'
    },
    {
      name: '7',
      img: 'What can you see?'
    },
    {
      name: '7',
      img: 'Vad ser du?'
    },
    {
      name: '8',
      img: 'I can see a duckling, some chicks, a dog and a cat.'
    },
    {
      name: '8',
      img: 'Jag ser en ankunge, några ungar, en hund och en katt.'
    },
    {
      name: '9',
      img: 'What colour is the cat?'
    },
    {
      name: '9',
      img: 'Vilken färg har den katten?'
    },
    {
      name: '10',
      img: 'The cat is black.'
    },
    {
      name: '10',
      img: 'Katten är svart.'
    },
    {
      name: '11',
      img: 'I like chocolate ice-cream.'
    },
    {
      name: '11',
      img: 'Jag gillar chokladglass.'
    },
    {
      name: '12',
      img: 'I like listening to stories.'
    },
    {
      name: '12',
      img: 'Jag gillar att höra historier.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 7 completed!</h2><a href='https://elaidina.github.io/spa2/level8.html'> Continue to Level 8</a>";


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
