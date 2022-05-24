
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



const openPopUp = document.getElementById('pop-up__btn');
const closePopUp = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();

    popUp.classList.add('active');

});

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
});

const formPopUp = document.getElementById('pop-up-form');

function getFormData(e) {
    e.preventDefault();
    const name = formPopUp.querySelector('[name="name"]');
    const phone = formPopUp.querySelector('[name="phone"]');
    const session = formPopUp.querySelector('[name="select"]');
    const date = formPopUp.querySelector('[name="date"]');
    const time = formPopUp.querySelector('[name="time"]');

    const values = {
        name: name.value,
        phone: phone.value,
        session: session.value,
        date: date.value,
        time: time.value
    };

    let fail = "";
    if(name.value=="" || name.value.length<2 || phone.value=="" || session.selectedIndex==0 || date.value=="" || time.value=="") {
    fail = "Заполните все поля";
    };
    if (fail!="") {
    document.getElementById('pop-up-error').innerHTML = fail;
    return false;
    } else {
    console.log(values);
    formPopUp.reset();
    }

}

formPopUp.addEventListener('submit', getFormData);