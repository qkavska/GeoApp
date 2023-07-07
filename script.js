
let zButton = document.getElementById("ż");
let prButton = document.getElementById("pr");
let psButton = document.getElementById("ps");
let pdButton = document.getElementById("pd");
let pipButton = document.getElementById("pip");
let piButton = document.getElementById("pi");
let pgButton = document.getElementById("pg");
let gButton = document.getElementById("g");
let zlButton = document.getElementById("zl");
let brButton = document.getElementById("br");
let szButton = document.getElementById("sz");
let czButton = document.getElementById("cz");
let halfButton = document.getElementById("half");
let oneButton = document.getElementById("one");
let twoButton = document.getElementById("two");
let threeButton = document.getElementById("three");
let fourButton = document.getElementById("four");
let fiveButton = document.getElementById("five");
let sixButton = document.getElementById("six");
let deleteButton = document.getElementById("delete");

let buttons = document.getElementsByClassName("but");
let myprofil = document.getElementById("my-profil")
let dataContainer = document.createElement("div");
myprofil.appendChild(dataContainer);
let data = []

zButton.addEventListener ("click", function() {
let buttonText = zButton.textContent;
myprofil.value = buttonText;
});

  prButton.addEventListener ("click", function() {
    let buttonText = prButton.textContent;
  
    myprofil.value = buttonText;
  });
  
  psButton.addEventListener ("click", function() {
    let buttonText = psButton.textContent;
  
    myprofil.value = buttonText;
  });
  
  pdButton.addEventListener ("click", function() {
    let buttonText = pdButton.textContent;
  
    myprofil.value = buttonText;
  });
  
  pipButton.addEventListener ("click", function() {
    let buttonText = pipButton.textContent;
  
    myprofil.value = buttonText;
  });
  
  piButton.addEventListener ("click", function() {
      let buttonText = piButton.textContent;
    
      myprofil.value = buttonText;
  });
    
  pgButton.addEventListener ("click", function() {
      let buttonText = pgButton.textContent;
    
      myprofil.value = buttonText;
  });
    
  gButton.addEventListener ("click", function() {
      let buttonText = gButton.textContent;
    
      myprofil.value = buttonText;
  });

  zlButton.addEventListener ("click", function() {
      let buttonText = zlButton.textContent;
    
      myprofil.value = buttonText;
  });
    
  brButton.addEventListener ("click", function() {
      let buttonText = brButton.textContent
    
      myprofil.value = buttonText;
  });
    
  szButton.addEventListener ("click", function() {
      let buttonText = szButton.textContent;
    
      myprofil.value = buttonText;
  });

  czButton.addEventListener ("click", function() {
      let buttonText = czButton.textContent;
    
      myprofil.value = buttonText;
  });


    for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener("click", function(){
        let buttonData = this.textContent;
        data.push(buttonData);

        displayData();
  
      });
    }

    // function displayData(){
    //   dataContainer.innerHTML = "";

    //   for (let i = 0; i < data.length; i++) {
    //     let dataElement = document.createElement("div");
    //     let dataText = document.createElement("button");
    //     deleteButton.dataset.index = i;
    //     deleteButton.addEventListener("click", removeData);
    //     dataElement.appendChild(dataText);
    //     dataElement.appendChild(deleteButton);
    //     dataContainer.appendChild(dataElement);
    //     myprofil.appendChild(dataElement);
    //   }
    // }

    // function removeData(event) {
    //   let dataIndex = event.target.dataset.index();
    //   data.splice(dataindex, 1);
    //   displayData();
    // }