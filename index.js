const homeScoreEl = document.getElementById("home-score");
const awayScoreEl = document.getElementById("away-score");

let homeScore = 0;
let awayScore = 0;

function addHomePoints(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
}

function addAwayPoints(points) {
    awayScore += points;
    awayScoreEl.textContent = awayScore;
}

document.getElementById("home-add-1").addEventListener("click", () => addHomePoints(1));
document.getElementById("home-add-2").addEventListener("click", () => addHomePoints(2));
document.getElementById("home-add-3").addEventListener("click", () => addHomePoints(3));

document.getElementById("away-add-1").addEventListener("click", () => addAwayPoints(1));
document.getElementById("away-add-2").addEventListener("click", () => addAwayPoints(2));
document.getElementById("away-add-3").addEventListener("click", () => addAwayPoints(3));