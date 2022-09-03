const getData = category => {

    fetch(`https://openapi.programming-hero.com/api/news/${category}`)
        .then(Response => Response.json())
        .then(newData => showData(newData))



}

getData('01')

const newsTypeList = ['Home', 'Breaking news', 'Regular news', 'International news', 'Sports', 'Entertainment', 'Culture', 'Arts', 'All news'];

newsTypeList.forEach(typeOfNews => {
    console.log(typeOfNews);
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
const showData = datatype => { console.log(datatype); }
/* <div class="p-2 bg-gray-50 rounded">
<div class="grid grid-cols-1 grid-rows-3 md:grid-cols-3 gap-4">
    <img class="col-span-1 w-full h-full row-span-3"
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="" srcset="">
    <div class="col-span-2 row-span-2 text-ellipsis">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, minus!</h2>
        <p class=" h-24 text-ellipsis overflow-hidden">
        </p>
    </div>
    <div class="col-span-2 row-span-1 grid grid-cols-3">
        <div class=" grid justify-items-center content-center">
            <img src="image/Avatar.png" alt="" srcset="">
            <p>jan 10, 2022</p>
        </div>
        <div class=" grid justify-items-center content-center">
            <p class="font-bold text-gray-400">1.5M</p>
        </div>
        <button class=" grid justify-items-center content-center">
            <img src="image/arrow-right-short.png" alt="" srcset="">
        </button>
    </div>
</div>
</div> */