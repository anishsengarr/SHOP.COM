function showing11() {
  let pic1 = document.createElement("img");
  pic1.src =
    "https://img.shop.com/Image/260000/269300/269358/products/1792099502__800x800__.jpg";
  // document.getElementById("mainimg").append(pic);
  pic1.style.width = "500px";
  pic1.style.height = "500px";
  pic1.style.padding = "10px";
  document.getElementById("mainimgimg").replaceWith(pic1);
}
function showing22() {
  let pic2 = document.createElement("img");
  pic2.src =
    "https://img.shop.com/Image/260000/269300/269358/products/alt_782289746__800x800__.jpg";
  // document.getElementById("mainimg").append(pic);
  pic2.style.width = "500px";
  pic2.style.height = "500px";
  document.getElementById("mainimgimg").replaceWith(pic2);
}
function showing33() {
  let pic3 = document.createElement("img");
  pic3.src =
    "https://img.shop.com/Image/260000/269300/269358/products/alt_682724200__800x800__.jpg";
  // document.getElementById("mainimg").append(pic);
  pic3.style.width = "500px";
  pic3.style.height = "500px";
  document.getElementById("mainimgimg").replaceWith(pic3);
}

let arrforkart = JSON.parse(localStorage.getItem("kartDataBase")) || [];
function addtokart() {
  event.preventDefault();
  let size = document.getElementById("sizeselect").value;
  let width = document.getElementById("widthselect").value;
  let qty = document.getElementById("qty").value;
  let price = 1699;
  let kartobj = {
    qty: qty,
    price: price,
    prodname: "Georgia Boot Small Batch Casual Boot",
  };
  arrforkart.push(kartobj);
  localStorage.setItem("kartDataBase", JSON.stringify(arrforkart));

  window.location.href = "../1st Project/index.html";
}
function delposs() {
  event.preventDefault();
  let pin = document.getElementById("pincode").value;
  let myPin = 123456;
  if (myPin == pin) {
    alert("SHIPPING NOT ALLOWED");
  } else if (pin == "") {
    alert("PLEASE ENTER CORRECT PIN ");
  } else {
    alert("SHIPPING IS ALLOWED   PLEASE ADD TO KART TO BUY");
  }
}
