//------------rating stars -------------
const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
    item.addEventListener('click', () => {
        const {itemValue} = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
        
        //request back-end
    })
    )

//--------review array -----------

const wrapperRev = document.querySelector('.reviews-wrapper');

function completeReviews() {
    const reviewItems = document.querySelectorAll('.review__item');
    let reviews = [];

    for(let i=0; i < reviewItems.length; i++) {
        
        const reviewItem = {
            person: reviewItems[i].firstElementChild.innerHTML,
            review: reviewItems[i].lastElementChild.innerHTML
        };
        reviewItems[i].setAttribute('id', i);

        reviews.push(reviewItem);
        localStorage.setItem('id'+i, JSON.stringify(reviewItem));
        console.log(JSON.parse(localStorage.getItem('id'+i)));
    }
}

completeReviews();

//-----------review form ----------
const form = document.querySelector('.review-send');
const error = document.getElementById('error')

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
        error.classList.add('active');
        error.innerHTML = fail;
        return false;
    } else {
        const newRev = document.createElement('div');
        newRev.classList.add('review__item');
        wrapperRev.appendChild(newRev);
        
        const newPers = document.createElement('p');
        newPers.classList.add('review-person-name');
        newPers.innerHTML = `${name.value}` + ` ` + `${surname.value}`;

        const newRevText = document.createElement('p');
        newRevText.classList.add('review-text');
        newRevText.innerHTML = `<q>${review.value}</q>`;
        
        newRev.appendChild(newPers);
        newRev.appendChild(newRevText);
        
        completeReviews();

        form.reset();
        error.classList.remove('active');
        return true;
    }

}

form.addEventListener('submit',getFormValue);