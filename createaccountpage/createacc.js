document.getElementById("btn").addEventListener("click", createacc);
let arr = JSON.parse(localStorage.getItem("userDataBase")) || [];
function createacc() {
  event.preventDefault();
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;
  let phone = document.getElementById("phone").value;
  let obj = {
    fname: fname,
    lname: lname,
    email: email,
    password1: password1,
    password2: password2,
    phone: phone,
  };
  arr.push(obj);
  localStorage.setItem("userDataBase", JSON.stringify(arr));
}
