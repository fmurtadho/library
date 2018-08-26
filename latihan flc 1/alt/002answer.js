
// Task:
// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write the following function to help Leo out:

// function howManyGifts(maxBudget, gifts)
// The first parameter is Leo's budget; he second one is an array (a list in Groovy) containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// NOTE: All numbers will be integers >= 0, and the array will never be empty.



// Step 1: Clarify - Understand the question
// Step 2: Create sample data
// Step 3: Solve Sample Data
// Step 4: Signature
// Step 5: List code constructs
// Step 6: Pseudo Code
// Step 7: Solve




// Step 1: Clarify - Understand the question

// Given an array of integers and a maximum budget(number), return how many intgers added together are less than/equal to the maxiumum budget

// Step 2: Create sample data
// howManyGifts(20, [13, 2, 4, 6, 1]) //Should return 4
// howManyGifts(10, [16, 2, 4, 10, 1]) //Should return 3
// howManyGifts(40, [13, 2, 4, 6, 1]) //Should return 5
// howManyGifts(12, [13, 12, 14, 16, 1]) //Should return 1


// Step 4: Signature
// function howManyGift(number, array) {
//   howMany array[i] <= number
//   return result
// }

// Step 5: List code constructs
// Loop
// Conditional


// Step 6: Pseudo Code
// function howManyGift(num, arr)
//   loop through arr
//     check each val in arr added together vs num
//       return maximum amount of values that equal <= num

// Step 7: Solve

function howManyGifts(maxBudget, gifts){
    let total = 0
    let count = 0
    let result = gifts.filter((gift, index) => {
      return gift <= maxBudget
    })
    result.forEach((gift, i) => {
      if(gift < maxBudget) {
        console.log(gift)
        total += gift
        console.log(total)
      }
      if(total <= maxBudget) {
        count += 1
        console.log(count)
      }
  
    })
    return count
}
// howManyGifts(20, [13, 2, 4, 6, 1]) //Should return 4
howManyGifts(10, [16, 2, 4, 10, 1]) //Should return 3
// howManyGifts(40, [13, 2, 4, 6, 1]) //Should return 5
// howManyGifts(12, [13, 12, 14, 16, 1]) //Should return 1


// function howManyGifts(maxBudget, gifts){
//     let previos = 0
//     gifts.forEach((gift, index) => {
      
//     })
// }
// howManyGifts(20, [13, 2, 4, 6, 1]) //Should return 4
// // howManyGifts(10, [16, 2, 4, 10, 1]) //Should return 3
// // howManyGifts(40, [13, 2, 4, 6, 1]) //Should return 5
// // howManyGifts(12, [13, 12, 14, 16, 1]) //Should return 1





