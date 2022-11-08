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


//task
const list = document.getElementById("list");
const field = document.getElementById("field");
const btn = document.getElementById("btn");


btn.addEventListener('click', function() {
  const paragraph = document.createElement('p');
  paragraph.innerText = field.value;
  list.appendChild(paragraph);
  
  field.value="";
  
  paragraph.addEventListener('click',function() {
    paragraph.style.textDecoration="line-through";
  });
  
  paragraph.addEventListener('dblclick',function(){
      list.removeChild(paragraph);
  })
  
  });

  //RandomTask
  const randBtn = document.getElementById("randBtn");
  let randomTask = ['item1', 'item2', 'item3'];

  randBtn.addEventListener('click',function() {
    const paragraphRand = document.createElement('p');
    let randomTasks = randomTask[Math.floor(Math.random() * randomTask.length)];
    paragraphRand.innerText= randomTasks;
    list.appendChild(paragraphRand);

  paragraphRand.addEventListener('click', function() {
    paragraphRand.style.textDecoration="line-through";
  })

  paragraphRand.addEventListener('dblclick', function() {
    list.removeChild(paragraphRand);
  })


  });
