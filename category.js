function fetchCategory(event){
    let clicked = event.target
    let category = clicked.innerHTML;
    localStorage.setItem("category",JSON.stringify(category));
    location.href = "category.html";
    let categoryEle = clicked;
    categoryEle.style.color = "red";
    console.log(clicked);
}
let ele = JSON.parse(localStorage.getItem("categoryEle"))
// ele.style.color = "red";
console.log(ele)

const categoryNews = () =>{
    // fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e10ee72c3c43400b9d34eb974d2666bf`)
    let category = JSON.parse(localStorage.getItem("category"));
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=cb01e4482103425fa0dd16ffb7f5c746`)
    .then(res=>res.json())
    .then((res)=>{
        const newsArr = res.articles;
        console.log(newsArr)
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

window.onload = function(){
    categoryNews();
    fetchCategory();
}