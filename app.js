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
        previousGuess.push(this.getGuess)
      }
  },
  prevGuesses: [],
  getGuess: function() {
    // Creates a prompt instructing the player to guess a number within the given range
    // The player input is assigned to a variable that will be used later in the game
    let input = prompt((`Enter a guess between ${smallestNum} and ${biggestNum}.`));
    console.log(input); 
    let playerInput = parseInt(input)
    while (playerInput = true) {
      // While loop runs as long as the player has entered anything
      // parseInt function converts player input from a string into an integer. If the input is within the given range the while loop break. If it is outside the range, it continues to run
      if(playerInput >= smallestNum && playerInput >= biggestNum){
          break
        }
        else {
          console.log(`Try again! ${playerInput}`)
      }
  }
  return playerInput
  },
  render: function(){
    let totalGuesses = this.prevGuesses.length 
    if(this.getGuess === this.secretNum) {
      console.log(`Congrats! You guessed the number in ${this.totalGuesses}`)
    } else if(this.getGuess > ) {}

    }
    
  },



