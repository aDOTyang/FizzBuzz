function getValues() {
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;
  let limitValue = document.getElementById("limitValue").value;

  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);
  limitValue = parseInt(limitValue);

  if (
    Number.isInteger(fizzValue) &&
    Number.isInteger(buzzValue) &&
    Number.isInteger(limitValue)
  ) {
    let numbers = generateFizzBuzz(fizzValue, buzzValue, limitValue);
    displayFizzBuzz(numbers);
    // } else if (limitValue.length > 3) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Improper Input",
    //     text: "The Limit Does Not Exist!",
    //   });
  } else {
    Swal.fire({
      icon: "error",
      title: "Integers Only",
      text: "Only non-zero integers are allowed for Fizzing & Buzzing!",
    });
  }
}

function generateFizzBuzz(fizzValue, buzzValue, limitValue) {
  let numbers = [];
  for (let i = 1; i <= limitValue; i++) {
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      numbers.push("FizzBuzz");
    } else if (i % buzzValue == 0) {
      numbers.push("Buzz");
    } else if (i % fizzValue == 0) {
      numbers.push("Fizz");
    } else numbers.push(i);
  }
  return numbers;
}

function displayFizzBuzz(numbers) {
  let className = "";
  let tableRows = "";
  for (let i = 0; i < numbers.length; i++) {
    let checkedValue = numbers[i];

    if (checkedValue == "FizzBuzz") {
      className = "FizzBuzz";
    } else if (checkedValue == "Fizz") {
      className = "Fizz";
    } else if (checkedValue == "Buzz") {
      className = "Buzz";
    } else {
      className = "";
    }

    if (i % 10 == 0) {
      tableRows += "<tr>";
    }

    tableRows += `<td class="${className}">${checkedValue}</td>`;

    if ((i + 1) % 10 == 0) {
      tableRows += "</tr>";
    }
  }
  document.getElementById("results").innerHTML = tableRows;
}
