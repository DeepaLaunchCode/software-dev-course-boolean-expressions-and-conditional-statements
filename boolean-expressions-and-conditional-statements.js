/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = true;
let hasMap = false;
let hasSword = false;
let hasCompass = true;

console.log("You see two paths: mountains or village.");
const choice = readline.question("Go to 'mountains' or 'village'? ");

if (choice === "mountains") {
    if (hasTorch) {
        console.log("You walk through the dark mountains safely.");
        const mountainChoice = readline.question("Enter cave or continue? ");
        
        if (mountainChoice === "enter") {
            console.log("You find a chest.");
            const openChest = readline.question("Open it? (yes/no) ");
            
            if (openChest === "yes") {
                console.log("You get a sword!");
                hasSword = true;
            } else {
                console.log("You leave the chest.");
            }
        } else {
            console.log("You reach a dead end.");
        }
    } else {
        console.log("Too dark. You turn back.");
    }
} else if (choice === "village" || hasMap) {
    console.log("You reach the village.");
    const villageChoice = readline.question("Accept quest to slay monster? (yes/no) ");
    
    if (villageChoice === "yes") {
        if (hasSword) {
            console.log("You defeat the monster!");
        } else {
            console.log("You have no weapon. You retreat.");
        }
    } else {
        console.log("You rest in the village.");
    }
} else {
    console.log("You get lost.");
    if (hasCompass) {
        console.log("Your compass helps you find the way.");
    } else {
        console.log("You remain lostin.");
    }
} 