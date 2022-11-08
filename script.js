//Time
const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);
function update() {


    let date = new Date();
    myLabel.innerHTML= formatTime(date);

    function formatTime(date) {
        let month = date.getMonth();
        let day = date.getDate();
        let year = date.getFullYear();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours>= 12? "pm" : "am";

        month = month + 1;
        hours = (hours % 12 )|| 12;

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);


        return`${month}/${day}/${year}
        ${hours}:${minutes}:${seconds} ${amOrpm}`
    }

    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }

}
