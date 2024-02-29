const dayno =document.getElementById("day_no");
const hrno =document.getElementById("hr_no");
const minno =document.getElementById("min_no");
const secno =document.getElementById("sec_no");

const current_date= new Date().getFullYear();
const ex_date= new Date(`March 21 ${current_date} 11:30:00`);

function countdown_timer(){
    const recentdate = new Date();
    const subtraction = ex_date - recentdate;
    const day = Math.floor(subtraction/1000/60/60/24);
    const hr = Math.floor(subtraction/1000/60/60)%24;
    const min = Math.floor(subtraction/1000/60)%60;
    const sec = Math.floor(subtraction/1000)%60;

    dayno.innerHTML = day;
    hrno.innerHTML = hr;
    minno.innerHTML = min;
    secno.innerHTML = sec;

}
setInterval(countdown_timer, 1000)
