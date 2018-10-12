let Data = new Date(2018, 4, 30, 09, 59, 59);

let firstInput = document.getElementById('first-input'),
    secondInput = document.getElementById('second-input'),
    showNowDay = document.querySelector('.day'),
    btn = document.querySelector('.box-btn'),
    sume = document.getElementById('sume');
    

function addZero (num) {
   if (num < 10 ) {
      return "0" + num;
   }else {
      return num;
   }
   }
 

   function day() {
      let showDay = new Date(),
          setings = {
         weekday: 'long'
      };
   
      return showDay.toLocaleString("ru", setings);
   }
   showNowDay.innerHTML = day();
   
   console.log(Data.getHours() + ":" + Data.getMinutes() + ":" + Data.getSeconds() + " " + addZero(Data.getDay()) + "." + addZero(Data.getMonth()) + "." + Data.getFullYear());
   


   
       