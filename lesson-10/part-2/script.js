window.addEventListener('DOMContentLoaded', function() {
   
   "use strict";

   class Options {
      constructor(height, width, bg, fontSize, textAlign) {
         this.height = height + 'px';
         this.width = width + 'px';
         this.bg = bg;
         this.fontSize = fontSize + 'px';
         this.textAlign = textAlign;
      }

      CreateDiv(text) {
         let div = document.createElement('div');
            
         div.className = "box";
         div.textContent = text;

         let parent = document.body;
             parent.appendChild(div);

         div.style.cssText = `height:${this.height};
                              width:${this.width};
                              background:${this.bg};
                              font-size:${this.fontSize};
                              text-align:${this.textAlign};`;
      }
   }
   let elementDiv = new Options (200, 300, '#FF9585', 30, 'center');
   
   elementDiv.CreateDiv('Привет Андрей надеюсь я сделал всё правильно :)');
});


