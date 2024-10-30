const loading = document.querySelector('.loading');

window.addEventListener('load', function(){
    setTimeout(() => {
        loading.classList.add('hide-loading');
    }, 3000);
});

//menu

const menu = [
    {
        id: 1,
        title: "Supreme Egg Sandwich",
        category: "breakfast",
        price: "IDR 24.000",
        img: "./menu-images/57fa8a86170000c316aca965.jpeg",
        desc: "Hello",
    },
    {
        id: 2,
        title: "Cheesy Volcano Burger",
        category: "lunch",
        price: "IDR 27.000",
        img: "./menu-images/burger-with-melted-cheese.webp",
        desc: "Hello",
    },
    {
        id: 3,
        title: "Curry Meal",
        category: "lunch",
        price: "IDR 30.000",
        img: "./menu-images/GettyImages-639389404-5c450e724cedfd00015b09d5.jpg",
        desc: "Hello",
    },
    {
        id: 4,
        title: "Pizza de Italiano",
        category: "lunch",
        price: "IDR 32.000",
        img: "./menu-images/pizza.jpeg",
        desc: "Hello",
    },
    {
        id: 5,
        title: "Scottish Breakfast",
        category: "breakfast",
        price: "IDR 26.000",
        img: "./menu-images/scot.jpeg",
        desc: "Hello",
    },
    {
        id: 6,
        title: "Hawaiian Delight",
        category: "drinks",
        price: "IDR 20.000",
        img: "./menu-images/hawaii.jpeg",
        desc: "Hello",
    },
    {
        id: 7,
        title: "Sweet Lemon Tea",
        category: "drinks",
        price: "IDR 24.000",
        img: "./menu-images/lemon.jpeg",
        desc: "Hello",
    },
    {
        id: 8,
        title: "Ice Cream Cake",
        category: "dessert",
        price: "IDR 22.000",
        img: "./menu-images/OIP.jpeg",
        desc: "Hello",
    },
    {
        id: 9,
        title: "Berry Pannacotta",
        category: "dessert",
        price: "IDR 21.000",
        img: "./menu-images/PannaCotta_RECIPE_04142022_9822_final.webp",
        desc: "Hello",
    },
]

const menuSection = document.querySelector(".menu-section");

const filters = document.querySelectorAll('.filter');

window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
})

filters.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItems){
            return menuItems.category === category;
        });
        if(category === 'all'){
            displayMenuItems(menu);
        }else{
            displayMenuItems(menuCategory)
        }
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `
            <article class="menu-item">
                <img src="${item.img}" class="photo" alt="${item.title}">
                <header>
                    <h4 class="title">${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                </header>
                <p class="description">${item.desc}</p>
            </article>
        `;
    });
    displayMenu = displayMenu.join("");
    menuSection.innerHTML = displayMenu;
}