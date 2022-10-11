function getValues() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;
  let limitValue = document.getElementById("limitValue").value;

  // values from HTML are treated as strings & needs to be parsed into a number
  // ok to drop in front of the pull command i.e. let startValue = parseInt(document...);
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);
  limitValue = parseInt(limitValue);

  if (
    Number.isInteger(startValue) &&
    Number.isInteger(endValue) &&
    Number.isInteger(limitValue)
  ) {
    let numbers = generateFizzBuzz(startValue, endValue, limitValue);
    displayFizzBuzz(numbers);
  } else if (limitValue.length > 3) {
    Swal.fire({
      icon: "error",
      title: "Improper Input",
      text: "The Limit Does Not Exist!",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Integers Only",
      text: "Only non-zero integers are allowed for Fizzing & Buzzing!",
    });
  }
}

function generateFizzBuzz(startValue, endValue, limitValue) {
  let numbers = [];
  for (let i = 1; i <= limitValue; i++) {
    if (i % startValue == 0 && i % endValue == 0) {
      numbers.push("FizzBuzz");
    } else if (i % endValue == 0) {
      numbers.push("Buzz");
    } else if (i % startValue == 0) {
      numbers.push("Fizz");
    } else numbers.push(i);
  }
  return numbers;
}

function displayFizzBuzz(numbers) {
  let className = "";
  let templateRows = "";
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number == "FizzBuzz") {
      className = "FizzBuzz";
    } else if (number == "Fizz") {
      className = "Fizz";
    } else if (number == "Buzz") {
      className = "Buzz";
    } else {
      className = "";
    }

    if (i % 10 == 0) {
      templateRows += "<tr>";
    }

    // use tic marks, not single quotes for string interpolation and template literal
    templateRows += `<td class="${className}">${number}</td>`;

    if ((i + 1) % 10 == 0) {
      templateRows += "</tr>";
    }
  }
  document.getElementById("results").innerHTML = templateRows;
}
