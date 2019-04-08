const allNavItemElements = document.querySelectorAll('.nav--item');

const allSignupBtnElement = document.querySelectorAll('.signup--btn');
const signupPopupElement = document.getElementById('signup--popup');
const signupFormElement = document.getElementById('signup--form');
const signupInputElements = document.querySelectorAll('#signup--form input');

const allLoginBtnElement = document.querySelectorAll('.login--btn');
const allLogoutBtnElement = document.querySelectorAll('.logout--btn');
const loginPopupElement = document.getElementById('login--popup');
const loginFormElement = document.getElementById('login--form');
const loginInputElements = document.querySelectorAll('#login--form input');

const popupCloseBtnElement = document.querySelectorAll('.popup--close');

const initialsElement = document.querySelectorAll('.initials');

// GETS DATA FROM SESSION STORAGE
let userObjArray = (sessionStorage.users) ? JSON.parse(sessionStorage.users) : [{ email: 'admin@admin.admin', password: 'admin123', initials: 'A' }];
let activeUser = (sessionStorage.activeUser) ? JSON.parse(sessionStorage.activeUser) : null;


console.log(activeUser);
updateUserInterface();


function updateUserInterface() {
    let myCoursesBtn = allNavItemElements[4];
    let loginBtn = allNavItemElements[5];
    let signupBtn = allNavItemElements[6];
    // let shoppingCartBtn = allNavItemElements[6];
    let personalBtn = allNavItemElements[7];
    let personalBtn2 = document.querySelectorAll('.dropdown--content--header .personal--btn .initials');
    let personalName = document.querySelectorAll('.dropdown--content--header--name');
    let personalEmail = document.querySelectorAll('.dropdown--content--header--email');
    let burgerHeader = document.querySelector('.burger--ddc .dropdown--content--header');
    let burgerSignup = document.getElementById('burger--signup');
    let burgerLogin = document.getElementById('burger--login');
    let burgerLogout = document.getElementById('burger--logout');
    let burgerMyCourses = document.getElementById('burger--mycourses');



    if (activeUser) {
        initialsElement.forEach(function(item){
            item.innerHTML = activeUser.initials;
        });
        personalBtn2.forEach(function(item){
            item.innerHTML = activeUser.initials;
        });
        personalName.forEach(function(item){
            item.innerHTML = activeUser.name;
        });
        personalEmail.forEach(function(item){
            item.innerHTML = activeUser.email;
        });
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        burgerSignup.style.display = 'none';
        burgerLogin.style.display = 'none';

        // shoppingCartBtn.style.display = 'flex';
        burgerHeader.style.display = 'flex';
        personalBtn.style.display = 'flex';
        myCoursesBtn.style.display = 'flex';
        burgerLogout.style.display = 'flex';
        burgerMyCourses.style.display = 'flex';
    } else {
        // shoppingCartBtn.style.display = 'none';
        
        personalBtn.style.display = 'none';
        burgerHeader.display = 'none';
        myCoursesBtn.style.display = 'none';
        burgerLogout.style.display = 'none';
        burgerMyCourses.style.display = 'none';

        loginBtn.style.display = 'flex';
        signupBtn.style.display = 'flex';
        burgerSignup.style.display = 'flex';
        burgerLogin.style.display = 'flex';
    }
};


// DELAY FUNCTION
function timeOut(func) {
    let time = Math.random() * (300 - 150) + 150;
    setTimeout(func, time);
}

