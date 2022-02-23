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