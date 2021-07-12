
// The main function that is executed when the sumbit button is clickd
function compute()
{
    // Readind inputs
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculate interest
    var interest = principal*years*(rate/100);
    // calculate the final year
    var years = new Date().getFullYear() + parseInt(years);

    // check for not approved values in the amount
    if(principal == "" || principal <=0){
        document.getElementById("result").innerText=" ";
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    
    // check for not approved values in the years
    if (years == ""){
        document.getElementById("result").innerText=" ";
        alert("Please Select a valid year");
        document.getElementById("principal").focus();
        return false;
    }

    // results display function
    function showResults(){
        // line 1
        const lin_one = document.createElement("span");
        const line_one_text = document.createTextNode("if you deposit ");
        lin_one.appendChild(line_one_text);
        document.getElementById("result").appendChild(lin_one);
        
        const val_one = document.createElement("span");
        val_one.style.cssText = 'background-color:yellow;';
        const principal_val = document.createTextNode(principal);
        val_one.appendChild(principal_val);
        document.getElementById("result").appendChild(val_one);
        //break 1
        const newline = document.createElement("br");
        document.getElementById("result").appendChild(newline);
        
        //line 2
        const line_two = document.createElement("span");
        const line_two_text = document.createTextNode("at an interest rate of ");
        line_two.appendChild(line_two_text);
        document.getElementById("result").appendChild(line_two);
        
        const val_two = document.createElement("span");
        val_two.style.cssText = 'background-color:yellow;';
        interest_val = document.createTextNode(rate);
        val_two.appendChild(interest_val);
        document.getElementById("result").appendChild(val_two);
        //break 2
        const nl2 = document.createElement("br");
        document.getElementById("result").appendChild(nl2);
        //line 3
        const line_three = document.createElement("span");
        const line_three_text = document.createTextNode("You will receive an amount of ");
        line_three.appendChild(line_three_text);
        document.getElementById("result").appendChild(line_three);
        
        const val_three = document.createElement("span");
        val_three.style.cssText = 'background-color:yellow;';
        new_amount_val = document.createTextNode(interest);
        val_three.appendChild(new_amount_val);
        document.getElementById("result").appendChild(val_three);

        //break 3
        const nl3 = document.createElement("br");
        document.getElementById("result").appendChild(nl3);
        
        //line 4
        const line_four = document.createElement("span");
        const line_four_text = document.createTextNode("in the year ");
        line_four.appendChild(line_four_text);
        document.getElementById("result").appendChild(line_four);

        const val_for = document.createElement("span");
        val_for.style.cssText = 'background-color:yellow;';
        years_val = document.createTextNode(years);
        val_for.appendChild(years_val);
        document.getElementById("result").appendChild(val_for);
    }

    document.getElementById("result").innerText= "";
    showResults();
    document.getElementById("principal").focus();
}

//update the span value of the rate 
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + " %";
}

