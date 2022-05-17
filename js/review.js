const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
    item.addEventListener('click', () => {
        const {itemValue} = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
        
        //request back-end
    })
    )


const form = document.querySelector('.review-send');

function getFormValue(e) {
    e.preventDefault();
    const name = form.querySelector('[name="name"]');
    const surname = form.querySelector('[name="surname"]');
    const email = form.querySelector('[name="email"]');
    const review = form.querySelector('[name="review"]');

    const values = {
        name: name.value,
        surname: surname.value,
        email: email.value,
        review: review.value
    };
    
    let fail = "";
    if(name.value=="" || surname.value=="" || email.value=="" || review.value=="") {
    fail = "Заполните все поля";
    } else if (name.value.length < 2) {
    fail = "Введите правильно имя";
    }else if (surname.value.length < 2) {
    fail = "Введите правильно фамилию";
    } else if (review.value.length < 20) {
    fail = "Ваше сообщение слишком короткое";
    };
    if (fail!="") {
    document.getElementById('error').innerHTML = fail;
    return false;
    } else {
    alert("Спасибо за отзыв!");
    console.log(values);
    form.reset();
    }
}

form.addEventListener('submit',getFormValue);