<div class="header">
    <ul style="line-height: 80px;color: beige;" class="change">
        <i class="ti-github" style="margin-left: 30px;font-size: 30px;"></i>
        <li style="display: inline-block;font-size: 30px;margin-left: 5px;">D Shop</li>
        <li style="display: inline-block;font-size: 20px;margin-left: 260px;" class="trangchu"><a href="./homepage.php">Trang Chủ</a></li>
        <li style="display: inline-block;font-size: 20px;margin-left: 20px;"><a href="./introduce_page.php">Giới Thiệu</a></li>
        <li style="display: inline-block;font-size: 20px;margin-left: 20px;"><a href="./contact.php">Liên Hệ</a></li>
        <li style="display: inline-block;font-size: 20px;margin-left: 20px;"><a href="./newpage.php">Tin Tức</a></li>
        <li style="display: inline-block;font-size: 20px;margin-left: 20px;"><a href="./login.php">Tài Khoản</a></li>
        <div style="margin-top: -80px;margin-left: 1100px;" onclick="showProductModal()">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                Giỏ hàng
            </button>
        </div>
        <div style="margin-top: -80px;margin-left: 1250px;" onclick="search()">
            <i class="ti-search" style="cursor: pointer;"></i>
        </div>
    </ul>
    <nav class="navbar navbar-light bg-light" style="display: none;" id="search">
        <form class="form-inline d-flex justify-content-center" style="text-align: center; margin-left: auto;">
            <input class="form-control mr-sm-2" id="searchInput" oninput="searchProducts()" type="search" placeholder="Search" aria-label="Search" style="width: 300px;">
            <button class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
        </form>
    </nav>
</div>

<script src="./pagination.js"></script>
<script src="./search.js"></script>