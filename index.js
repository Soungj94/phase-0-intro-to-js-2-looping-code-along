// Code your solutions in this file
function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

const names = ["Alice", "Bob", "Charlie"];
const event = "birthday";

const messages = writeCards(names, event);
console.log(messages);
// Output:
// [
//   "Thank you, Alice, for the wonderful birthday gift!",
//   "Thank you, Bob, for the wonderful birthday gift!",
//   "Thank you, Charlie, for the wonderful birthday gift!"
// ]

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
