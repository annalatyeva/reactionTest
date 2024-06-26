let startTime = Date.now();
let bestResult = 100000000000;
let lastResult = 0;
let square = document.getElementById("square");
let backgroundColor;
let colorArr = ['yellow', 'red', 'maroon'];
let borderRadius;
let borderRadiusArr = ['50%', '0%'];
let height;
let tops;
let left;


// function startTest () {
    
// }
function showSquare () {
    backgroundColor = colorArr[Math.floor(Math.random() * 3)];
    borderRadius = borderRadiusArr[Math.floor(Math.random() * 2)];
    height = Math.floor(Math.random() * (200 - 100) + 100);
    tops = Math.floor(Math.random() * 76);

    left = Math.floor(Math.random() * 90);
    
    square.style.cssText = `background-color: ${backgroundColor}; border-radius: ${borderRadius}; height: ${height}px; width: ${height}px; top: ${tops}%; left: ${left}%`;
}


function getReactTime () {
    lastResult = (Date.now() - startTime);
    document.getElementById("last-result").innerText = lastResult + ' мс';
    if (lastResult < bestResult) {
        bestResult = lastResult;
    }
    document.getElementById("best-result").innerText = bestResult + ' мс';
    startTime = Date.now();
    showSquare ();
}
square.addEventListener("click", getReactTime);

