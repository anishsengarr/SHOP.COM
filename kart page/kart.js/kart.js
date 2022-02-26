var data = JSON.parse(localStorage.getItem("kartDataBase"));

console.log(data)


data.map(function(elem){
    console.log(elem)

    var row = document.createElement("tr")

    var td = document.createElement("td")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")

    var div1 = document.createElement("div")
    div1.classList.add("mystyle");

    var div2 = document.createElement("div")


    var name =document.createElement("p");
    name.innerText=elem.prodname;

    var price = document.createElement("small");
    price.value = elem.price;

    var qty = document.createElement("small");
