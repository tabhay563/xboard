function accordionHtml(data, idx) {
    return `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button type="button" data-bs-toggle="collapse" id="button-accordion${idx}" 
                        data-bs-target="#panel${idx}" aria-controls="panel${idx}">
                    ${data.feed.title}
                </button>
            </h2>
            <div class="accordion-collapse collapse" id="panel${idx}">
                <div class="accordion-body">
                    ${data.feed.description}
                </div>
            </div>
        </div>
    `;
}

function generateAccordion(idx, data) {
    const accordionParent = document.querySelector("#accordionParent");

    const accordionItem = document.createElement("div");
    accordionItem.innerHTML = accordionHtml(data, idx);

    const btnEle = accordionItem.querySelector(`#button-accordion${idx}`);
    const divPanel = accordionItem.querySelector(`#panel${idx}`);

    idx === 0 ? btnEle.classList.add("accordion-button") : btnEle.classList.add("accordion-button", "collapsed");
    idx === 0 ? btnEle.setAttribute("aria-expanded", true) : btnEle.setAttribute("aria-expanded", false);
    idx === 0 ? divPanel.classList.add("show") : divPanel.classList.add("");

    accordionParent.append(accordionItem);
}

document.addEventListener("DOMContentLoaded", function() {
    magazineUrl();
});
