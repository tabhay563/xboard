const arr = [{name:"John",age:25,link: "https://images.unsplash.com/photo-1623607915241-a3151d59a9c8?auto=format&fit=crop&w=2148&q=80"},{name:"Jane",age:30,link: "https://cdn.pixabay.com/photo/2014/04/14/12/44/stadium-323795_1280.jpg"},{name:"Jim",age:28,link: "https://cdn.pixabay.com/photo/2016/09/09/04/43/manchester-united-1656122_1280.jpg"}];

for(let i=0; i<arr.length; i++){
    accordionHtml(arr,i)
    corousalHtml(arr,i)
}

function accordionHtml(arr,i){
        const parent = document.querySelector("#accordionParent");
        const divitem = document.createElement("div");
        divitem.classList.add("accordion-item");
        divitem.innerHTML =  `
        <h2 class="accordion-header">
        <button class="accordion-button ${i===0 ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#panel${i}" aria-expanded="${i===0 ? ' true' : 'false'}" aria-controls="panel${i}">
          ${arr[i].name}
        </button>
        </h2>
        <div id="panel${i}" class="accordion-collapse collapse ${i===0 ? "show" : ""}">
            <div class="accordion-body">
                  ${arr[i].age}
            </div>    
        </div>`
        parent.append(divitem);
    }
    
function corousalHtml(arr,i){
    const parent = document.querySelector("#parentCorousal");
    const divitem = document.createElement("div");

    divitem.innerHTML = `
        <div class="carousel-inner">
            <div class="carousel-item ${i===0 ? "active" : ""}">
                <img src="${arr[i].link}" class="d-block w-100" alt="...">
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
    `
    parent.append(divitem)
}

