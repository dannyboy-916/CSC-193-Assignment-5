function AnAlert() {
    alert("Hello, world!");
}

function BiggerWords(){
    document.getElementById("TextBox").style.fontSize = "24pt";
}

function FancyText(){
    const myFancy = document.getElementById("TextBox");
    myFancy.style.fontWeight = "Bold";
    myFancy.style.color = "Blue";
    myFancy.style.textDecorationLine = "Underline";
}

function BoringText(){
    const myBoring = document.getElementById("TextBox");
    myBoring.style.color = "Black";
    myBoring.style.textDecorationLine = "None";
    myBoring.style.fontWeight = "Normal";
    myBoring.style.fontSize = "12pt";

}

function MooWords(){
  const myTextbox = document.getElementById("TextBox");
  var toUpperMoo = myTextbox.value; 
  toUpperMoo = toUpperMoo.toUpperCase();
  myTextbox.value = toUpperMoo;

  var parts = toUpperMoo.split(".");
  toUpperMoo = parts.join("- Moo");
  myTextbox.value = toUpperMoo;
  
}