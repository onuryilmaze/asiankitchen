const menu = [
    {
        id: 1,
        title: 'Bibimbap',
        category: 'korean',
        price: 12.99,
        img: "korean/bibimbap.jpg",
        desc: 'A bowl of warm white rice topped with vegetables, egg, and meat.'
    },
    {
        id: 2,
        title: 'Kimchi Jjigae',
        category: 'korean',
        price: 10.99,
        img: "korean/kimchi.jpg",
        desc: 'A spicy stew made with fermented kimchi, tofu, and pork.'
    },
    {
        id: 3,
        title: 'Tteokbokki',
        category: 'korean',
        price: 8.99,
        img: "korean/tteokbokki.jpg",
        desc: 'Stir-fried rice cakes with a spicy sauce.'
    },
    {
        id: 4,
        title: 'Japchae',
        category: 'korean',
        price: 11.99,
        img: "korean/japchae.jpg",
        desc: 'Sweet potato noodles stir-fried with vegetables and meat.'
    },
    {
        id: 5,
        title: 'Samgyeopsal',
        category: 'korean',
        price: 16.99,
        img: "korean/samgyeopsal.jpg",
        desc: 'Grilled pork belly served with fresh vegetables.'
    },
    {
        id: 6,
        title: 'Sushi',
        category: 'japanese',
        price: 14.99,
        img: "japanese/sushi.jpg",
        desc: 'Vinegared rice topped with raw fish and vegetables.'
    },
    {
        id: 7,
        title: 'Ramen',
        category: 'japanese',
        price: 13.99,
        img: "japanese/ramen.jpg",
        desc: 'Wheat noodles in a meat-based broth, topped with vegetables and eggs.'
    },
    {
        id: 8,
        title: 'Tempura',
        category: 'japanese',
        price: 12.99,
        img: "japanese/tempura.jpg",
        desc: 'Seafood and vegetables lightly battered and deep-fried.'
    },
    {
        id: 9,
        title: 'Okonomiyaki',
        category: 'japanese',
        price: 11.99,
        img: "japanese/okonomiyaki.jpg",
        desc: 'A savory pancake made with various ingredients.'
    },
    {
        id: 10,
        title: 'Miso Soup',
        category: 'japanese',
        price: 5.99,
        img: "japanese/miso.jpeg",
        desc: 'A traditional Japanese soup with tofu, seaweed, and fermented soybeans.'
    },
    {
        id: 11,
        title: 'Sweet and Sour Pork',
        category: 'chinese',
        price: 13.99,
        img: "chinese/pork.jpg",
        desc: 'Crispy pork stir-fried with pineapple and bell peppers in a sweet sauce.'
    },
    {
        id: 12,
        title: 'Kung Pao Chicken',
        category: 'chinese',
        price: 12.99,
        img: "chinese/kungpao.jpg",
        desc: 'A spicy stir-fry made with chicken, peanuts, and vegetables.'
    },
    {
        id: 13,
        title: 'Peking Duck',
        category: 'chinese',
        price: 22.99,
        img: "chinese/pekingduck.jpg",
        desc: 'Roast duck served with pancakes, cucumber, and hoisin sauce.'
    },
    {
        id: 14,
        title: 'Dim Sum',
        category: 'chinese',
        price: 10.99,
        img: "chinese/dimsum.jpg",
        desc: 'A variety of small dishes served with tea.'
    },
    {
        id: 15,
        title: 'Mapo Tofu',
        category: 'chinese',
        price: 11.99,
        img: "chinese/mapotofu.jpg",
        desc: 'A spicy Sichuan dish made with tofu and ground meat in a chili sauce.'
    }
];

const sectionCenter = document.querySelector('.menu-items-container');
const filterBtns = document.querySelectorAll('.filter-btn');

// Load items
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.category;
        const menuCategory = menu.filter(menuItem => {
            if (menuItem.category === category || category === 'all') {
                return menuItem;
            }
        });
        displayMenuItems(menuCategory);
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(item => {
        return `<article class="menu-item">
                    <img src=${item.img} alt=${item.title}>
                    <div class="item-info">
                        <h4>${item.title} <span class="price">$${item.price}</span></h4>
                        <p>${item.desc}</p>
                    </div>
                </article>`;
    }).join('');
    sectionCenter.innerHTML = displayMenu;
}
``
