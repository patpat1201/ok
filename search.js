// Assuming you have the 'shoes' array with product information

function initPage() {
    displayProductsPerPage(0); // Hiển thị tất cả sản phẩm ban đầu (pageNumber = 0)
}

// JavaScript
function searchProducts() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase(); // Convert search input to uppercase for case-insensitive search
    var ul = document.getElementById("suggestionsList");
    var li = ul.getElementsByClassName("visible");

    for (var i = 0; i < li.length; i++) {
        var productName = li[i].querySelector(".product-name");
        var txtValue = productName.innerText || productName.textContent;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block"; // Display product item if the product name contains the search keyword
        } else {
            li[i].style.display = "none"; // Hide product item if the product name does not contain the search keyword
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    initPage();
    var searchButton = document.querySelector("#search .btn");
    searchButton.addEventListener("click", searchProducts);
});

function search() {
    document.getElementById('search').style.display = 'block';
}

function closesearch_close() {
    document.getElementById('search').style.display = 'none';
}