// CHECK INPUT WITH REGEX 
function checkInput(input) {
    let pattern = '';
    let text;
    let result;
    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        switch (input[i].name) {
            case "signup--name":
                pattern = /^[a-zA-Z]{2,}([ ][a-zA-Z]{2,})+$/;
                text = input[i].value;
                result = text.match(pattern);
                if (result != null) {
                    counter++;
                    input[i].nextElementSibling.style.display = 'none';
                } else {
                    input[i].focus();
                    input[i].nextElementSibling.innerHTML = '<p>Enter Your Full Name!</p>';
                    input[i].nextElementSibling.style.display = 'block';
                }
                break;

            case "signup--email":
                pattern = /^[a-zA-Z0-9]+\w?([\.]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)(\.[a-zA-Z]{2,6})$/;
                text = input[i].value;
                result = text.match(pattern);
                if (result != null) {
                    counter++;
                    input[i].nextElementSibling.style.display = 'none';
                } else {
                    input[i].focus();
                    input[i].nextElementSibling.innerHTML = '<p>Enter Valid Email Address!</p>';
                    input[i].nextElementSibling.style.display = 'block';
                }
                break;

            case "signup--password":
                pattern = /^[a-zA-Z0-9]{8,}$/;
                text = input[i].value;
                result = text.match(pattern);
                if (result != null) {
                    counter++;
                    input[i].nextElementSibling.style.display = 'none';
                } else {
                    input[i].focus();
                    input[i].nextElementSibling.innerHTML = '<p>Use Letters and Numbers only, min 8 characters!</p>';
                    input[i].nextElementSibling.style.display = 'block';
                }
                break;

            case "login--email":
                pattern = /^[a-zA-Z0-9]+\w?([\.]?[a-zA-Z0-9]+)*@[a-z0-9]+([\.-]?[a-zA-Z0-9]+)(\.[a-zA-Z]{2,6})$/;
                text = input[i].value.toLowerCase();
                result = text.match(pattern);
                if (result != null) {
                    counter++;
                    input[i].nextElementSibling.style.display = 'none';
                } else {
                    input[i].focus();
                    input[i].nextElementSibling.innerHTML = '<p>Enter Valid Email Address!</p>';
                    input[i].nextElementSibling.style.display = 'block';
                }
                break;

            case "login--password":
                pattern = /^[a-zA-Z0-9]{8,}$/;
                text = input[i].value.toLowerCase();
                result = text.match(pattern);
                if (result != null) {
                    counter++;
                    input[i].nextElementSibling.style.display = 'none';
                } else {
                    input[i].focus();
                    input[i].nextElementSibling.innerHTML = '<p>Use Letters and Numbers only, min 8 characters!</p>';
                    input[i].nextElementSibling.style.display = 'block';
                }
                break;

            case "buy--name":
                pattern = /^[a-zA-Z]{2,}([ ][a-zA-Z]{2,})+$/;
                text = input[i].value;
                result = text.match(pattern);
                if (result != null) {
                    counter++;
                    input[i].nextElementSibling.style.display = 'none';
                } else {
                    input[i].focus();
                    input[i].nextElementSibling.innerHTML = '<p>Enter Your Full Name!</p>';
                    input[i].nextElementSibling.style.display = 'block';
                }
                break;

            case "buy--cardnumber":
                pattern = /^[0-9]{16}$/;
                text = input[i].value.toLowerCase();
                result = text.match(pattern);
                if (result != null) {
                    counter++;
                    input[i].nextElementSibling.style.display = 'none';
                } else {
                    input[i].focus();
                    input[i].nextElementSibling.innerHTML = '<p>Enter Valid Card Number! 16 Numbers</p>';
                    input[i].nextElementSibling.style.display = 'block';
                }
                break;

            case "buy--securitycode":
                pattern = /^[0-9]{3}$/;
                text = input[i].value.toLowerCase();
                result = text.match(pattern);
                if (result != null) {
                    counter++;
                    input[i].nextElementSibling.style.display = 'none';
                } else {
                    input[i].focus();
                    input[i].nextElementSibling.innerHTML = '<p>Enter Valid Security Code! 3 Numbers!</p>';
                    input[i].nextElementSibling.style.display = 'block';
                }
                break;
        }
    }
    if (counter === input.length) {
        return true;
    } else {
        return false;
    }
}

// CLEARS INPUT AND REMOVES TOOLTIPS
function clearInput(input) {
    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
        input[i].nextElementSibling.style.display = 'none';
    }
}


// CHECKS IF EMAIL IS TAKEN AND CREATES OBJECT FOR STORAGE
function checkUsersSignUpInfo(input) {
    let text;
    let counter = 0;
    let userInfo = {};

    for (let i = 0; i < input.length; i++) {
        switch (input[i].name) {
            case "signup--email":
                text = input[i].value.toLowerCase();
                userObjArray.forEach(function (obj) {
                    if (obj.email === text) {
                        input[i].nextElementSibling.innerHTML = '<p>Email Address is Already in Use!</p>';
                        input[i].nextElementSibling.style.display = 'block';
                        counter--;
                    }
                });
                userInfo.email = text;
                break;

            case "signup--password":
                text = input[i].value.toLowerCase();
                userInfo.password = text;
                counter++;
                break;

            case "signup--name":
                text = input[i].value.toLowerCase();
                let names = text.split(' ');
                let initials = names[0].substring(0, 1).toUpperCase();

                if (names.length > 1) {
                    initials += names[names.length - 1].substring(0, 1).toUpperCase();
                }

                userInfo.name = text;
                userInfo.initials = initials;
                break;
        }
    }
    if (counter === 1) {
        return userInfo;
    } else {
        return null;
    }
}

