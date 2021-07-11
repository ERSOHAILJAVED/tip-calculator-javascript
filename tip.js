function calculateTip() {

    var billmoney = document.getElementById("billamt").value;
    var servper = document.getElementById("servicePercent").value;
    var num_of_person = document.getElementById("peoplebillamt").value


    // validate the input
    if (billmoney === "" || billmoney == 0) {
        alert("FIll THE BILL AMOUNT it can't be empty or zero")
    }

    //    validate the menu

    if (servper == 0) {
        alert("choose the Tip menu")
    }

        //Check to see if this input is empty or less than or equal to 1

    if(num_of_person<1){
        alert("Atleast thier should be 1 person")
        document.getElementById("each").style.display="none";
    }
    else{
        document.getElementById("each").style.display="inline-block";
    }
    // calculating the tip
    
    var total=(billmoney*servper)/num_of_person;
    // for making round to two decimal places
    total=Math.round(total*100)/100;
    //next line allows us to always have two digits after decimal point

    total=total.toFixed(2)

    document.getElementById("totalTip").style.display="inline-block";
    document.getElementById("tip").innerHTML=total;

    console.log(total)

}

// hide on loading or reloading

document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

// event listner on button

document.getElementById("calulate").onclick=function(){

    calculateTip()

};