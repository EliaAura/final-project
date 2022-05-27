const openPopUp = document.getElementById('pop-up__btn');
const openPopUp2 = document.getElementById('pop-up__button');
const closePopUp = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');
const popUpError = document.getElementById('pop-up-error');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');

});

openPopUp2.addEventListener('click', function(e) {
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