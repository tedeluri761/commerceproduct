let nextPervius = document.querySelectorAll(".nextpreviusConteiner");
let product = document.getElementById("product");
let number = 1;

function updateImage() {
  if (number === 1) {
    product.src = "images/image-product-1.jpg";
  } else if (number === 2) {
    product.src = "images/image-product-2.jpg";
  } else if (number === 3) {
    product.src = "images/image-product-3.jpg";
  } else if (number === 4) {
    product.src = "images/image-product-4.jpg";
  }
}

nextPervius.forEach((element) => {
  element.children[1].addEventListener("click", function () {
    number++;
    console.log(number);
    if (number > 4) {
      number = 1;
    }

    updateImage();
  });

  element.children[0].addEventListener("click", function () {
    number--;
    if (number < 1) {
      number = 4;
    }
    updateImage();
  });
});

let menu = document.getElementById("menu");
let menu2 = document.getElementById("menu2");
let changebackground = document.getElementById("changebackground");
menu.addEventListener("click", function () {
  menu2.style.display = "block";
  changebackground.classList.add("backgroundclasslist");
});

let close = document.getElementById("close");
close.addEventListener("click", function () {
  menu2.style.display = "";
  changebackground.classList.remove("backgroundclasslist");
});
let count = 0;
let pliusminus = document.querySelectorAll(".pliusminus");
let money = document.getElementById("money");
let moneyline = document.getElementById("moneyline");
pliusminus.forEach((element) => {
  let minus = element.children[0];
  let plius = element.children[2];
  let number = element.children[1];
  let number2 = number.textContent;

  minus.addEventListener("click", function () {
    if (count < 1) {
      count = 1;
    } else if (count > 1) {
      let value = money.textContent;
      value = parseFloat(value.replace("$", "").replace(",", ""));
      let result = value - 125;
      money.textContent = `$${result.toFixed(2)}`;
      let value2 = moneyline.textContent;
      value2 = parseFloat(value2.replace("$", "").replace(",", ""));
      let result2 = value2 - 250;
      moneyline.textContent = `$${result2.toFixed(2)}`;
    }
    count--;
    number.textContent = count;
  });
  plius.addEventListener("click", function () {
    if (count > 0) {
      let value = money.textContent;
      value = parseFloat(value.replace("$", "").replace(",", ""));
      let result = value + 125;
      money.textContent = `$${result.toFixed(2)}`;
      let value2 = moneyline.textContent;
      value2 = parseFloat(value2.replace("$", "").replace(",", ""));
      let result2 = value2 + 250;
      moneyline.textContent = `$${result2.toFixed(2)}`;
    }
    count++;
    number.textContent = count;
  });

  let cartcheckout = document.getElementById("cartcheckout");
  let checkoutParagraph = document.getElementById("checkoutParagraph");
  let addcard = document.getElementById("addcart");
  addcard.addEventListener("click", function () {
    if (count > 0) {
      cartcheckout.style.display = "block";
      checkoutParagraph.textContent = number.textContent;
    }
  });
  let removecard = document.getElementById("delete");
  let truecard = true;
  let truecard2 = true;
  let truecard3 = true;
  let cartcheckout3 = document.getElementById("cartcheckout3");
  let checkoutmoney = document.getElementById("checkoutmoney");
  let howmany = document.getElementById("howmany");
  let card = document.getElementById("cart");

  card.addEventListener("click", function () {
    if (truecard) {
      if (cartcheckout.style.display === "") {
        cartcheckout2.style.display = "block";
      }
      truecard = false;
    } else {
      cartcheckout2.style.display = "";
      truecard = true;
    }

    if (truecard2) {
      if (cartcheckout.style.display === "block") {
        cartcheckout3.style.display = "block";
        checkoutmoney.textContent = money.textContent;
        howmany.textContent = number.textContent;
      }
      truecard2 = false;
    } else {
      cartcheckout3.style.display = "";

      truecard2 = true;
    }
    removecard.addEventListener("click", function () {
      cartcheckout3.style.display = "";
      cartcheckout2.style.display = "block";
      cartcheckout.style.display = "";
    });
  });
});
