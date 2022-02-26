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
    qty.innerText = elem.qty;

    var line = document.createElement("br");

    div2.append(name,price,line);

    td.append(div2);

    td1.append(qty);

    var quantity = +elem.qty;

    var prc = +elem.price;

    var total = quantity*prc;

    td2.append(total);

    td3.append(elem.price);

    row.append(td,td1,td3,td2)

    document.querySelector("table").append(row);

    var line = document.createElement("p");
    line.innerHTML = total;

    // document.querySelector("#sub").append(line);
    document.querySelector("#sub").append(line);

