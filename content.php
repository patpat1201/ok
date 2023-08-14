<div class="content" onclick="closesearch_close()">
    <div class="sanpham">
        <div id="suggestionsList"></div>



    </div>


    <!-- Phân loại sản phẩm theo tên -->
    <div class="card" style="width: 18rem; position: absolute; top: 100px; left: 30px;">
        <div class="card-header">
            Phân loại sản phẩm
        </div>
        <ul class="list-group list-group-flush" style="cursor: pointer;">
            <li class="list-group-item filter-item nike" onclick="filterProducts('nike')">Nike</li>
            <li class="list-group-item filter-item adidas" onclick="filterProducts('adidas')">Adidas</li>
            <li class="list-group-item filter-item puma" onclick="filterProducts('puma')">Puma</li>
            <li class="list-group-item filter-item convert" onclick="filterProducts('convert')">Convert</li>
        </ul>
    </div>
</div>


<div class="lookbook">
    <nav aria-label="Page navigation example" style="margin-top: 3100px; margin-left: 800px;">
        <ul class="pagination" id="pagination_Page">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>

    <div>
        <img id="img1" onclick="changelookbook()" src="https://intphcm.com/data/upload/poster-giay-sneaker.jpg" style="width: 100%;height: 500px;margin-top: 50px;">
    </div>
</div>
<script src="./cart.js"></script>
<script src="./pagination.js"></script>
<script src="./product_categories.js"></script>