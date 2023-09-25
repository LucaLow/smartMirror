
function updateClock() {
    const clock = document.getElementById("clock");
    clock.innerHTML = new Date().toLocaleTimeString();
}

updateClock();
// This will be to control a clock in index.html
setInterval(() => {
    updateClock();
}, 1000);
