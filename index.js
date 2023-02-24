
// step 1 fetching home page news
const homeNewsIndia = () =>{
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=cb01e4482103425fa0dd16ffb7f5c746`)
    // fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=aa57c8c6438f48da8019d1ac44a42488`)
    // fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e10ee72c3c43400b9d34eb974d2666bf`)
    .then(res=>res.json())
    .then((res)=>{
        const newsArr = res.articles;
        // console.dir(newsArr[0])
        const newsDetail = newsArr.map((newsDetail)=>{
            return`
                <div class="homeNews" id="${newsDetail.urlToImage}" style="background-image: url(${newsDetail.urlToImage});">
                    <div class="newsDetailCont">
                        <div class="newsDetail">
                            <a href="${newsDetail.url}" target="_self">
                                <button class="readMore">Read More</button>
                            </a>                                    
                            <p class="publishDate">${newsDetail.publishedAt}</p>
                        </div>

                        <div class="title">
                            <p>${newsDetail.title}</p>
                        </div>
                    </div>
                </div>
            `
            
        }).join("");
        // console.log(newsDetail)
        const homeNewsSec = document.getElementById("homeNewsSec");
        const div = document.createElement("div");
        div.innerHTML = newsDetail;
        div.className = "homeNewsCont";
        homeNewsSec.append(div);

        
        
    })
    .catch(err=>console.log(err));
}

function homeNewsUs(){
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=cb01e4482103425fa0dd16ffb7f5c746`)
        .then(res=>res.json())
        .then((res)=>{
            const newsArr = res.articles;
            // console.dir(newsArr[0])
            const newsDetail = newsArr.map((newsDetail)=>{
                return`
                    <div class="homeNews" id="${newsDetail.urlToImage}" style="background-image: url(${newsDetail.urlToImage});">
                        <div class="newsDetailCont">
                            <div class="newsDetail">
                                <a href="${newsDetail.url}" target="_self">
                                    <button class="readMore">Read More</button>
                                </a>                                    
                                <p class="publishDate">${newsDetail.publishedAt}</p>
                            </div>
    
                            <div class="title">
                                <p>${newsDetail.title}</p>
                            </div>
                        </div>
                    </div>
                `
                
            }).join("");
            // console.log(newsDetail)
            const homeNewsSec = document.getElementById("homeNewsSec");
            const div = document.createElement("div");
            div.innerHTML = newsDetail;
            div.className = "homeNewsCont";
            homeNewsSec.append(div);
        })
        .catch(err=>console.log)
}

function homeNewsNewZealand(){
    fetch(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=cb01e4482103425fa0dd16ffb7f5c746`)
        .then(res=>res.json())
        .then((res)=>{
            const newsArr = res.articles;
            // console.dir(newsArr[0])
            const newsDetail = newsArr.map((newsDetail)=>{
                return`
                    <div class="homeNews" id="${newsDetail.urlToImage}" style="background-image: url(${newsDetail.urlToImage});">
                        <div class="newsDetailCont">
                            <div class="newsDetail">
                                <a href="${newsDetail.url}" target="_self">
                                    <button class="readMore">Read More</button>
                                </a>                                    
                                <p class="publishDate">${newsDetail.publishedAt}</p>
                            </div>
    
                            <div class="title">
                                <p>${newsDetail.title}</p>
                            </div>
                        </div>
                    </div>
                `
                
            }).join("");
            // console.log(newsDetail)
            const homeNewsSec = document.getElementById("homeNewsSec");
            const div = document.createElement("div");
            div.innerHTML = newsDetail;
            div.className = "homeNewsCont";
            homeNewsSec.append(div);
        })
        .catch(err=>console.log)
}

