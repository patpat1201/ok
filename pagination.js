var itemsPerPage = 8;
var currentPage = 1;


function displayProductsPerPage(pageNumber) {
    currentPage = pageNumber;

    var startIndex, endIndex;
    if (currentPage === 0) {
        // Display all products if pageNumber is 0
        startIndex = 0;
        endIndex = shoes.length;
    } else {
        startIndex = (currentPage - 1) * itemsPerPage;
        endIndex = startIndex + itemsPerPage;
    }

    var currentProducts = shoes.slice(startIndex, endIndex);

    var suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = '';

    for (var i = 0; i < currentProducts.length; i++) {
        var listItem = document.createElement("li");
        listItem.classList.add("visible");

        var image = document.createElement("img");
        image.src = currentProducts[i].image;
        image.alt = currentProducts[i].name;
        image.style.maxWidth = '250px';
        image.style.maxHeight = '250px';
        image.onclick = (function (product) {
            return function () {
                ProductModal_Details(product);
            };
        })(currentProducts[i]);

        var productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        var productName = document.createElement("p");
        productName.classList.add("product-name");
        productName.innerText = currentProducts[i].name;

        var productPrice = document.createElement("p");
        productPrice.classList.add("product-price");
        productPrice.innerText = "Giá: $" + currentProducts[i].price;

        var addToCartButton = document.createElement("button");
        addToCartButton.classList.add("add-to-cart");
        addToCartButton.innerText = "Thêm vào giỏ hàng";
        addToCartButton.onclick = (function (product) {
            return function () {
                displayProductModal(product);
            };
        })(currentProducts[i]);

        productInfo.appendChild(productName);
        productInfo.appendChild(productPrice);

        listItem.appendChild(image);
        listItem.appendChild(productInfo);
        listItem.appendChild(addToCartButton);

        suggestionsList.appendChild(listItem);
    }
}

function renderPagination() {
    var totalPages = Math.ceil(shoes.length / itemsPerPage);
    var pagination = document.getElementById('pagination_Page');
    pagination.innerHTML = '';

    for (var i = 1; i <= totalPages; i++) {
        var pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        pageItem.dataset.page = i;

        var pageLink = document.createElement('a');
        pageLink.classList.add('page-link');
        pageLink.href = '#';
        pageLink.innerText = i;

        pageLink.onclick = function () {
            var pageNumber = parseInt(this.parentNode.dataset.page);
            displayProductsPerPage(pageNumber); // Display products for the clicked page
        };

        pageItem.appendChild(pageLink);
        pagination.appendChild(pageItem);
    }

    // Display all products initially when the pagination is rendered
    displayProductsPerPage(0);
}

function previousPage() {
    if (currentPage > 1) {
        displayProductsPerPage(currentPage - 1);
    }
}

function nextPage() {
    var totalPages = Math.ceil(shoes.length / itemsPerPage);
    if (currentPage < totalPages) {
        displayProductsPerPage(currentPage + 1);
    }
}


// Call renderPagination() to display the initial pagination links and products
renderPagination();





