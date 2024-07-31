// Set Up Constants
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// Set Up Event Listeners

convertBtn.addEventListener('click', () => {
  const num = numberInput.value;

  // Check if Input is Valid
  if (num.length === 0 || !Number.isInteger(Number(num))) {
    output.innerHTML = "Please enter a valid number";
    output.classList.add("alert");
  } else if (num < 1) {
    output.innerHTML = "Please enter a number greater than or equal to 1";
    output.classList.add("alert");
  } else if (num >= 4000) {
    output.innerHTML = "Please enter a number less than or equal to 3999";
    output.classList.add("alert");
  } else {
output.classList.remove("alert");
output.innerHTML =  convertToRoman(num);
  }
});

numberInput.addEventListener("keydown", (e) => {
  if ((e.key) === "Enter") numberInput.value = "";
  output.innerHTML = "";
  output.classList.remove("alert");
});

// Function to convert a number to Roman Numeral
function convertToRoman(num) {

  // Set Up Constants
  const M = ["","M","MM","MMM"];
  const C = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  const X = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  const I = ["","I","II","III","IV","V","VI","VII","VIII","IX"];

  const thousandsInt = Math.floor(num/1000);
  const hundredsInt = Math.floor((num%1000)/100);
  const tensInt = Math.floor((num%100)/10);
  const unitsInt = Math.floor(num%10);
  const thousandsRoman = M[thousandsInt];
  const hundredsRoman = C[hundredsInt];
  const tensRoman = X[tensInt];
  const unitsRoman = I[unitsInt];
  return thousandsRoman + hundredsRoman + tensRoman + unitsRoman;
}
