// Your scripts here
// add event listener to button element

// Make reference of the button in the js file
const cal_button = document.getElementById('calculate');
const bill_input = document.getElementById('amount');
const tip_input = document.getElementById('percent');
const tip_display = document.getElementById('tip');
const total_display = document.getElementById('total');

// add event listener to button element
cal_button.addEventListener('click', function() {
    // console.log("You clicked the Calculate Button.");
    // tip amount = calculate bill input times tip input
    const tip_amount = (bill_input.value * tip_input.value/100).toFixed(2);
    // change inner html to tip amount
    tip_display.innerHTML = tip_amount
    //  total = add tip amount to bill input
    const total = Number(tip_amount) + Number(bill_input.value)
    console.log(bill_input.value)
    console.log(tip_amount)
    console.log(tip_amount + bill_input.value)
    // change inner html to tip amount
    total_display.innerHTML = total.toFixed(2)
});

// Change innerhtml of the tip
// Change innerhtml of the total


// // This picks a number by random
// const n = Math.random() * 100;
// // This prints the number to the console
// console.log(n)
// // This rounds out to 2 decimals places
// const m = n.toFixed(2)
// console.log(m);
// console.log(m * 2);
// console.log(Number(m) + 3);
// console.log(typeof m);
// if (typeof m === 'string') {
//
// }
