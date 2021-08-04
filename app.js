var displayButton = document.getElementById("display-Button");
var popUp = document.querySelector(".warning");
var closePopUp = document.querySelector(".warning #non-numeric .close-button");
var resetButton = document.querySelector(".reset");
var logo = document.querySelector(".logo");

closePopUp.addEventListener("click", () => {
  popUp.style.display = "none";
});
popUp.addEventListener("click", () => {
  popUp.style.display = "none";
});
resetButton.addEventListener("click", () => {
  reset();
});
logo.addEventListener("click", () => {
  window.location.href = window.location.href;
});

displayButton.addEventListener("click", () => {
  var input = document.getElementById("input").value;

  if (input.length == 0) {
    var status = null;
  } else if (isNumeric(input)) {
    onClick();
    displayNumber(input);
  } else {
    popUp.style.display = "block";
    errorType = document.querySelector(".warning #non-numeric");
    errorType.style.display = "block";
  }
});

function onClick() {
  displayButton.style.backgroundColor = "#b9232f";
  displayButton.innerText = "Done";
  displayButton.innerHTML +=
    '<div class="check-box" id="check-box-private"><i class="fa fa-check" id="check-icon" ></i> </div>';
  displayButton.style.transition = "2s";
  displayButton.disabled = true;
}

function displayNumber(input) {
  var containers = [];
  if (input.length == 1) {
    containers.push("#first-container");
  } else if (input.length == 2) {
    containers.push("#first-container", "#second-container");
  } else {
    containers.push(
      "#first-container",
      "#second-container",
      "#third-container"
    );
  }
  for (let i = containers.length - 1; i >= 0; i--) {
    numberOnSevenSgment(input[i], containers[containers.length - 1 - i]);
  }
}

function numberOnSevenSgment(digit, degreeOfNumber) {
  var arrayOfsegments = [];
  switch (digit) {
    case "0":
      arrayOfsegments.push(".a", ".b", ".c", ".d", ".e", ".f");
      break;
    case "1":
      arrayOfsegments.push(".c", ".b");
      break;
    case "2":
      arrayOfsegments.push(".a", ".b", ".d", ".e", ".g-lower", ".g-upper");
      break;
    case "3":
      arrayOfsegments.push(".a", ".b", ".c", ".d", ".g-lower", ".g-upper");
      break;
    case "4":
      arrayOfsegments.push(".b", ".c", ".f", ".g-lower", ".g-upper");
      break;
    case "5":
      arrayOfsegments.push(".a", ".c", ".d", ".f", ".g-lower", ".g-upper");
      break;
    case "6":
      arrayOfsegments.push(
        ".a",
        ".c",
        ".d",
        ".e",
        ".f",
        ".g-lower",
        ".g-upper"
      );
      break;
    case "7":
      arrayOfsegments.push(".a", ".b", ".c");
      break;
    case "8":
      arrayOfsegments.push(
        ".a",
        ".b",
        ".c",
        ".d",
        ".e",
        ".f",
        ".g-lower",
        ".g-upper"
      );
      break;
    case "9":
      arrayOfsegments.push(
        ".a",
        ".b",
        ".c",
        ".d",
        ".f",
        ".g-lower",
        ".g-upper"
      );
      break;
    default:
      break;
  }
  coloringSegments(arrayOfsegments, degreeOfNumber);
}

function coloringSegments(segmentsIDs, degreeOfNumber) {
  for (let id = 0; id < segmentsIDs.length; id++) {
    elementPath = degreeOfNumber + " " + segmentsIDs[id];
    segment = document.querySelector(elementPath);
    segment.style.opacity = 1;
  }
}
function reset() {
  window.location.href = window.location.href;
}

function isNumeric(value) {
  return /^\d+$/.test(value);
}
