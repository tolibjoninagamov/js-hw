let a = +prompt("dzni tanla:");

switch (a) {
  case 1: {
    let output = document.getElementById('output')
    let input = +prompt("chislo yoz: ")
    for (let i = 0; i < input; i++) {
      for (let j = 0; j < i; j++) {
        output.innerHTML += "*";
      }
      output.innerHTML += "<br>";
    }
    break;
  }

  case 2: {
    let tolib = document.getElementById('tolib');
    let inputs = +prompt("chislo yoz: ");
    for (let i = 1; i < inputs; i++) {
      for (let j = 1; j < inputs; j++) {
        tolib.innerHTML += "*";
      }
      tolib.innerHTML += "<br>";
    }

    break;
  }
  case 3: {
    let shokir = document.getElementById("shokir");
    let oppa= +prompt("qancha: ");

    for (let i = 0; i < oppa; i++) {
      for (let j = 0; j < i; j++) {
        shokir.innerHTML += "*";
      }
      shokir.innerHTML += "<br>";
    }
  }

  default: {
    console.log("Нет числа");
    break;
  }
}