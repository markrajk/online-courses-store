const buyPopupElement = document.getElementById('buy--popup');
const buyFormElement = document.getElementById('buy--form');
const buyInputElements = document.querySelectorAll('#buy--form input');

let boughtCourse;
// if(activeUser) {
//     var myCoursesActive = (sessionStorage.activeUser.myCourses) ? JSON.parse(sessionStorage.activeUser.myCourses) : [];
// }


function buy() {
    let inputChecked = checkInput(buyInputElements);
    if (inputChecked) {
        let course = coursesObjArray.filter(i => i.title === boughtCourse);

        userObjArray.forEach(element => {
            if(element.email === activeUser.email){
                element.myCourses.push(course);
                sessionStorage.activeUser = JSON.stringify(element);
                console.log(element);
                // activeUser.myCourses = myCoursesActive;
                // activeUser.myCourses.push(course);
            }
        });
        
        console.log(userObjArray);
        sessionStorage.users = JSON.stringify(userObjArray);
        buyFormElement.submit();
        clearInput(buyInputElements);
    }
};


function buyBtnListeners(tag) {
    let allCardBtns = document.querySelectorAll(`.${tag}--dropdown--btn`);
    
    for(let i = 0; i < allCardBtns.length; i++) {
        allCardBtns[i].addEventListener('click', function(){
            if(!activeUser) {
                signupPopupElement.style.display = 'block';
            }else{
                buyPopupElement.style.display = 'block';
                boughtCourse = allCardBtns[i].name;
            }
        });
    }
};

buyFormElement.addEventListener('submit', function(e){
    console.log(boughtCourse);
    e.preventDefault();
    timeOut(buy);
});