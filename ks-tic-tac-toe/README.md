
   # Task 1

Add drivers for existing tests

   # Task 2
   
Implement an e2e for player1 wins the game

* __No need to implement ‘O’!__
* click cells for both players, making the first player fill the first row -> ['X', 'X', 'X'],['X', 'X', ''],['','',''] 
* expect the first player to win
* pass the test naively => should display the message without any conditions
* add additional expect that the winning message is not visible before first player actually won
* implement logic for naive winning (first row of ‘X’)

   # Task 3
   
Add a component test for "Game" for testing that Player 2 won the game

   # Bonus tasks
   
* Add a test for hiding registration during game
* Add a test for input fields validation
* Prevent clicking again on clicked cell
* Add red indicator for next player

   # Task 4
* Add unit tests for all scenarios 
