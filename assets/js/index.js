const data = [
    {
        "logo": "./assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "./assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "./assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
]
function InitialiserCard(){
    let refContainer = document.getElementById("card-container");
    refContainer.innerHTML = '';
    for (datas of data){
        let refCard = document.createElement('div');
        refCard.className = 'card';
        if (datas.isActive){
            refCard.innerHTML = `
            <div class="card-inner">
            <img src="${datas.logo}" alt="${datas.name} icon" class='icon'>
            <div class="card-content">
                <h3>${datas.name}</h3>
                <p>${datas.description}</p><br><br>
                <button class='remove-btn'>Remove</button>
                <label class= 'switch'>
                <input type= 'checkbox' checked>
                <span class = 'slider round'></span>
                </label>
            </div>
            </div>`;
        }
        else{
            refCard.innerHTML = `
            <div class="card-inner">
            <img src="${datas.logo}" alt="${datas.name} icon" class='icon'>
            <div class="card-content">
                <h3>${datas.name}</h3>
                <p>${datas.description}</p><br><br>
                <button class='remove-btn'>Remove</button>
                <label class= 'switch'>
                <input type= 'checkbox'>
                <span class = 'slider round'></span>
                </label>
            </div>
            </div>`;
        }
        console.log(datas);
        console.log('initialiser');
        refContainer.appendChild(refCard);
    }
}
function filtresActive(){
    let refContainer = document.getElementById("card-container");
    refContainer.innerHTML = '';
    for (datas of data){
        let refCard = document.createElement('div');
        refCard.className = 'card';
        if (datas.isActive){
            refCard.innerHTML = `
            <div class="card-inner">
            <img src="${datas.logo}" alt="${datas.name} icon" class='icon'>
            <div class="card-content">
                <h3>${datas.name}</h3>
                <p>${datas.description}</p><br><br>
                <button class='remove-btn'>Remove</button>
                <label class= 'switch'>
                <input type= 'checkbox' checked>
                <span class = 'slider round'></span>
                </label>
            </div>
            </div>`;
            refContainer.appendChild(refCard);
        }
         console.log(datas);
            console.log('active');
        
    }
}
function filtresInactive(){
    let refContainer = document.getElementById("card-container");
    refContainer.innerHTML = '';
    for (datas of data){
        let refCard = document.createElement('div');
        refCard.className = 'card';
        if (!(datas.isActive)){
            refCard.innerHTML = `
            <div class="card-inner">
            <img src="${datas.logo}" alt="${datas.name} icon" class='icon'>
            <div class="card-content">
                <h3>${datas.name}</h3>
                <p>${datas.description}</p><br><br>
                <button class='remove-btn'>Remove</button>
                <label class= 'switch'>
                <input type= 'checkbox'>
                <span class = 'slider round'></span>
                </label>
            </div>
            </div>`;
            refContainer.appendChild(refCard);
        }
        console.log(datas);
        console.log('inactive');
      
    }
}
function changementCouleur(){
    let isLightMode = document.body.classList.contains('lightmode');
    if (isLightMode) {
        document.body.classList.remove('lightmode');
    } else {
        document.body.classList.add('lightmode');
    }
}
InitialiserCard();
document.getElementById('btn-all').addEventListener('click', InitialiserCard);
document.getElementById('btn-active').addEventListener('click', filtresActive);
document.getElementById('btn-inactive').addEventListener('click', filtresInactive);
document.getElementById('theme-switch').addEventListener('click',changementCouleur);

