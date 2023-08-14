// Thêm sự kiện khi click vào nút "Thêm vào giỏ hàng" trong modal box
function addToCart() {
    var modalTitle = document.getElementById("Modal_Name").innerText;
    var productImage = document.getElementById("productImage").src;
    var productPrice = document.getElementById("productPrice").innerText;


    // Tạo một hàng mới cho sản phẩm trong bảng giỏ hàng
    var cartRow = document.createElement("tr");

    // Thêm cột cho tên sản phẩm
    var productNameCell = document.createElement("td");
    productNameCell.innerHTML = `<img src="${productImage}" alt="Product Image" style="max-width: 100px; max-height: 100px;"> ${modalTitle}`;
    cartRow.appendChild(productNameCell);

    // Thêm cột cho giá sản phẩm
    var productPriceCell = document.createElement("td");
    productPriceCell.innerText = productPrice;
    productPriceCell.classList.add("center-text"); // Thêm class mới để căn giữa nội dung trong ô
    cartRow.appendChild(productPriceCell);

    // Thêm cột cho nút "Xóa"
    var deleteButtonCell = document.createElement("td");
    deleteButtonCell.classList.add("center-text", "align-middle"); // Thêm class để căn giữa nội dung và căn giữa nút
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Xóa";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.setAttribute("onclick", "deleteCartItem(this)");
    deleteButtonCell.appendChild(deleteButton);
    cartRow.appendChild(deleteButtonCell);

    alert("Sản phẩm đã được thêm vào giỏ hàng");

    // Thêm hàng vào bảng giỏ hàng
    var cartList = document.getElementById("cartList");
    cartList.appendChild(cartRow);

    // Cập nhật tổng tiền
    updateTotalPrice();
}


// Hàm xóa hàng khi nhấp nút "Xóa"
function deleteCartItem(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // Cập nhật tổng tiền sau khi xóa
    updateTotalPrice();
}

// Hàm tính tổng tiền và cập nhật vào modal
function updateTotalPrice() {
    var totalPrice = 0;
    var cartList = document.getElementById("cartList");
    var rows = cartList.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        var priceCell = rows[i].getElementsByTagName("td")[1];
        var price = parseInt(priceCell.innerText.replace("$", ""));
        totalPrice += price;
    }

    var totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.innerText = "Total: " + totalPrice + " VND";
}
function confirm_alert() {
    alert("Thanh toán thành công ! Cảm ơn bạn mua sản phẩm");
}