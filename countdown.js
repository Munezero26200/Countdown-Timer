const countdown = document.getElementById("countdown");
const startButton = document.getElementById("startBtn");

let timer;

startButton.addEventListener('click', () => {
    const userInput = document.getElementById("targetDate").value;
    console.log("user selected:", userInput);
    if (!userInput) {
        countdown.textContent = "⛔ please enter a valid date/time.";
        return;
    }
    const targetTime = new Date(userInput).getTime();
    clearInterval(timer);

    timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetTime - now;
        if (difference <= 0) {
            clearInterval(timer);//stop timer
            countdown.textContent = "🎊🎊it's time";
            return;
        }
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
})



