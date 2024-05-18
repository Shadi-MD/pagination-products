const $ = document;

const listItems = [
  { id: 1, name: "Postal Cart- Thank you ", price: "" },
  { id: 2, name: "Postal Cart- Happy Birthday", price: "" },
  { id: 3, name: "Postal Cart- Happy New Year", price: "" },
  { id: 4, name: "Ruler", price: "" },
  { id: 5, name: "Marker", price: "" },

  { id: 6, name: "Notebook", price: "" },
  { id: 7, name: "PencilCase", price: "" },
  { id: 8, name: "BackPack", price: "" },
  { id: 9, name: "Book", price: "" },
  { id: 10, name: "Sticker Note", price: "" },

  { id: 11, name: "Toy", price: "" },
  { id: 12, name: "Earaser", price: "" },
  { id: 13, name: "A4 Paper", price: "" },
  { id: 14, name: "Red Pen", price: "" },
  { id: 15, name: "Blue Pen ", price: "" },

  { id: 16, name: "Black Pen", price: "" },
  { id: 17, name: "Green Pen", price: "" },
  { id: 18, name: "Pink Pen", price: "" },
  { id: 19, name: "Black Pencil", price: "" },
  { id: 20, name: "Blue Pencil", price: "" },

  { id: 21, name: "Green Pencil", price: "" },
  { id: 22, name: "Pink Pencil", price: "" },
];

let productListContainer = $.querySelector("#list");
let pageNumberContainer = $.querySelector("#pagination");
let selectElem = $.querySelector("#rowSelection");

let currentPage;
let rowNumber;

function showProductList(
  allProductArray,
  productContainer,
  rowNumber,
  currentPage
) {
  productContainer.innerHTML = "";

  rowNumber = selectElem.value;

  let endIndex = rowNumber * currentPage;
  let startIndex = endIndex - rowNumber;

  let productsInEachPage = allProductArray.slice(startIndex, endIndex);

  productsInEachPage.forEach(function (item) {
    let newProductDiv = $.createElement("div");
    newProductDiv.innerHTML = item.name + " " + item.price;
    newProductDiv.classList.add("item");

    productListContainer.appendChild(newProductDiv);
  });
}

function setupBoxNumber(allProductArray, pagesContainer, rowNumber) {
  pagesContainer.innerHTML = "";
  rowNumber = selectElem.value;

  let numberOfPage = Math.ceil(allProductArray.length / rowNumber);

  for (i = 1; i < numberOfPage + 1; i++) {
    let btn = pageNumberBoxGeneration(i, allProductArray);
    pagesContainer.appendChild(btn);
  }
}

function pageNumberBoxGeneration(page, allProductArray) {
  let button = $.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
    showProductList;
  }

  button.addEventListener("click", function () {
    currentPage = page;

    showProductList(
      allProductArray,
      productListContainer,
      rowNumber,
      currentPage
    );

    let previousPage = $.querySelector("button.active");
    previousPage.classList.remove("active");
    button.classList.add("active");
  });

  return button;
}

showProductList(listItems, productListContainer, rowNumber, currentPage);
setupBoxNumber(listItems, pageNumberContainer, rowNumber);

window.addEventListener("load", function () {
  currentPage = 1;
  rowNumber = 4;
  showProductList(listItems, productListContainer, rowNumber, currentPage);
  setupBoxNumber(listItems, pageNumberContainer, rowNumber);
});
selectElem.addEventListener("change", function () {
  currentPage = 1;
  showProductList(listItems, productListContainer, rowNumber, currentPage);
  setupBoxNumber(listItems, pageNumberContainer, rowNumber);
});
