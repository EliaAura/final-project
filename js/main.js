
"use strict"

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }

};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');

};

// -------menu burger-------

const menuBurger = document.querySelector('.burger-menu');
if(menuBurger) {
    const nav = document.querySelector('.nav');
    menuBurger.addEventListener('click', function(e){
        document.body.classList.toggle('_lock')
        menuBurger.classList.toggle('_active');
        nav.classList.toggle('_active');

    });
}