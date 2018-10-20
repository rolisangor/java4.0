


 let age = document.getElementById('age');

let user = {
   value : age.value,
   showUser : function (surname, name) {
      alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
}

user.showUser('vitalii', 'sili');
user.showUser('ivan', 'lopen')
