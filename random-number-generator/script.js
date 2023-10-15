document.getElementById("randomNumberGen").onclick = function() {
    let x = Math.floor(Math.random() * 10) + 1;
    document.getElementById("numbrCount").innerHTML = x;
}