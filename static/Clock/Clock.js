const options = { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit", fractionalSecondDigits: 1 };

function updateClock() {
    let clock = document.getElementById("clock");
    clock.innerHTML = new Date().toLocaleString("en-US", options);
}
document.addEventListener("DOMContentLoaded", () => {
    function init() {
        const clock = document.createElement("div");
        clock.className = "clock";
        clock.id = "clock";
        document.body.appendChild(clock);
        if (widgets.hasOwnProperty("Clock")) {
            const position = widgets["Clock"].split(",");
            clock.style.left = position[0]+"%";
            clock.style.top = position[1]+"%";
        }
    }
    init();
});

setInterval(() => {
    updateClock();
}, 100);
