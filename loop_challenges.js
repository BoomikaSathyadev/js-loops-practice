/* 
1. Write a `for` loop that loops through the array `["Pen", "Paper", "Pencil", "Eraser"]` and stops the loop when it finds "Pencil".
    Store all stationaries before `"Pencil"` in a new array named `selectedStationary`
*/
let stationaries = ["Pen", "Paper", "Pencil", "Eraser"];
let selectedStationary = [];
for (let i = 0; i < stationaries.length; i++) {
    if (stationaries[i] == "Pencil") {
        break;
    }
    selectedStationary.push(stationaries[i]);
}
console.log("1. Selected Stationaries: ",selectedStationary); 


/*
2. Write a `for` loop that loops through the array `["Tea", "Coffee", "Milk", "Fresh Juice"]` and skips "Milk".
    Store the other drinks in a new array named `selectedDrinks`
*/
let drinks = ["Tea", "Coffee", "Milk", "Fresh Juice"];
let selectedDrinks = [];
for (let j = 0; j < drinks.length; j++) {
    if (drinks[j] === "Milk" || drinks[j] === "milk") {
        continue;
    }
    selectedDrinks.push(drinks[j]);
}
console.log("2. Selected Drinks: ", selectedDrinks);


/*
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found.
    Store the numbers before `4` in a new array named 'smallNumbers'
*/
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num);
}
console.log("3. Small Numbers: ", smallNumbers);


/*
4. Use a `for-of` loop to iterate through the array `["Apple", "Banana", "Cherry", "Strawberry", "Dragon fruit"]` and skip `"Cherry"`.
    Store the other fruits in an array named `preferredFruits`.
*/
let fruitTypes = ["Apple", "Banana", "Cherry", "Strawberry", "Dragon fruit"];
let preferredFruits = [];
for (const fruits of fruitTypes) {
    if (fruits === "Cherry") {
        continue;
    }
    preferredFruits.push(fruits);
}
console.log("4. Preferred Fruits: ", preferredFruits);


/*
5. Use a `for-in` loop to loop through an object containing city populations.
    Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`. 
        {"London": 8900000, "New York": 8400000, "Paris": 2200000, "Berlin": 3500000, "Tokyo": 68000000}
*/
let citiesPopulation = {
    London: 8900000,
    "New York": 8400000,
    Paris: 2200000,
    Berlin: 3500000,
    "Tokyo": 68000000
}
let cityNewPopulations = {};
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));
for (const city in citiesPopulation) {
    if (city == "Berlin") {
        break;
    }
    cityNewPopulations[city] = citiesPopulation[city];
}
console.log("5. New City Populations: ", cityNewPopulations);


/*
6. Use a `for-in` loop to loop through an object containing city populations.
    Skip any city with an population below 3 million and store the rest in a new object named `largeCities`.
        {"Sydney": 5000000, "Tokyo": 9000000, "Berlin": 3500000, "Paris": 2200000}
*/
let worldCities = {
    "Sydney": 5000000, 
    "Tokyo": 900000, 
    "Berlin": 3500000, 
    "Paris": 2200000
}
let largeCities = {};
for (const cities in worldCities) {
    if (worldCities[cities] < 3000000) {
        continue;
    }
    largeCities[cities] = worldCities[cities];
}
console.log("6. Large Cities: ", largeCities);


/*
7. Write a `for-each` loop that iterates through the array '["Idly", "Pongal", "Dosa", "Coffee"]'.
    Skip `"Coffee"` is found, and store all previous items in a new array named `availableBreakfastItems`.
*/
let breakfastItems = ["Idly", "Pongal", "Dosa", "Coffee"];
let availableBreakfastItems = [];
breakfastItems.forEach(function(breakFast) {
    if (breakFast === "Coffee") {
        return;
    }
    availableBreakfastItems.push(breakFast);
});
console.log("7. Available Breakfast Items: ", availableBreakfastItems);


/*
8. Write a `for-each` loop that iterates through the array '["Car", "Bike", "Train", "Bus", "Truck"]'.
    Skip `"Train"` and store the other transportations in a new array named `transportItems`.
*/
let transportations = ["Car", "Bike", "Train", "Bus", "Truck"];
let transportItems = [];
transportations.forEach(transport => {
    if (transport === "Train") {
        return;
    }
    transportItems.push(transport);
});
console.log("8. Transport Items: ", transportItems);


/*
9. Write a `for` loop that iterates through the array '[2, 5, 7, 9]'.
    Skip the value `7` and multiply the rest by 2. Store the result in a new array named `doubledNumbers`.
*/
let number = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < number.length; i++) {
    if (number[i] == 7){
        continue;
    }
    doubledNumbers.push(number[i] * 2)
}
console.log("9. Doubled Numbers: ", doubledNumbers);


/*
10. Use a `for-of` loop to iterate through the array '["Bhel Puri", "Pani Puri", "Kaalan", "Pav Bhaji", "Masal Puri"]'.
    Stop when the length of the current item name is greater than 10 and stores the items iterated over in an array named `shortFoodNames`.
*/
let foodNames = ["Bhel Puri", "Pani Puri", "Spicy Masal Puri", "Cheesy Pav Bhaji", "Kaalan"];
let shortFoodNames = [];
for (const food of foodNames) {
    if (food.length > 10) {
        break;
    }
    shortFoodNames.push(food);
}
console.log("10. Short Food Names: ", shortFoodNames);