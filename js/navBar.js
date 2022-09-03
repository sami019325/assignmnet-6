const getData = category => {

    fetch(`https://openapi.programming-hero.com/api/news/category/${category}`)
        .then(Response => Response.json())
        .then(newData => showData(newData, category))



}

getData('01')

const newsTypeList = ['Home', 'Breaking news', 'Regular news', 'International news', 'Sports', 'Entertainment', 'Culture', 'Arts', 'All news'];

newsTypeList.forEach(typeOfNews => {
    newsTypeContainer = document.getElementById('newsTypeContainer')
    const newsType = document.createElement('div');
    newsType.innerHTML = `
    <button onclick="displayNews('${typeOfNews}')" class="hover:bg-violet-50 hover:text-violet-600 px-5 mt-5 rounded">${typeOfNews}</button>
    `
    newsTypeContainer.appendChild(newsType)
});


const displayNews = (newsType) => {
    console.log(newsType);
}


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
}


const displayNumberOfNews = (totalNumber, category) => {
    const numberOfNewsContainer = document.getElementById('numberOfNews')
    const numberOfNewsDiv = document.createElement('div')
    numberOfNewsDiv.innerHTML = `
    <div>${totalNumber} items found for ${category} </div>
    `
    numberOfNewsContainer.appendChild(numberOfNewsDiv)

}