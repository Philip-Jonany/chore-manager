function rotateChores(arr, k) {
    k %= arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
}

function reverse(arr, start, end) {
    while (start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

const start = new Date("2023-05-03");
const now = new Date();
const diff =  now - start.getTime();
const millisecondsInWeek = 1000 * 60 * 60 * 24 * 7;
const textbox = document.querySelector('pre');
const rotations = Math.floor(diff/millisecondsInWeek);

let brothers = ["Sam", "PJ", "Teddy", "Shouen", "Jeremy", "Abe"];
// Space for formatting.
let chores = ["Compost + recycling    ",
"Dishwasher                   ",
"towel + sink                  ",
"trash                             ",
"stove + table + sink      ",
"sweep                           "];

output = "";
rotateChores(brothers, rotations);
for (let i = 0; i < chores.length; i++) {
    output += chores[i] + brothers[i] + "\n";
}
textbox.innerText = output;
