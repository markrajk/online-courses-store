const sliderContainerElement = document.querySelector('.slider--container');
const slider01 = document.querySelectorAll('.slider--01 > div');
const slider02 = document.querySelectorAll('.slider--02 > div');
const allSliderBtns = document.querySelectorAll('.slider--btn');
const allSliderCategories = document.querySelectorAll('.slider--01--heading button');

let currentSlide01 = 0;
let currentSlide02 = 0;

allSliderCategories[0].classList.add('slider--heading--btn--active');

let category = 'developement';

populateSlider(coursesObjArray, currentSlide01, slider01);
populateSlider(coursesObjArray, currentSlide02, slider02);

function filterCourses(arr, tag) {
    let newArr = arr.filter(i => i.category.includes(tag));
    return newArr;
}

//FILL SLIDER, CHANGE CARDS
function populateSlider(arr, index, slider) {
    let numberOfCards = checkScreenWidth();
    let container = slider[0];
    let btnLeft = slider[1];
    let btnRight = slider[2];
    let pattern = '';
    if (slider[0].parentElement.classList.contains('slider--01')) {
        arr = filterCourses(arr, category);
        arr.sort(function (a, b) {
            return b.rating - a.rating;
        });
    }
    if (slider[0].parentElement.classList.contains('slider--02')) {
        arr.sort(function (a, b) {
            return b.rating - a.rating;
        });
    }

    btnLeft.style.display = 'block';
    btnRight.style.display = 'block';

    if (index >= arr.length - numberOfCards) {
        index = arr.length - numberOfCards;
        btnRight.style.display = 'none';

    } else if (index <= 0) {
        index = 0;
        btnLeft.style.display = 'none';

    } else if (slider[0].parentElement.classList.contains('slider--01')) {
        currentSlide01 = index;
    } else if (slider[0].parentElement.classList.contains('slider--02')) {
        currentSlide02 = index;
    }
    for (let i = index; i < index + numberOfCards; i++) {
        let element = arr[i];
        let starPattern = '';
        for(let i = 0; i < Math.floor(element.rating); i++){
            starPattern += '<i class="fas fa-star"></i>';
        }

        if(5 - element.rating <= .9){
            starPattern += '<i class="fas fa-star-half-alt"></i>';
        }else if(5 - element.rating >= 1){
            starPattern += '<i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>';
        }else{
            starPattern += '';
        }

        pattern += `<div class="slider--card card--${i + 1}">
                        <div class="card--header" style="background: url(${element.img});"></div>
                        <div class="card--body">
                            <div class="card--title">${element.title.substring(0, 33)}...</div>
                            <div class="card--author">${element.author}</div>
                            <div class="card--rating">${starPattern} ${element.rating}</div>
                            <div class="card--price">${element.price}</div>
                        </div>
                        <div class="card--dropdown">
                            <div class="card--dropdown--container">
                                <span class="card--dropdown--price">${element.price}</span>
                                <button name="${element.title}" class="card--dropdown--btn">Buy</button>
                            </div>
                        </div>
                    </div>`;
    }
    container.innerHTML = pattern;

    buyBtnListeners('card');
}

//DETERMINE NUMBER OF CARDS
function checkScreenWidth() {
    let sliderWidth = sliderContainerElement.clientWidth;
    let cardWidth = 215;
    let numberOfCards = Math.floor(sliderWidth / cardWidth);
    if (numberOfCards < 3) {
        numberOfCards = 3;
    } else if (numberOfCards > 6) {
        numberOfCards = 6;
    }
    return numberOfCards;
};

// ALL SLIDER BTNS EVENT LISTENER
allSliderBtns.forEach(function (item) {
    item.addEventListener('click', function (e) {
        let numberOfCards = checkScreenWidth();
        //LEFT BUTTON
        if (e.target.classList.contains('slider--btn--left')) {
            //SLIDER 01
            if (e.target.parentElement.classList.contains('slider--01')) {
                currentSlide01 -= numberOfCards;
                populateSlider(coursesObjArray, currentSlide01, slider01);
                //SLIDER 02
            } else if (e.target.parentElement.classList.contains('slider--02')) {
                currentSlide02 -= numberOfCards;
                populateSlider(coursesObjArray, currentSlide02, slider02);
            }
            //RIGHT BUTTON
        } else if (e.target.classList.contains('slider--btn--right')) {
            //SLIDER 01
            if (e.target.parentElement.classList.contains('slider--01')) {
                currentSlide01 += numberOfCards;
                populateSlider(coursesObjArray, currentSlide01, slider01);
                //SLIDER 02
            } else if (e.target.parentElement.classList.contains('slider--02')) {
                currentSlide02 += numberOfCards;
                populateSlider(coursesObjArray, currentSlide02, slider02);
            }
        }
    });
});

allSliderCategories.forEach(function(item, i){
    item.addEventListener('click', function(e){
        currentSlide01 = 0;
        allSliderCategories[0].classList.remove('slider--heading--btn--active');
        allSliderCategories[1].classList.remove('slider--heading--btn--active');
        allSliderCategories[2].classList.remove('slider--heading--btn--active');
        allSliderCategories[3].classList.remove('slider--heading--btn--active');
        allSliderCategories[4].classList.remove('slider--heading--btn--active');
        allSliderCategories[i].classList.toggle('slider--heading--btn--active');
        category = allSliderCategories[i].innerHTML.toLowerCase();
        populateSlider(coursesObjArray, currentSlide01, slider01);
    });
});

// ON RESIZE
window.addEventListener('resize', function () {
    populateSlider(coursesObjArray, currentSlide01, slider01);
    populateSlider(coursesObjArray, currentSlide02, slider02);
});