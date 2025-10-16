const hourHand = document.querySelector(".hourHand");
const minHand = document.querySelector(".minHand");
const secHand = document.querySelector(".secHand");


const getUpdatedTime = () => {
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    const hourRotation = 30 * hh + mm / 2;
    const minRotation = 6 * mm;
    const secRotation = 6 * ss;


    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minHand.style.transform = `rotate(${minRotation}deg)`;
    secHand.style.transform = `rotate(${secRotation}deg)`;
};

setInterval(getUpdatedTime, 1000);

