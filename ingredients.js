const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i=0;
while (ingredients.length > i) {
  console.log(ingredients[i]);
  i=i+1;
}
// Write a for loop that prints out the contents of ingredients:
for (let j=0; ingredients.length > j; j++){
  console.log(ingredients[j]);
}
Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let k=7; k >= 0; k--){
  console.log(ingredients[k]);
}