
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

// ---------pop up ----------------
const body = document.querySelector('body');
const openPopUpBtns = document.querySelectorAll('.pop-up-btn')
const closePopUp = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');
const popUpError = document.getElementById('pop-up-error');
const timeout = 500;

if (openPopUpBtns.length > 0) {
    for(let i=0; i<openPopUpBtns.length; i++) {
    const popUpBtn = openPopUpBtns[i];
    popUpBtn.addEventListener('click', function(e) {
        e.preventDefault();
        popUp.classList.add('active');
    });
}
}
popUp.addEventListener('click', function(e) {
    if(!e.target.closest('.pop-up__body') && e.target.closest('.pop-up')) {
        popUp.classList.remove('active');}
});

closePopUp.addEventListener('click', (e) => {
    popUp.classList.remove('active');
});


//-------------pop up form--------------------

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
        popUpError.classList.add('active');
        popUpError.innerHTML = fail;
        return false;
    } else {
    console.log(values);
    formPopUp.reset();
    popUpError.classList.remove('active');
    }

}

formPopUp.addEventListener('submit', getFormData);