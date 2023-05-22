const name = prompt("What's your name?", "");

if (name) {
  alert(`Hello, ${name}! How are you?`);
} else {
  alert("You enter uncorrect name :( \nTry again!");
}
