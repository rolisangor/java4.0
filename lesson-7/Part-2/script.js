window.addEventListener('DOMContentLoaded', function () {

    "use strict";

        let date = new Date(),
            h = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds(),
            container = document.querySelector('.timer');

        function addZero(n) {
            if (n < 10) {
                return '0' + n;
            } else {
                return n;
            }
        }

        let timer = setTimeout(function t() {
            container.innerHTML = addZero(h) + ':' + addZero(m) + ':' + addZero(s);
            setTimeout(t, 1000);
        });
});