// CHECKS LOGIN INPUT AND STORAGE FOR MATCH
function checkUsersLogInInfo(input) {
    let text;
    let counter = 0;
    let userFound = {};

    for (let i = 0; i < input.length; i++) {
        switch (input[i].name) {
            case "login--email":
                text = input[i].value.toLowerCase();
                userObjArray.forEach(function (obj) {
                    if (obj.email === text) {
                        userFound = obj;
                        counter++;
                    }
                });
                break;

            case "login--password":
                text = input[i].value.toLowerCase();
                if (userFound !== {} && userFound.password === text) {
                    counter++;
                } else {
                    input[i].nextElementSibling.innerHTML = '<p>Wrong Email/Password Info!</p>';
                    input[i].nextElementSibling.style.display = 'block';
                }
                break;
        }
    }
    if (counter === input.length) {
        return userFound;
    } else {
        return null;
    }
}

// LOG IN FUNCTION
function logIn() {
    let inputChecked = checkInput(loginInputElements);
    if (inputChecked) {
        let userInfo = checkUsersLogInInfo(loginInputElements);
        if (userInfo !== null) {
            activeUser = userInfo;
            sessionStorage.activeUser = JSON.stringify(activeUser);
            loginFormElement.submit();
            clearInput(loginInputElements);
        }
    }
};

// SIGN UP FUNCTION
function signUp() {
    let inputChecked = checkInput(signupInputElements);
    if (inputChecked) {
        let userInfo = checkUsersSignUpInfo(signupInputElements);
        if (userInfo !== null) {
            userInfo.myCourses = [];
            userObjArray.push(userInfo);
            sessionStorage.users = JSON.stringify(userObjArray);
            sessionStorage.activeUser = JSON.stringify(userInfo);
            signupFormElement.submit();
            clearInput(signupInputElements);
        }
    }
};

// LOG OUT
function logOut() {
    sessionStorage.removeItem('activeUser');
    window.location.reload();
};

allLogoutBtnElement.forEach(function(item){
    item.addEventListener('click', function (e) {
        e.preventDefault();
        timeOut(logOut);
    });
});

// SIGN-UP FORM SUBMIT LISTENER
signupFormElement.addEventListener('submit', function (e) {
    e.preventDefault();
    timeOut(signUp);
});

// LOG-IN FORM SUBMIT LISTENER
loginFormElement.addEventListener('submit', function (e) {
    e.preventDefault();
    timeOut(logIn);
});

// SHOW POPUP
allSignupBtnElement.forEach(function(item){
    item.addEventListener('click', function () {
        timeOut(function () {
            loginPopupElement.style.display = 'none';
            signupPopupElement.style.display = 'block';
            signupInputElements[0].focus();
        });
    });
});

allLoginBtnElement.forEach(function(item){
    item.addEventListener('click', function () {
        timeOut(function () {
            signupPopupElement.style.display = 'none';
            loginPopupElement.style.display = 'block';
            loginInputElements[0].focus();
        });
    });
});


// CLOSE POPUPS WITH X BTN

popupCloseBtnElement.forEach(function (item) {
    item.addEventListener('click', function (e) {
        timeOut(function () {
            clearInput(signupInputElements);
            clearInput(loginInputElements);
            if (e.target.matches('.popup--close')) {
                e.target.parentElement.parentElement.parentElement.style.display = 'none';
            } else {
                e.target.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
            }
        });
    });
});

// CLOSE POPUPS WITH ESC
window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        timeOut(function () {
            clearInput(signupInputElements);
            clearInput(loginInputElements);
            signupPopupElement.style.display = 'none';
            loginPopupElement.style.display = 'none';
        });
    };
});
