document.getElementById("myBtn").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked)
    {
        console.log("თქვენ მონიშნული გაქვთ Checkbox-ი");
    }
    else
    {
        console.log("თქვენ არ მოგინიშნავთ Checkbox-ი");
    }

    if(visaBtn.checked)
    {
        console.log("თქვენ იხდით Visa ბარათით!");
    }
    else if(mastercardBtn.checked)
    {
        console.log("თქვენ იხდით MasterCard ბარათით!");
    }
    else if(paypalBtn.checked)
    {
        console.log("თქვენ იხდით PayPal-ით")
    }
    else
    {
        console.log("თქვენ არ აგირჩევიათ გადახდის მეთოდი")
    }
};``