function homeNewsRussia(){
    fetch(`https://newsapi.org/v2/top-headlines?country=sa&apiKey=cb01e4482103425fa0dd16ffb7f5c746`)
        .then(res=>res.json())
        .then((res)=>{
            const newsArr = res.articles;
            // console.dir(newsArr[0])
            const newsDetail = newsArr.map((newsDetail)=>{
                return`
                    <div class="homeNews" id="${newsDetail.urlToImage}" style="background-image: url(${newsDetail.urlToImage});">
                        <div class="newsDetailCont">
                            <div class="newsDetail">
                                <a href="${newsDetail.url}" target="_self">
                                    <button class="readMore">Read More</button>
                                </a>                                    
                                <p class="publishDate">${newsDetail.publishedAt}</p>
                            </div>
    
                            <div class="title">
                                <p>${newsDetail.title}</p>
                            </div>
                        </div>
                    </div>
                `
                
            }).join("");
            // console.log(newsDetail)
            const homeNewsSec = document.getElementById("homeNewsSec");
            const div = document.createElement("div");
            div.innerHTML = newsDetail;
            div.className = "homeNewsCont";
            homeNewsSec.append(div);
        })
        .catch(err=>console.log)
}

function fetchCategory(event){
    let clicked = event.target
    let category = clicked.innerHTML;
    let categoryEle = clicked.outerHTML;
    console.log(categoryEle)
    localStorage.setItem("category",JSON.stringify(category));
    localStorage.setItem("categoryEle",JSON.stringify(categoryEle));
    location.href = "category.html";
    console.log(category);
}

function searchText(){
    let search = document.getElementById("search");
    let value = search.value;
    localStorage.setItem("search",JSON.stringify(value));
    location.href = "searchresult.html";
    console.log(value)
}

function hamburger(){
        let hamburgerMenuSec = document.getElementById("hamburgerMenuSec");
        let hamX = document.getElementById("hamX");
        let hamburger = document.getElementById("hamburger");
        if(hamburgerMenuSec.style.width != "300px"){
            hamburgerMenuSec.style.width = "300px";
            hamX.style.display = "block";
            hamburger.style.display = "none";
        }
        else{
            hamburgerMenuSec.style.width = "0px";
            hamX.style.display = "none";
            hamburger.style.display = "block";
        }
        hamX.onclick = function(){
            hamburgerMenuSec.style.width = "0px";
            hamX.style.display = "none";
            hamburger.style.display = "block";
        }
}
Promise.all([
    homeNewsIndia(),
    homeNewsNewZealand(),
    homeNewsRussia(),
    homeNewsUs(),
    fetchCategory()
])







// window.onload = () =>{
//     fetchHomePageNews();
// }


// FETCHING ALL API AT ONCE WITH Promise.ALL

// const indiaHeadline = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e10ee72c3c43400b9d34eb974d2666bf";
// const usaHeadline = "https://newsapi.org/v2/top-headlines?country=us&apiKey=e10ee72c3c43400b9d34eb974d2666bf";
// const russiaHeadline = "https://newsapi.org/v2/top-headlines?country=ru&apiKey=e10ee72c3c43400b9d34eb974d2666bf";
// const newZealandHeadline = "https://newsapi.org/v2/top-headlines?country=nz&apiKey=e10ee72c3c43400b9d34eb974d2666bf";



// Promise.all([
//     fetch(indiaHeadline)
//     .then(res=>res.json()),

//     fetch(usaHeadline)
//     .then(res=>res.json()),

//     fetch(russiaHeadline)
//     .then(res=>res.json()),

//     fetch(newZealandHeadline)
//     .then(res=>res.json()),

//     ])
// .then((res)=>{
//     const newsArr = res;
//         // console.dir(newsArr)
//     newsArr.forEach((ele)=>{
//         let newsAll = ele.articles;
//         newsAll.forEach((newsGet)=>{
//             const newsHTML = newsAll.map((newsGet)=>{
//                 console.log(newsGet)
//                 return`
//                     <div class="homeNews" id="${newsGet.urlToImage}" style="background-image: url(${newsGet.urlToImage});">
//                         <div class="newsDetailCont">
//                             <div class="newsDetail">
//                                 <a href="${newsGet.url}" target="_self">
//                                     <button class="readMore">Read More</button>
//                                 </a>                                    
//                                 <p class="publishDate">${newsGet.publishedAt}</p>
//                             </div>
//                             <div class="title">
//                                 <p>${newsGet.title}</p>
//                             </div>
//                         </div>
//                     </div>
//                 `
//                 // // console.log(newsDetail)
                
//             }).join("");
//             const homeNewsSec = document.getElementById("homeNewsSec");
//                 const div = document.createElement("div");
//                 div.innerHTML = newsHTML;
//                 div.className = "homeNewsCont";
//                 homeNewsSec.append(div);
//         })
//     })        
// })

