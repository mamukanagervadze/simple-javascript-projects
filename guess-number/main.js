const guessNumber = Math.floor(Math.random() * 1000) + 1;
let requestNumber = Number(prompt("შეიყვანე მცდელობათა რაოდენობა:"));
let count = 0;
if (requestNumber === 0 || isNaN(requestNumber) || requestNumber < 0) {
  requestNumber = 10;
  console.log(`მცდელობათა რაოდენობა: ${requestNumber}`);
}
for (let i = 1; i <= requestNumber; i++) {
  let yourNUmber = Number(prompt("შეიყვანე შენირიცხვი"));
  while (isNaN(yourNUmber) || yourNUmber === null) {
    yourNUmber = Number(prompt("შეიყვანე მხოლოდ რიცხვი:"));
  }
  while (yourNUmber <= 0 || yourNUmber > 1000) {
    yourNUmber = Number(prompt("შეიყვანე რიცხვი 1-1000 ინტერვალში"));
  }

  if (yourNUmber === guessNumber) {
    console.log(`გილოცავ ! გამოსაცნობი რიცხვი იყო:${yourNUmber} `);
    break;
  } else if (yourNUmber < guessNumber) {
    console.log(
      `${yourNUmber}- ზე მაღლა. დარჩენილი მცდელობათა რაოდენობა: ${
        requestNumber - i
      }`
    );
  } else {
    console.log(
      `${yourNUmber}-ზე დაბლა. დარჩენილი მცდელობათა რაოდენობა: ${
        requestNumber - i
      }`
    );
  }
}
