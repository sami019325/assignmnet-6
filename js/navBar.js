const getData = (category, categoryName) => {

    fetch(`https://openapi.programming-hero.com/api/news/category/${category}`)
        .then(Response => Response.json())
        .then(newData => showData(newData, categoryName))
        .catch(err => console.log(err));



}

const displayNewsDetails = (id) => {
    textFull = 2500;
    categoryName = "details";
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(Response => Response.json())
        .then(newData => showData(newData, categoryName, textFull))
        .catch(err => console.log(err));
}


const newsTypeList = ['Home', 'Breaking news', 'Regular news', 'International news', 'Sports', 'Entertainment', 'Culture', 'Arts', 'All news'];
newsTypeList.forEach(typeOfNews => {
    newsTypeContainer = document.getElementById('newsTypeContainer')
    const newsType = document.createElement('div');
    newsType.innerHTML = `
    <button onclick="displayNews('${typeOfNews}')" class="hover:bg-violet-50 hover:text-violet-600 px-5 mt-5 rounded">${typeOfNews}</button>
    `
    newsTypeContainer.appendChild(newsType)
});

const showLoading = (signal) => {
    const loader = document.getElementById('loading')
    if (signal) {
        loader.classList.remove('hidden');
        document.getElementById('noNewsFound').style.display = 'none';
    }
    else {
        loader.classList.add('hidden');
    }
}



// show data 
const showData = (datatype, categoryName, textFull = 150) => {
    const newsContainer = document.getElementById('news_container');
    newsContainer.innerHTML = "";
    const numberOfNews = datatype.data.length;
    if (numberOfNews === 0) { document.getElementById('noNewsFound').style.display = 'block'; }
    displayNumberOfNews(numberOfNews, categoryName)
    const totalData = datatype.data
    totalData.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
    <div class="p-2 mt-5 bg-gray-50 rounded">
<div class="grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-4">
    <img class="col-span-1 w-full h-full row-span-3"
        src="${news.image_url}"
        alt="" srcset="">
    <div class="col-span-2 row-span-2 text-ellipsis">
        <h2>${news.title}</h2>
        <p <span > ${news.details.slice(0, textFull)}</span>...
        </p>
    </div>
    <div class="col-span-2 row-span-1 grid grid-cols-3">
        <div class=" grid grid-cols-1 md:grid-cols-2 grid-rows-2 justify-items-center content-center">
            <img class="w-10 h-10 rounded-full row-span-2" src="${news.author.img}" alt="" srcset="">
            <p>${news.author.name}</p>
            <p>${news.author.published_date ? news.author.published_date.slice(0, 11) : 'no date available'}</p>
        </div>
        <div class=" grid justify-items-center content-center">
            <p class="font-bold text-gray-400">${news.total_view} views</p>
        </div>
        <button onclick="displayNewsDetails('${news._id}','details')" class=" grid justify-items-center content-center">
            <img src="image/arrow-right-short.png" alt="" srcset="">
        </button>
    </div>
</div>
</div>
    `
        newsContainer.appendChild(newsDiv)
    })
    showLoading(false)
};


const displayNumberOfNews = (totalNumber, category) => {
    const numberOfNewsContainer = document.getElementById('numberOfNews')
    numberOfNewsContainer.innerHTML = `
    <div>${totalNumber} items found for ${category} </div>
    `


};


const displayNews = (newsType) => {
    showLoading(true)
    switch (newsType) {
        case "Home":
            category = '08';
            categoryName = "Home"
            return getData(category, categoryName)
        case "Breaking news":
            category = '01';
            categoryName = 'Breaking news';
            return getData(category, categoryName)
        case "Regular news":
            category = '02'
            categoryName = "Regular news";
            return getData(category, categoryName)
        case "International news":
            category = '03';
            categoryName = "International news"
            return getData(category, categoryName)
        case "Sports":
            category = '04';
            categoryName = "Sports"
            return getData(category, categoryName)
        case "Entertainment":
            category = '05';
            categoryName = "Entertainment"
            return getData(category, categoryName)
        case "Culture":
            category = '06';
            categoryName = "Cultures"
            return getData(category, categoryName)
        case "Arts":
            category = '07';
            categoryName = "Arts"
            return getData(category, categoryName)
        case "All news":
            category = '08';
            categoryName = "All news"
            return getData(category, categoryName)
    }

};
displayNews("Home")



