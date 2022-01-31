console.log("Guess the Number")


const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    // Generates a random number that becomes secretNum
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      
      // Logs every player guess (correct/incorrect) into the prevGuesses arr using push method
      console.log(game.this.getGuess());
      while(this.prevGuesses[prevGuesses - 1] !== this.secretNum){
        console.log(this.render())
      };
      console.log(this.render());
      return
  },
  prevGuesses: [],
  getGuess: function() {
    // Creates a prompt instructing the player to guess a number within the given range
    // The player input is assigned to a variable that will be used later in the game
    const playerInput = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`));
    
    
    // console.log(playerInput)
    while (playerInput !== isNaN(playerInput) || playerInput > this.smallestNum || playerInput < this.biggestNum) {
      // While loop runs as long as the player has entered anything
      // parseInt function converts player input from a string into an integer. If the input is within the given range the while loop break. If it is outside the range, it continues to run
      prompt(`Try Again! Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`); 
  }
  return this.playerInput;
  
  },
  render: function(){
    // render method compares the player's guess with the secretNum
    
    const totalGuesses = this.prevGuesses.length
    // totalGuesses finds the length of the preGuesses array
    
    const listOfGuesses = this.prevGuesses.join() 
    // listOfGuesses changes the list of prevGuesses into a string
    
    if(this.getGuess === this.secretNum) {
      // If the player guesses correctly, the player is alerted that they won and displays the total number of attempts => totalGuesses variable
      
      alert(`Congrats! You guessed the number in ${this.totalGuesses}`)
    

      //If the player's guess is too low/too high, the player is alerted and all previous guesses are displayed 
    } else if(this.getGuess > this.secretNum) {
      alert(`Your guess is too high. Previous guesses: ${listOfGuesses}`)
    } else if(this.getGuess < this.secretNum) {
      alert(`Your guess is too low. Previous guesses: ${listOfGuesses}`)
    }
      
    }, 
    } 

 console.log(game.play())

  // console.log(game.getGuess())

  

    


  



