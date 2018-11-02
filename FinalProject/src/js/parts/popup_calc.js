function popupCalc() {
   let popupCalcShow = document.querySelectorAll('.popup_calc_btn'),
       popupCalc = document.querySelector('.popup_calc'),
       popupCalcProfile = document.querySelector('.popup_calc_profile'),
       popupCalcEnd = document.querySelector('.popup_calc_end'),
       inputWidth = document.querySelector('#width'),
       inputHeight = document.querySelector('#height'),
       inputSelect = document.querySelector('#view_type'),
       chckbx = document.querySelectorAll('input[type="checkbox"]');

       
       chckbx[1].addEventListener('change', function() {
         chckbx[0].checked = !chckbx[1].checked;
       });
       
       chckbx[0].addEventListener('change', function() {
         chckbx[1].checked = !chckbx[0].checked;
       });

   let options = {
      width: inputWidth.value,
      Height: inputHeight.value,
      glassProfile: inputSelect.value,
      checkbox: chckbx.checked
   };    

       for (let i = 0; i < popupCalcShow.length; i++) {
         popupCalcShow[i].addEventListener('click', () => {
            popupCalc.style.display = 'flex';
         });
       }

       popupCalc.addEventListener('click', (event) => {
          let target = event.target;
             if(target.className == 'popup_calc_close' || target.className == 'closed'){
                popupCalc.style.display = 'none';
                // clear data object IMPORTANT!!!!
             }
             else if(target.className == 'button popup_calc_button'){
                popupCalc.style.opacity = '0';
                popupCalcProfile.style.display = 'flex';
             }
       });

       popupCalcProfile.addEventListener('click', (event) => {
         let target = event.target;
             if(target.className == 'popup_calc_profile_close' || target.className == 'closed'){
                popupCalc.style.display = 'none';
                popupCalcProfile.style.display = 'none';
                // clear data object IMPORTANT!!!!
             }
             else if(target.className == 'button popup_calc_profile_button'){
               popupCalcProfile.style.opacity = '0';
               popupCalcEnd.style.display = 'flex';
               console.log(options);
            }
       });

       popupCalcEnd.addEventListener('submit', (event) => {
         let target = event.target;
            if(target.className == 'popup_calc_end_close' || target.className == 'closed'){
                popupCalc.style.display = 'none';
                popupCalcProfile.style.display = 'none';
                popupCalcEnd.style.display = 'none';
                // clear data object IMPORTANT!!!!
             }
       });    
       console.log(options);
}

module.exports = popupCalc