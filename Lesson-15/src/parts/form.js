function form () {
   let message = {
      loading: "Загрузка...",
      success: "Спасибо! Скоро мы с вами свяжемся!",
      failure: "Что-то пошло не так..."
  };

  let form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input')[0],
      statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  input.addEventListener('keypress', function (e) {
      let key = e.keyCode;
      if (key != 43 && key < 48 || key > 57 || key === 47) {
          e.preventDefault();

      }
  });

  let formContainer = document.querySelector('.contact-form'),
      contactForm = formContainer.getElementsByTagName('form')[0],
      contactInput = contactForm.getElementsByTagName('input');

  contactInput[1].addEventListener('keypress', function (e) {
      let key = e.keyCode;
      if (key != 43 && key < 48 || key > 57 || key === 47) {
          e.preventDefault();

      }
  });


  function sendForm(item) {

      item.addEventListener('submit', function (event) {
          event.preventDefault();
          item.appendChild(statusMessage);

          let formData = new FormData(item);

          function postData(data) {
              return new Promise(function (resolve, reject) {
                  let request = new XMLHttpRequest();
                  request.open('POST', 'server.php');
                  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');



                  let obj = {};
                  formData.forEach(function (value, key) {
                      obj[key] = value;
                  });

                  let json = JSON.stringify(obj);
                  request.send(json);

                  request.addEventListener('readystatechange', function () {
                      if (request.readyState < 4) {
                          resolve();
                      } else if (request.readyState === 4 && request.status == 200) {
                          resolve();
                      } else {
                          reject();
                      }
                  });
              });



          }
          function clear() {
              for (let i = 0; i < input.length; i++) {
                  input[i].value = '';
              }
          }

          postData(formData)
              .then(() => (statusMessage.innerHTML = message.loading))
              .then(() => (statusMessage.innerHTML = message.success))
              .catch(() => (statusMessage.innerHTML = message.failure))
              .then(clear);


      });
  }

  sendForm(form);
  sendForm(contactForm);

}

module.exports = form;