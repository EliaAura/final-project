const form = document.getElementById('contacts-form');
const error = document.getElementById('error');

function getFormValue(e) {
    
    e.preventDefault();

    const name = form.querySelector('[name="name"]');
    const mail = form.querySelector('[name="mail"]');
    const phone = form.querySelector('[name="phone"]');
    const message = form.querySelector('[name="message"]');

    const values = {
        name: name.value,
        mail: mail.value,
        phone: phone.value,
        message: message.value
    };

    let fail = "";
    if(name.value=="" || phone.value=="" || mail.value=="" || message.value=="") {
    fail = "Заполните все поля";
    } else if (name.value.length < 2) {
    fail = "Введите правильно имя";
    } else if (message.value.length < 20) {
    fail = "Ваше сообщение слишком короткое";
    };
    if (fail!="") {
        error.classList.add('active');
        error.innerHTML = fail;
        return false;
    } else {
    alert("Спасибо за сообщение!");
    console.log(values);
    form.reset();
    error.classList.remove('active');
    }
}

form.addEventListener('submit',getFormValue);