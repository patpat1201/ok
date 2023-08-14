function displayProductModal(shoe) {
    // Cập nhật thông tin trong modal box
    var modalTitle = document.getElementById("Modal_Name");
    modalTitle.innerText = shoe.name;

    var productImage = document.getElementById("productImage");
    productImage.src = shoe.image;

    var productPrice = document.getElementById("productPrice");
    productPrice.innerText = shoe.price;

    // Hiển thị modal box
    var modal = new bootstrap.Modal(document.getElementById("Modal_detail"));
    modal.show();
}


function ProductModal_Details(shoe) {

    var productDecription = document.getElementById("productDescription_modaltetail");
    productDecription.innerText = shoe.description;

    // Hiển thị modal box
    var modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
}



















