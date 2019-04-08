const resultsElement = document.querySelector('.search--result--body .container');


if(!activeUser){
    window.location.href="index.html";
}else {
    listMyCourses();
}

function listMyCourses() {
    let pattern = ''
    console.log(activeUser.myCourses);
    for(let i = activeUser.myCourses.length-1; i >= 0; i--){
        let starPattern = '';
        for(let j = 0; j < Math.floor(activeUser.myCourses[i][0].rating); j++){
            starPattern += '<i class="fas fa-star"></i>';
        }

        if(5 - activeUser.myCourses[i][0].rating <= .9){
            starPattern += '<i class="fas fa-star-half-alt"></i>';
        }else if(5 - activeUser.myCourses[i][0].rating >= 1){
            starPattern += '<i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>';
        }else{
            starPattern += '';
        }
        pattern += 
        `
        <div class="search--result--card">
            <div class="result--card--container">       
                <div class="result--card--img">
                    <img src="${activeUser.myCourses[i][0].img}" alt="course-image">
                </div>
                <div class="result--card--body">
                    <h3>${activeUser.myCourses[i][0].title}</h3>
                    <span class="result--card--price"></span>
                    <span class="result--card--author">${activeUser.myCourses[i][0].author}</span>
                    <span class="result--card--rating">${starPattern} ${activeUser.myCourses[i][0].rating}</span>
                </div>
            </div>
        </div>
        `;
    };
    resultsElement.innerHTML = pattern;
}
