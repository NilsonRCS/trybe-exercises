function changeText() {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = "Criando minha própria Startup"
  }
  changeText();

  function changeSquareToGreen() {
    let squareYellow = document.getElementsByClassName('main-content')[0];
    squareYellow.style.background = "green";
  }
  changeSquareToGreen();