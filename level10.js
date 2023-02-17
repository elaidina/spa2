document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Drawing is difficult.'
    },
    {
      name: '1',
      img: 'Det är svårt att teckna.'
    },
    {
      name: '2',
      img: 'How do you build a house?'
    },
    {
      name: '2',
      img: 'Hur bygger man ett hus?'
    },
    {
      name: '3',
      img: 'The house consists of walls, a roof, windows, a chimney, a fence and a door.'
    },
    {
      name: '3',
      img: 'Huset består av väggar, tak, fönster, skorsten, staket och dörr.'
    },
    {
      name: '4',
      img: 'The blue ball is bigger than the red ball.'
    },
    {
      name: '4',
      img: 'Den blå bollen är större än den röda bollen.'
    },
    {
      name: '5',
      img: 'Which ball is the biggest?'
    },
    {
      name: '5',
      img: 'Vilken boll är störst?'
    },
    {
      name: '6',
      img: 'I would like to learn an English song.'
    },
    {
      name: '6',
      img: 'Jag skulle vilja lära mig en engelsk låt.'
    },
    {
      name: '7',
      img: 'We can call Mary.'
    },
    {
      name: '7',
      img: 'Vi kan ringa Mary.'
    },
    {
      name: '8',
      img: "She´s a very good singer."
    },
    {
      name: '8',
      img: 'Hon är en väldigt bra sångerska.'
    },
    {
      name: '9',
      img: 'Listen, do you know this song?'
    },
    {
      name: '9',
      img: 'Hör du, kan du den här låten?'
    },
    {
      name: '10',
      img: 'There is a brilliant book on the shelf.'
    },
    {
      name: '10',
      img: 'Det ligger en lysande bok på hyllan.'
    },
    {
      name: '11',
      img: 'I often read this book.'
    },
    {
      name: '11',
      img: 'Jag läser ofta den här boken.'
    },
    {
      name: '12',
      img: 'I am too short to reach the book on the shelf.'
    },
    {
      name: '12',
      img: 'Jag är för kort för att nå boken i hyllan.'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 10 completed!</h2><a href="https://elaidina.github.io/spa2/level11.html"> Continue to Level 11</a>';


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
