document.querySelector("#createacc").addEventListener("mouseenter",entering);
    function entering(){
        document.querySelector("#createacc").style.backgroundColor="#071138";
        document.querySelector("#createacc").style.color="white";

    }
    document.querySelector("#createacc").addEventListener("mouseleave",leaving);
    function leaving(){
        document.querySelector("#createacc").style.backgroundColor="white";
        document.querySelector("#createacc").style.color="#071138";

    }
    document.getElementById("createacc").addEventListener("click", linkeded);
    function linkeded() {
    event.preventDefault();
    window.location.href = "../createaccountpage/createacc.html ";
    }
    
    var array=JSON.parse(localStorage.getItem("userDataBase"));

    var email=document.querySelector("#ekid").value;
    var password=document.querySelector("#secid").value;

    for(var i=0; i<array.length; i++)
    {
        if(email==array[i].email && password==array[i].password1)
        {
            window.location.href="..header.html"
        }
        else{
            alert("invalid credentials");
        }
    }