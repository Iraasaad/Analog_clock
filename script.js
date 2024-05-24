
 
const toggle = document.querySelector('.toggle')


toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();
  

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();
  
  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;
  
  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);









