// program data:
var number = Math.floor(Math.random() * 100) + 1;;
var guess;
var limit = 10;
var won = false;
var guesses = [];
// prompt user for their guess 
for (i=1; i<= limit; i++)
{
    do {
            guess =  parseInt(window.prompt("guess a number"));
        }
    while (isNaN(guess) || isPreviousguess())
// if correct: let the user know they won
if (guess == number)
{
    document.write("Correct! you won");
    won = true;
    break;
}

// if incorrect: let the user know
else if ( guess > number)
{
    guesses[i] = guess;
    alert("incorrect. \nyour guess is too high.\nYou have guessed:" + guesses.toString() + "\nTries remaining: " + (limit - i)) ;
}
else {
    guesses[i] = guess;
    alert("incorrect. \nyour guess is too low.\nYou have guessed:" + guesses.toString() + "\nTries remaining: " + (limit - i)) ;
}
}
// if the user ran out of tries, let them know the game is over
if (!won)
{
    document.write("Sorry, you ran out of tries. Game over.  <br> The correct number was: " + number);
}

// fucntion, check this number has been gueseed
function isPreviousguess()
{
    for (i=0;i < guesses.length; i++)
    {
        if(guesses[i] == guess)
        {
            return true;
        }
    }
    return false;
}