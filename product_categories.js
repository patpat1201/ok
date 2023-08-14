// Get the "suggestionsList" element
// var suggestionsList = document.getElementById('suggestionsList');

// Function to filter products based on category
function filterProducts(category) {
    // Clear the existing content in the suggestionsList
    suggestionsList.innerHTML = '';

    // Iterate through the shoes array and create elements for each product matching the selected category
    for (var i = 0; i < shoes.length; i++) {
        if (shoes[i].name.toLowerCase().includes(category.toLowerCase())) {
            var listItem = document.createElement("div");
            listItem.classList.add("product-item", shoes[i].name.toLowerCase().replace(/ /g, '-'));

            var image = document.createElement("img");
            image.src = shoes[i].image;
            image.alt = shoes[i].name;
            image.style.maxWidth = '250px';
            image.style.maxHeight = '250px';
            image.onclick = (function (product) {
                return function () {
                    ProductModal_Details(product);
                };
            })(shoes[i]);

            var productInfo = document.createElement("div");
            productInfo.classList.add("product-info");

            var productName = document.createElement("p");
            productName.classList.add("product-name");
            productName.innerText = shoes[i].name;

            var productPrice = document.createElement("p");
            productPrice.classList.add("product-price");
            productPrice.innerText = "Giá: $" + shoes[i].price;

            var addToCartButton = document.createElement("button");
            addToCartButton.classList.add("add-to-cart");
            addToCartButton.innerText = "Thêm vào giỏ hàng";
            addToCartButton.onclick = (function (product) {
                return function () {
                    displayProductModal(product);
                };
            })(shoes[i]);

            productInfo.appendChild(productName);
            productInfo.appendChild(productPrice);

            listItem.appendChild(image);
            listItem.appendChild(productInfo);
            listItem.appendChild(addToCartButton);

            suggestionsList.appendChild(listItem);
        }
    }
}