 document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from submitting
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let pn=document.getElementById("pn").value;

    let password = document.getElementById("pw").value;
    let confirmPassword = document.getElementById("cpw").value;
    if (password === confirmPassword && password!=="" && password.length>=8 && password.length<=20) {
      document.getElementById("pw").style.borderColor="lightgreen"
       document.getElementById("cpw").style.borderColor="lightgreen"
    } else {
       document.getElementById("pw").style.borderColor= "rgb(189, 42, 42)";
       document.getElementById("cpw").style.borderColor= "rgb(189, 42, 42)";
    }

     if ( first.length<=20 && first!=="") {
      document.getElementById("first").style.borderColor="lightgreen"
    } else {
       document.getElementById("first").style.borderColor= "rgb(189, 42, 42)";
    }

     if ( last.length<=20 && last!=="") {
      document.getElementById("last").style.borderColor="lightgreen"
    } else {
       document.getElementById("last").style.borderColor= "rgb(189, 42, 42)";
    }

    if(email.includes("@")){
         document.getElementById("email").style.borderColor="lightgreen"
    }
    else {
       document.getElementById("email").style.borderColor= "rgb(189, 42, 42)";
    }
    if(pn!=="" && !Number.isNaN(Number(pn))){
           document.getElementById("pn").style.borderColor="lightgreen"
    }
    else{
         document.getElementById("pn").style.borderColor= "rgb(189, 42, 42)";
    }
    let allInputs = document.querySelectorAll("input");
let allValid = true;

allInputs.forEach(input => {
  if (input.style.borderColor !== "lightgreen") {
    allValid = false;
  }
});

if (allValid) {
  document.getElementById("pun").style.display = "inline";
   document.getElementById("congrats").textContent=`Great job ${first} ${last} you have made this triangle happy`
}
  }
  );
  document.getElementById("login").onclick=function NerdAlert(){
    window.alert("Log in is for Nerds ")
  }
 