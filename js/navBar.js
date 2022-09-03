const getData = (category) => {

    fetch(`https://openapi.programming-hero.com/api/news/category/${category}`)
        .then(Response => Response.json())
        .then(newData => showData(newData, category))



}


/* const newsTypeList = {
    home: { id: 01, name: 'Home' },
    Breaking_news: { id: 01, name: 'Breaking News' },
    Regular_news: { id: 01, name: 'Regular News' },
    International_news: { id: 01, name: 'International News' },
    Sports: { id: 01, name: 'Sports' },
    Entertainment: { id: 01, name: 'Entertainment' },
    Culture: { id: 01, name: 'Culture' },
    Arts: { id: 01, name: 'Arts' },
    All_news: { id: 01, name: 'All news' },
}
 */
const newsTypeList = ['Home', 'Breaking news', 'Regular news', 'International news', 'Sports', 'Entertainment', 'Culture', 'Arts', 'All news'];
//for (typeOfNews in newsTypeList) {} 
newsTypeList.forEach(typeOfNews => {
    newsTypeContainer = document.getElementById('newsTypeContainer')
    const newsType = document.createElement('div');
    newsType.innerHTML = `
    <button onclick="displayNews('${typeOfNews}')" class="hover:bg-violet-50 hover:text-violet-600 px-5 mt-5 rounded">${typeOfNews}</button>
    `
    newsTypeContainer.appendChild(newsType)
});


// show data 
const showData = (datatype, category) => {
    const newsContainer = document.getElementById('news_container');
    console.log(datatype.data, category)
    const numberOfNews = datatype.data.length;
    displayNumberOfNews(numberOfNews, category)
    console.log("number of data:", numberOfNews)
    const totalData = datatype.data
    totalData.forEach(news => {
        console.log(news.image_url)
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
    <div class="p-2 mt-5 bg-gray-50 rounded">
<div class="grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-4">
    <img class="col-span-1 w-full h-full row-span-3"
        src="${news.image_url}"
        alt="" srcset="">
    <div class="col-span-2 row-span-2 text-ellipsis">
        <h2>${news.title}</h2>
        <p class=" h-24 text-ellipsis overflow-hidden">
        </p>
    </div>
    <div class="col-span-2 row-span-1 grid grid-cols-3">
        <div class=" grid grid-cols-1 md:grid-cols-2 grid-rows-2 justify-items-center content-center">
            <img class="w-10 h-10 rounded-full row-span-2" src="${news.author.img}" alt="" srcset="">
            <p>${news.author.name}</p>
            <p>${news.author.published_date.slice(0, 11)}</p>
        </div>
        <div class=" grid justify-items-center content-center">
            <p class="font-bold text-gray-400">${news.total_view} views</p>
        </div>
        <button class=" grid justify-items-center content-center">
            <img src="image/arrow-right-short.png" alt="" srcset="">
        </button>
    </div>
</div>
</div>
    `
        newsContainer.appendChild(newsDiv)
    })
};


const displayNumberOfNews = (totalNumber, category) => {
    const numberOfNewsContainer = document.getElementById('numberOfNews')
    // const numberOfNewsDiv = document.createElement('div')
    numberOfNewsContainer.innerHTML = `
    <div>${totalNumber} items found for ${category} </div>
    `


};


const displayNews = (newsType) => {
    console.log(newsType);
    switch (newsType) {
        case "Home":
            category = '08';
            return getData(category)
        case "Breaking news":
            category = '01';
            return getData(category)
        case "Regular news":
            category = '02';
            return getData(category)
        case "International news":
            category = '03';
            return getData(category)
        case "Sports":
            category = '04';
            return getData(category)
        case "Entertainment":
            category = '05';
            return getData(category)
        case "Culture":
            category = '06';
            return getData(category)
        case "Arts":
            category = '07';
            return getData(category)
        case "All news":
            category = '08';
            return getData(category)
    }

};
//displayNews('Home')

//getData('04')