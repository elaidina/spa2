document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Tidy this room up, please.'
    },
    {
      name: '1',
      img: 'Snälla, städa upp det här rummet.'
    },
    {
      name: '2',
      img: 'I´m looking for my pillow.'
    },
    {
      name: '2',
      img: 'Jag söker min kudde.'
    },
    {
      name: '3',
      img: 'Let´s dress our dolls up.'
    },
    {
      name: '3',
      img: 'Låt oss klä upp våra dockor.'
    },
    {
      name: '4',
      img: 'What is the doll wearing?'
    },
    {
      name: '4',
      img: 'Vad har dockan på sig?'
    },
    {
      name: '5',
      img: 'The doll has got blue underpants, green trousers, yellow t-shirt, little shoes and a green jacket.'
    },
    {
      name: '5',
      img: 'Dockan har blå kalsonger, gröna byxor, gul t-shirt, små skor och en grön jacka.'
    },
    {
      name: '6',
      img: 'You look so lovely in this dress.'
    },
    {
      name: '6',
      img: 'Du är så vacker i den här klänningen.'
    },
    {
      name: '7',
      img: 'She is wearing a red skirt, white nickers, blue tights, a white blouse and a green jacket.'
    },
    {
      name: '7',
      img: 'Hon är klädd i en röd kjol, vita trosor, blå strumpbyxor, en vit blus och en grön kavaj.'
    },
    {
      name: '8',
      img: 'They are going for a trip today.'
    },
    {
      name: '8',
      img: 'De ska ut på en resa idag.'
    },
    {
      name: '9',
      img: 'They need to pack a lot of things.'
    },
    {
      name: '9',
      img: 'De behöver packa en massa saker.'
    },
    {
      name: '10',
      img: 'I don´t want to get up.'
    },
    {
      name: '10',
      img: 'Jag vill inte gå upp.'
    },
    {
      name: '11',
      img: 'You put your trainers on and you´re ready to go.'
    },
    {
      name: '11',
      img: 'Du tar på dig dina träningsskor och du är redo att gå.'
    },
    {
      name: '12',
      img: 'The whole family is going to the country today.'
    },
    {
      name: '12',
      img: 'Hela familjen åker till landet idag.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 15 completed!</h2><a href='https://elaidina.github.io/spa2/level16.html'> Continue to Level 16</a>";


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
