function updateTime() {
    const clock = new Date();

    let hoursValue = clock.getHours();
    let minutesValue = clock.getMinutes();
    let secondsValue = clock.getSeconds();

    document.querySelector(".hours").innerHTML = hoursValue;
    document.querySelector(".minutes").innerHTML = minutesValue;
    document.querySelector(".seconds").innerHTML = secondsValue;
}
// Здесь должен быть задан интервал
setInterval(updateTime, 1000);

