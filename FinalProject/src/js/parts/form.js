function sendForm () {

   let form = document.querySelectorAll('form'),
       input = document.querySelectorAll('input');

      for(let i = 0; i < form.length; i++) {
         form[i].addEventListener('submit', (event) => {
           event.preventDefault();
           
            let request = new XMLHttpRequest();
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form[i]);
            request.send(formData);

            request.addEventListener('readystatechange', () => {
               if(request.readyState < 4) {
                swal('Идет отправка');
               }
               else if (request.readyState === 4 && request.status == 200) {
                  swal(
                    'Отправлено!',
                    '',
                    'success'
                  );
               }else {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Ошибка!'
                  });
               }
            });

        }); 
   }
 
      for(let i = 0; i < input.length; i++) {
         input[i].addEventListener('keypress', function(e) {
            let key = e.keyCode;
            let atributeName = input[i].getAttribute('name'),
                inputId = input[i].id;

            if(atributeName == 'user_phone' || inputId == 'width' || inputId == 'height') {
               if (key < 48 || key > 57) {
                  e.preventDefault();
            }
         }
      });
   }
}

module.exports = sendForm