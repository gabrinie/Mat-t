function calculateHeight(distance) {
  var height = -Math.pow(distance, 2) + 3 * distance; // y = -x² + 3x

  if (height < 0) {
    height = height * -1;
  }
  return height;
}
function formatNum(number){
  return new Intl.NumberFormat('pt-BR').format(number);
}
function calculateAndDisplay() {
  let distanceInput = document.getElementById("distance");

  let distance = parseFloat(distanceInput.value);
  let resultsDiv = document.querySelector(".results");
  let sceneDiv = document.querySelector(".scene");
  sceneDiv.innerHTML = ""
  resultsDiv.innerHTML = ""

  if (!isNaN(distance) && distance > 0) {
    let height = calculateHeight(distance);

    height = formatNum(height);
    distance = formatNum(distance);

    
    resultsDiv.innerHTML = `<h2 class="result-title">Em ${distance}km, a altura do seu Foguete será:</h2>
        <h2 class='height'> ${height} km!</h2>`;
    sceneDiv.innerHTML =
      '<div class="rocket"><img src="./assets/rokcet.png" alt=""></div>';
    stars();
  } else {
    let resultsDiv = document.querySelector(".results");
    resultsDiv.innerHTML =
      '<p class="error-message">Por favor, insira um número válido.</p>';
  }
}

function stars() {
  let count = 60;
  let scene = document.querySelector(".scene");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);

    let duration = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.left = x + "px";
    star.style.width = 1 + "px";
    star.style.height = 60 + h + "px";
    star.style.animationDuration = duration + "s";

    scene.appendChild(star);
    i++;
  }
}

