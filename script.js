
let zButton = document.getElementById("ż");
let prButton = document.getElementById("pr");
let psButton = document.getElementById("ps");
let pdButton = document.getElementById("pd");
let pipButton = document.getElementById("pip");
let piButton = document.getElementById("pi");
let pgButton = document.getElementById("pg");
let gButton = document.getElementById("g");

let buttons = document.getElementsByClassName("but");
let myprofil = document.getElementById("my-profil")

zButton.addEventListener ("click", function() {
  let buttonText = zButton.textContent
  placeholder.value = buttonText;});

prButton.addEventListener ("click", function() {
    let buttonText = prButton.textContent
  
    placeholder.value = buttonText;
  });
  
  psButton.addEventListener ("click", function() {
    let buttonText = psButton.textContent
  
    placeholder.value = buttonText;
  });
  
  pdButton.addEventListener ("click", function() {
    let buttonText = pdButton.textContent
  
    placeholder.value = buttonText;
  });
  
      
  pipButton.addEventListener ("click", function() {
    let buttonText = pipButton.textContent
  
    placeholder.value = buttonText;
  });
  
  piButton.addEventListener ("click", function() {
      let buttonText = piButton.textContent
    
      placeholder.value = buttonText;
    });
    
    pgButton.addEventListener ("click", function() {
      let buttonText = pgButton.textContent
    
      placeholder.value = buttonText;
    });
    
    gButton.addEventListener ("click", function() {
      let buttonText = gButton.textContent
    
      placeholder.value = buttonText;
    });

    for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener("click", function(){
        let buttonData = this.textContent;
        let listItem = document.createElement("li");
        listItem.textContent = buttonData;
        myprofil.appendChild(listItem);
      });
    }