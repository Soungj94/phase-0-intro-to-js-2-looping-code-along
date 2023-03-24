// function countDown(number) {
//   while (number >= 0) {
//     console.log(number);
//     number--;
//   }
// }

function writeCards(name, event) {
  const message = [];
  for (let i = 0; i < name.length; i++) {
    message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return message;
}

const name = ["Alice", "Bob", "Kevin"];
const event = "Birthday";
const message = writeCards(name, event);
console.log(message);

///

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
