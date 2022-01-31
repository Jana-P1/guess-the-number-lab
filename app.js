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
      console.log(game.getGuess());
      while(this.getGuess !== this.secretNum){
        this.preGuesses.push(this.getGuess)
      };
      console.log(this.render())
  },
  prevGuesses: [],
  getGuess: function() {
    // Creates a prompt instructing the player to guess a number within the given range
    // The player input is assigned to a variable that will be used later in the game
    let input = window.prompt(`Enter a guess between ${smallestNum} and ${biggestNum}.`);
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
    // render method compares the player's guess with the secretNum
    
    let totalGuesses = this.prevGuesses.length
    // totalGuesses finds the length of the preGuesses array
    
    let listOfGuesses = this.prevGuesses.join() 
    // listOfGuesses changes the list of prevGuesses into a string
    
    if(this.getGuess === this.secretNum) {
      // If the player guesses correctly, the player is alerted that they won and displays the total number of attempts => totalGuesses variable
      
      console.log(`Congrats! You guessed the number in ${this.totalGuesses}`)
    

      //If the player's guess is too low/too high, the player is alerted and all previous guesses are displayed 
    } else if(this.getGuess > this.secretNum) {
      console.log(`Your guess is too high. Previous guesses: ${listOfGuesses}`)
    } else if(this.getGuess < this.secretNum) {
      console.log(`Your guess is too low. Previous guesses: ${listOfGuesses}`)
    }
      
    }, 
    } 

    console.log(game.play())
    


  



