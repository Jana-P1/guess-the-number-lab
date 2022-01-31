console.log("Guess the Number")


const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
      // Generates a random number that becomes secretNum
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      
        // Logs every player guess (correct/incorrect) into the prevGuesses arr using push method
      // this.getGuess();
      while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum){
        this.prevGuesses.push(this.getGuess());
        console.log(this.prevGuesses);
        this.render()
      };
      // render();
      // return
  },
  getGuess: function() {
      // Creates a prompt instructing the player to guess a number within the given range
      // The player input is assigned to a variable that will be used later in the game
      let guess

      do{
        guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`));
        // prompt(`Try Again! Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`); 
    } while (isNaN(guess) || guess > this.smallestNum || guess < this.biggestNum) 
        // While loop runs as long as the player has entered anything
        // parseInt function converts player input from a string into an integer. If the input is within the given range the while loop break. If it is outside the range, it continues to run
      
  return guess;
}
,
  render: function(){
      // render method compares the player's guess with the secretNum
    const totalGuesses = this.prevGuesses.length
      // totalGuesses finds the length of the preGuesses array
    const listOfGuesses = this.prevGuesses.join() 
      // listOfGuesses changes the list of prevGuesses into a string
    if(this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
        // If the player guesses correctly, the player is alerted that they won and displays the total number of attempts => totalGuesses variable
      alert(`Congrats! You guessed the number in ${totalGuesses}`)
        //If the player's guess is too low/too high, the player is alerted and all previous guesses are displayed 
    } else{
      alert("Wrong")
    }
    // else if(this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
    //   alert(`Your guess is too high. Previous guesses: ${listOfGuesses}`)
    // } else if(this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
    //   alert(`Your guess is too low. Previous guesses: ${listOfGuesses}`)
    // }
      
    }, 
    } 

  // game.play()

  // game.getGuess()

  

    


  



