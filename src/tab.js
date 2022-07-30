const tabs = (() => {
    let heading = () => {
            let contentDiv = document.querySelector("#content");
            let heading = document.createElement("h1");
            heading.textContent = "Resturant Page";
            contentDiv.appendChild(heading);
    };

    let createTab = () => {
        let contentDiv = document.querySelector("#content");
        let tabs = document.createElement("div");
        tabs.classList.add("tabs");
        contentDiv.appendChild(tabs);
    };

    let appendDish = (str) => {
        let tabDiv = document.querySelector(".tabs");
        let heading = document.createElement("h4");
        heading.textContent = str;
        heading.classList.add("dishes");
        tabDiv.appendChild(heading);
    };

    let dishDiv = () =>{
        let contentDiv = document.querySelector("#content");
        let dishDiv = document.createElement("div");
        dishDiv.classList.add("dish");
        contentDiv.appendChild(dishDiv);
    };

    let dishText = (str) =>{
        let dishDiv = document.querySelector(".dish");
        let newPara = document.createElement("p");
        newPara.textContent = str;
        dishDiv.appendChild(newPara);
    }

    return {
        createTab,
        appendDish,
        heading,
        dishDiv,
        dishText
    }
})();

tabs.heading();
tabs.createTab();
tabs.appendDish("Biryani");
tabs.appendDish("Pulao");
tabs.appendDish("Aloo Matar");
tabs.dishDiv();

export default tabs;