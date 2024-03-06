while (true) {
  let number1 = Number(prompt("enter number1"));
  while (isNaN(number1) || number1 === null) {
    number1 = Number(prompt("please enter only number"));
  }
  let operatori = prompt("enter operator");
  while (
    !(
      operatori === "+" ||
      operatori === "-" ||
      operatori === "*" ||
      operatori === "/" ||
      operatori === "%" ||
      operatori === "**"
    )
  ) {
    operatori = prompt("enter corect operator");
  }
  let number2 = Number(prompt("enter number2"));
  while (isNaN(number2) || number2 === null) {
    number2 = Number(prompt("please enter only number"));
  }
  let result = 0;
  switch (operatori) {
    case "+":
      result = number1 + number2;
      console.log(`${number1} ${operatori} ${number2} = ${result}`);
      break;
    case "-":
      result = number1 - number2;
      console.log(`${number1} ${operatori} ${number2} = ${result}`);
      break;
    case "*":
      result = number1 * number2;
      console.log(`${number1} ${operatori} ${number2} = ${result}`);
      break;
    case "/": {
      if (number2 === 0) {
        console.log("Error: ნულზე გაყოფა არ შეიძლება!");
      } else {
        result = number1 / number2;
        console.log(`${number1} ${operatori} ${number2} = ${result}`);
      }
      break;
    }
    case "%": {
      result = (number1 * number2) / 100;
      console.log(`${number1} -ის ${number2} ${operatori}  = ${result}`);
      break;
    }
    case "**":
      {
        if (number2 < 1 && number2 > 0 && number1 < 0) {
          console.log("Error:არ შეიძლება 1 რიცხვი იყოს უაყოფითი ");
          break;
        }
        if (number2 < 0) {
          result = 1 / number1 ** number2;
          console.log(`${number1} ${operatori} ${number2} = 1 /  ${result}`);
        } else if (number2 >= 0) {
          result = number1 ** number2;
          console.log(`${number1} ${operatori} ${number2} = ${result}`);
        }
      }
      break;
    default:
      console.log("Error: არასწორი ოპერატორი");
      break;
  }
  if (confirm("დავასრულოთ კალკულატორის გამოყენება?")) {
    break;
  }
}
