function dailymanCal(manCal) {
  var fieldWeights = document.getElementById("fieldWeights").value;
  var fieldHeights = document.getElementById("fieldHeights").value;
  var fieldAges = document.getElementById("fieldAges").value;
  var manCal =
    66.5 + 13.75 * fieldWeights + 5 * fieldHeights - 6.75 * fieldAges;
  return manCal;
}
function dailywomanCal(womanCal) {
  var fieldWeights = document.getElementById("fieldWeights").value;
  var fieldHeights = document.getElementById("fieldHeights").value;
  var fieldAges = document.getElementById("fieldAges").value;
  var womanCal =
    665 + 9.56 * fieldWeights + 1.85 * fieldHeights - 4.67 * fieldAges;
  return womanCal;
}

function displaymanCal(manCal) {
  document.getElementById("totalCal").innerHTML =
    "Your Calories Need : " + dailymanCal(manCal).toFixed(2);
}

function displaywomanCal(womanCal) {
  document.getElementById("totalCal").innerHTML =
    "Your Calories Need :  " + dailywomanCal(womanCal).toFixed(2);
}
// function sayhello() {
//   alert("reaper");
// }
// function getAge() {
//   return 22;
// }
// let userInput = prompt("Enter Your Name : ");

// function FahtoCel(Fahrenheit) {
//   let value = ((Fahrenheit - 32) * 5) / 9;
//   return value.toFixed(2) + " C ";
// }
// function toCelcius(value) {
//   alert(FahtoCel(value));
// }

// function CeltoFah(Celcius) {
//   let value = (Celcius * 9) / 5 + 32;
//   return value.toFixed(2) + " F ";
// }

// function toFahrenheit(value) {
//   alert(CeltoFah(value));
// }

// {
//   let lottoNum = prompt("มึงทำเพื่ออะไร ทำเหี้ยอะไร");
//   let randomNum = Math.floor(Math.random() * 100);
//   // document.getElementById("buyednum").innerHTML = lottonum;
//   document.getElementById("random").innerHTML = randomNum;
//   if (lottoNum == randomNum) {
//     document.getElementById("correctResult").innerHTML = "Congrat Bitch";
//   } else {
//     document.getElementById("wrongResult").innerHTML = "SADGE BITCH";
//   }
// }

// let score = prompt("Your Score : ");
// if (score >= 80) {
//   document.getElementById("result").innerHTML = "Your grade is A!";
// } else if (score >= 70) {
//   document.getElementById("result").innerHTML = "Your grade is B!";
// } else if (score >= 60) {
//   document.getElementById("result").innerHTML = "Your grade is C!";
// } else if (score >= 50) {
//   document.getElementById("result").innerHTML = "Your grade is D!";
// } else if (score <= 49) {
//   document.getElementById("result").innerHTML = "Your grade is F!";
// }
// console.log(3 == "3");

// console.log("6" === 6);
// console.log("4" != 4);
// console.log(10 + 10 <= 20);

// {
//   let userAge = prompt("Enter your fucking name");
//   if (userAge > 13) {
//     document.getElementById("content").innerHTML =
//       '<iframe width="560" height="315" src="https://www.youtube.com/embed/Go7SeJ-yOL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
//   } else {
//     document.getElementById("ageRestric").innerHTML = "";
//   }
// }

// for (var counter = 0; counter < 5; counter++) {
//   console.log("Current count : " + counter);
//   document.getElementById("result").innerHTML = "Current count : " + counter;
// }

// let quant = prompt("Enter quantity : ");
// let totalPrice = 0;
// for (var i = 1; i <= quant; i++) {
//   let itemPrice = prompt("Item price No. " + i);
//   document.getElementById("price-list").innerHTML +=
//     "สินค้าชิ้นที่ " + i + " : " + itemPrice + " Baht " + "<br>";
//   totalPrice = totalPrice + parseInt(itemPrice);
// }
// document.getElementById("total-price").innerHTML =
//   "ราคารวมทั้งหมด : " + totalPrice + " Baht ";

// let round = prompt("How many round you would like to paly? ");
// let total_score = 0;
// for (var i = 1; i <= round; i++) {
//   var answer = prompt("Head or Tail? ");
//   var random_answer = "";
//   if (Math.floor(Math.random() * 10) <= 4) {
//     random_answer = "Head";
//   } else {
//     random_answer = "Tail";
//   }
//   if (answer == random_answer) {
//     alert("You guess Correct");
//     total_score + 1;
//   } else {
//     alert("You guess Wrong");
//   }
//   total_score = parseInt(total_score) + answer;
//   document.getElementById("game-list").innerHTML +=
//     "รอบที่ : " +
//     i +
//     "ผลที่ออก : " +
//     random_answer +
//     " คุณตอบ : " +
//     answer +
//     "<br>";
//   console.log(random_answer + " : " + answer);
// }
// document.getElementById("result").innerHTML = "คะแนนทั้งหมด : " + total_score;
// console.log(total_score);
// while (prompt("Exit to Exit") != "Exit") {
//   document.getElementById("result").innerHTML += "No Exit yet" + "<br>";
// }
