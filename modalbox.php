<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./cart.css">
    <link rel="stylesheet" href="./modal_detail.css">
</head>

<body>
    <main>
        <!-- Modal -->
        <div class="modal fade" id="Modal_detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class=" modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalTitle"></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img id="productImage" src="" style="max-width: 100px; max-height: 100px;" alt="Product Image">
                        <i id="Modal_Name" style="display: inline-block; margin-left: 10px;"></i>
                        <b><i id="productPrice" style="display: inline-block; margin-left: 5px;"></i></b>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="addToCart()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal_Cart -->
        <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" style="max-width: 700px;" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- Container chứa bảng giỏ hàng -->
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody id="cartList">
                                <!-- Các sản phẩm trong giỏ hàng sẽ được hiển thị ở đây -->
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <b style="width: 50%;"><i id="totalPrice">Tổng tiền: $00.00</i></b>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="confirm_alert()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal chi tiết sản phẩm -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class=" modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalTitle"></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <p id="productDescription_modaltetail" style="display: inline-block;"></p> <!-- Thêm phần mô tả sản phẩm -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="addToCart()">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

</html>