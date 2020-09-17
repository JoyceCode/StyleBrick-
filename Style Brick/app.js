const menu = [
  {
    id: 1,
    title: "MAPLE WAFFLE",
    category: "breakfast",
    price: 15.99,
    img: "./images/1.jpg",
    desc: `Come try our signature mapple waffle made with real mapple syrup farmed from nearby maple syrup farms!`,
  },
  {
    id: 2,
    title: "TWO CAN DINE",
    category: "lunch",
    price: 14.99,
    img: "./images/2.jpg",
    desc: `Have a partner to eat with? Try our Two Can Dine for only 14.99! `,
  },
  {
    id: 3,
    title: "SWEET HEAVEN SHAKE",
    category: "shakes",
    price: 6.99,
    img: "./images/3.jpg",
    desc: `Try our Sweet Heaven Shake guarantee to shake you! It's so sweet you can't help but smile!`,
  },
  {
    id: 4,
    title: "TASTE THE COUNTRYSIDE",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Wnat an authentic breakfast experience? This is a must try! `,
  },
  {
    id: 5,
    title: "CLASSIC BURGER",
    category: "lunch",
    price: 18.99,
    img: "./images/item-5.jpeg",
    desc: `This is the classic burger what more do you want us to say? Come try it! `,
  },
  {
    id: 6,
    title: "CHOCOLATE SHAKE",
    category: "shakes",
    price: 8.99,
    img: "./images/item-6.jpeg",
    desc: `For a limited time only try our Chocolate Shake for half the price!`,
  },
  {
    id: 7,
    title: "CHEESY BURGER DELIGHT",
    category: "breakfast",
    price: 18.99,
    img: "./images/item-7.jpeg",
    desc: `This is chef's personal favourite. Come taste happiness wrap up in a bun! `,
  },
  {
    id: 8,
    title: "LARGE BEEF BURGER WITH FRIES ",
    category: "lunch",
    price: 18.99,
    img: "./images/item-8.jpeg",
    desc: `This is our beef burger made with love~ With extra fries! Order this today!  `,
  },
  {
    id: 9,
    title: "DONUT HEAVEN",
    category: "shakes",
    price: 3.99,
    img: "./images/4.jpg",
    desc: `This donut won't dissappoint you! We swear on our goat we keep in the farm nextdoor. Visit Molly after you're done!`,
  },
  {
    id: 10,
    title: "STEAK OUT",
    category: "dinner",
    price: 31.99,
    img: "./images/item-10.jpeg",
    desc: `The steak is out! Try a classic dinner with us!`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
