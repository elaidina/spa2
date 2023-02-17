document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'I like summer because Dad buys me lots of ice-cream.'
    },
    {
      name: '1',
      img: 'Jag gillar sommaren för pappa köper massor av glass till mig.'
    },
    {
      name: '2',
      img: 'The forest is very colourful in autumn.'
    },
    {
      name: '2',
      img: 'Skogen är väldigt färgglad på hösten.'
    },
    {
      name: '3',
      img: 'The fields, hills, houses and trees are covered with snow in winter.'
    },
    {
      name: '3',
      img: 'Åkrarna, kullarna, husen och träden är täckta av snö på vintern.'
    },
    {
      name: '4',
      img: 'We make a snowman with my friends.'
    },
    {
      name: '4',
      img: 'Vi gör en snögubbe med mina vänner.'
    },
    {
      name: '5',
      img: 'My aunt feeds her hens and ducks with corn and wheat.'
    },
    {
      name: '5',
      img: 'Min moster matar sina höns och ankor med majs och vete.'
    },
    {
      name: '6',
      img: 'She pours some milk into ints bowl.'
    },
    {
      name: '6',
      img: 'Hon häller lite mjölk i ints skål.'
    },
    {
      name: '7',
      img: 'The little kittens are cute and funny.'
    },
    {
      name: '7',
      img: 'De små kattungarna är söta och roliga.'
    },
    {
      name: '8',
      img: 'They always put their paws into the bowl and spill the milk.'
    },
    {
      name: '8',
      img: 'De lägger alltid tassarna i skålen och spiller mjölken.'
    },
    {
      name: '9',
      img: 'My uncle is very handy.'
    },
    {
      name: '9',
      img: 'Min farbror är väldigt händig.'
    },
    {
      name: '10',
      img: 'He plants vegetables and flowers.'
    },
    {
      name: '10',
      img: 'Han planterar grönsaker och blommor.'
    },
    {
      name: '11',
      img: 'Grandma makes very good jam and stewed fruits.'
    },
    {
      name: '11',
      img: 'Mormor gör väldigt god sylt och stuvade frukter.'
    },
    {
      name: '12',
      img: 'I help grandpa pick apples, pears, grapes and plums.'
    },
    {
      name: '12',
      img: 'Jag hjälper morfar att plocka äpplen, päron, vindruvor och plommon.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 23 completed!</h2><a href='https://elaidina.github.io/spa2/level24.html'> Continue to Level 24</a>";


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
