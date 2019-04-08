const resultsElement = document.querySelector('.search--result--body .container');

let tag = window.location.href;
let newTag = tag.slice(tag.indexOf('?search=') + 8, tag.length);
console.log(newTag);

searchStorage();


function searchStorage() {
    let newArr = [];
    let pattern = ''
    coursesObjArray.forEach(function(item){
        if(item.title.toLowerCase().includes(newTag) || item.category.toLowerCase().includes(newTag)){
            newArr.push(item);
        }
    });
    console.log(newArr);
    newArr.forEach(function(item) {
        let starPattern = '';
        for(let i = 0; i < Math.floor(item.rating); i++){
            starPattern += '<i class="fas fa-star"></i>';
        }

        if(5 - item.rating <= .9){
            starPattern += '<i class="fas fa-star-half-alt"></i>';
        }else if(5 - item.rating >= 1){
            starPattern += '<i class="fas fa-star-half-alt"></i><i class="far fa-star"></i>';
        }else{
            starPattern += '';
        }
        pattern += 
        `
        <div class="search--result--card">
            <div class="result--card--container">       
                <div class="result--card--img">
                    <img src="${item.img}" alt="course-image">
                </div>
                <div class="result--card--body">
                    <h3>${item.title}</h3>
                    <span class="result--card--price">${item.price}</span>
                    <span class="result--card--author">${item.author}</span>
                    <span class="result--card--rating">${starPattern} ${item.rating}</span>
                </div>
            </div>
            <div class="search--dropdown">
                <div class="search--dropdown--container">
                    <span class="search--dropdown--price">${item.price}</span>
                    <button name="${item.title}" class="search--dropdown--btn">Buy</button>
                </div>
            </div>
        </div>
        `;
    });
    
    resultsElement.innerHTML = pattern;
    buyBtnListeners('search');
}
