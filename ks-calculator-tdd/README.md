# ks-calculator-tdd

### Getting started

1. Clone / Fork this repo.
2. cd ks-calculator-tdd
3. `npm i` / `yarn`
4. `npm test` / `yarn test`

### Task 1, browser tests
1. Write an e2e test two '+' operations (for example: `2 + 3 + 4 = 9`)
2. Write an e2e test for reset input value: add a button 'C', which clears the input value
3. (bonus) Write a test for "reset all": after first click on 'C' it becomes 'AC'. Pressing it will reset everything (including prevValue state)

### Task 2, component test
1. Write a test for two "minus" operations: `7 - 2 - 1 = 4`

### Task 3, server
1. Add a test for checking saved values before refresh
2. Clear server values between tests (in beforeEach). Use `/api/flush` endpoint for that. 
