async function magazineUrl(){
        try {
            for(let i=0; i < magazines.length; i++){
                const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url="+magazines[i]+"&api_key=dhlyynecsiwtpysmicmu8gtnqwdigmt8uhdutusb");
                if (!response.ok) {
                    throw new Error("Network response was not OK");
                  }
                const data = await response.json();
                console.log(data , i);
                accordionHtml(data,i);
                corousalHtml(data,i);
                
            }
        }catch (e) {
            console.log("There is problem in fetching data",e)
        }
}

function accordionHtml(data,i){
    const parent = document.querySelector("#accordionParent");
    const divitem = document.createElement("div");
    divitem.classList.add("accordion-item");
    divitem.innerHTML =  `
    <h2 class="accordion-header">
    <button class="accordion-button ${i===0 ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#panel${i}" aria-expanded="${i===0 ? ' true' : 'false'}" aria-controls="panel${i}">
      ${data.feed.title}
    </button>
    </h2>
    <div id="panel${i}" class="accordion-collapse collapse ${i===0 ? "show" : ""}">
        <div class="accordion-body">

        </div>
        `
        console.log(divitem)
        parent.append(divitem);
}
function corousalHtml(data,i){ 
    const parentEle = document.querySelector(".accordion-body");
    const divitem = document.createElement("div");

    divitem.innerHTML = `
        <div class="carousel-inner">
            <div class="carousel-item ${i===0 ? "active" : ""}">
                <div class="card" style="width: 18rem;">
                <img src="${data.items[i].enclosure.link}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5>${data.items[i].title}</h5>
                <p class="card-text">${data.items[i].description}</p>
                </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#parentCorousal" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#parentCorousal" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
        </div>    
        </div>
    `
    parentEle.append(divitem)
    console.log(divitem)
}

magazineUrl()
