document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Go to the door.'
    },
    {
      name: '1',
      img: 'Gå till dörren.'
    },
    {
      name: '2',
      img: 'Can you shut the door?'
    },
    {
      name: '2',
      img: 'Kan du stänga dörren?'
    },
    {
      name: '3',
      img: 'What are you doing right now?'
    },
    {
      name: '3',
      img: 'Vad gör du just nu?'
    },
    {
      name: '4',
      img: 'I´m drawing a flower.'
    },
    {
      name: '4',
      img: 'Jag ritar en blomma.'
    },
    {
      name: '5',
      img: 'I am painting with my new water colours.'
    },
    {
      name: '5',
      img: 'Jag målar med mina nya vattenfärger.'
    },
    {
      name: '6',
      img: 'You have to eat your breakfast.'
    },
    {
      name: '6',
      img: 'Du måste äta din frukost.'
    },
    {
      name: '7',
      img: 'What do we have for breakfast?'
    },
    {
      name: '7',
      img: 'Vad har vi till frukost?'
    },
    {
      name: '8',
      img: 'There is milk, bread and butter.'
    },
    {
      name: '8',
      img: 'Det finns mjölk, bröd och smör.'
    },
    {
      name: '9',
      img: 'I don´t want to drink milk.'
    },
    {
      name: '9',
      img: 'Jag vill inte dricka mjölk.'
    },
    {
      name: '10',
      img: 'What would you like to drink?'
    },
    {
      name: '10',
      img: 'Vad skulle du vilja dricka?'
    },
    {
      name: '11',
      img: 'I am not thirsty anymore.'
    },
    {
      name: '11',
      img: 'Jag är inte törstig längre.'
    },
    {
      name: '12',
      img: 'I´m looking for my wallet.'
    },
    {
      name: '12',
      img: 'Jag söker min plånbok.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 5 completed!</h2><a href='https://elaidina.github.io/spa2/level6.html'> Continue to Level 6</a>";


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
