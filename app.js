console.log("Guess the Number")


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      // Log every player guess (correct/incorrect) into the prevGuesses arr using push method
      for(let i = 0; i < game.prevGuesses.length; i++){
        previousGuess.push(game.getGuess.user)
      }
  },
  prevGuesses: [],
  getGuess: function() {
    // Creates a prompt instructing the player to guess a number within the given range
    // The player input is assigned to a variable that will be used later in the game
    this.user = window.prompt(`Enter a guess between ${smallestNum} and ${biggestNum}.`);
    console.log(this.user);
    while (this.user = true) {
      // While loop runs as long as the player has entered anything
      parseInt(user);
      // parseInt function converts player input from a string into an integer. If the input is within the given range the while loop break. If it is outside the range, it continues to run
      if(this.user >= smallestNum && this.user >= biggestNum){
          break
        }
        else {
          console.log(`Enter a guess between ${smallestNum} and ${biggestNum}.`)
      }
  }
  },
  render: function(){

  }
  

  }
  console.log(game.getGuess)

  console.log(game)
  

