
    let x = document.querySelector("#X");
    let y = document.querySelector("#Y");
    let buttonplus = document.querySelector("#plus");
    let buttonmoins = document.querySelector("#moins");
    let buttonfois = document.querySelector("#fois");
    let buttondivision = document.querySelector("#division");

    buttonplus.addEventListener("click", showPlus);
    buttonmoins.addEventListener("click", showMoins);
    buttonfois.addEventListener("click", showFois);
    buttondivision.addEventListener("click", showDivision);


    function showPlus() {
        document.querySelector("h3").innerHTML =  (Number(x.value) + Number(y.value));

    }
    function showMoins() {
        document.querySelector("h3").innerHTML =  (Number(x.value) - Number(y.value));

    }
    function showFois() {
        document.querySelector("h3").innerHTML =  (Number(x.value) * Number(y.value));

    }
    function showDivision() {
        if (Number(y.value)!=0) {
            document.querySelector("h3").innerHTML =  (Number(x.value) / Number(y.value));
        } 
        else{
            alert("Division par zero indefinie");
        }

    }



