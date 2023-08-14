// Mảng chứa thông tin sản phẩm giày
var shoes = [
    { name: "Nike Waffle Debut SE", price: 2189000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/147e26bc-b1a6-479f-92a4-74cbfe69af2f/waffle-debut-se-shoes-4xw1dJ.png", description: "Description of Product 1", },
    { name: "Nike Air Force 1'07 LV8", price: 3519000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/441f9c14-6b81-43b1-a670-fc77d1317de2/air-force-1-07-lv8-shoes-pBxkmz.png", description: "Description of Product 2", },
    { name: "Nike Pegasus 40 Premium", price: 4109000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f52549ad-24d9-4c23-98fa-7052c11e47bc/pegasus-40-road-running-shoes-50CtF7.png", description: "Description of Product 3", },
    { name: "Nike Air Huarache Runner", price: 4699000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/30b20b8a-a181-4fe6-b120-eda4f032e1c2/air-huarache-runner-shoes-3P3tlN.png", description: "Description of Product 4", },
    { name: "Nike Air Pulse", price: 4409000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d858287a-d718-482e-804b-3bff435113d5/air-max-pulse-shoes-QShhG8.png", description: "Description of Product 5", },
    { name: "Nike Air Traniner 1", price: 3829000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/96a139be-2faa-463b-b3ce-04547c58b0cd/air-trainer-1-shoes-PHFK5z.png", description: "Description of Product 6", },
    { name: "Nike Air Huarache Runner", price: 4109000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a414cb3e-e04b-49f4-bff3-2552f490273b/air-huarache-runner-shoes-6gNJ0g.png", description: "Description of Product 7", },
    { name: "Nike Air Max Solo", price: 2929000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/abf1df44-8d47-410f-b17b-0d27cbe27a43/air-max-solo-shoes-qVq5jJ.png", description: "Description of Product 1", },
    { name: "Nike Air Max 90", price: 3519000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/air-max-90-shoes-mnCmVT.png", description: "Description of Product 8", },
    { name: "Nike Go FlyEase", price: 3829000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fbff7ca9-5774-44cb-afe3-2ed09caab851/go-flyease-easy-on-off-shoes-3svRCL.png", description: "Description of Product 9", },
    { name: "Nike SB Force 58", price: 2189000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/db7c14f3-adbe-4eee-9534-d372808ce154/sb-force-58-skate-shoes-LJNW5L.png", description: "Description of Product 10", },
    { name: "Nike ACG Mountain Fly 2 Flow", price: 4409000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/111d0ca2-3735-4968-8d5c-8bd790c95044/acg-mountain-fly-2-low-shoes-4LXRfM.png", description: "Description of Product 11", },
    { name: "Sustainable Materials", price: 6179000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6ff6e596-2f93-47f8-98a4-611de407bffb/air-vapormax-2023-flyknit-shoes-xjVzw5.png", description: "Description of Product 12" },
    { name: "Nike Air Max 90", price: 3519000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e9e94e99-b4d1-4e0a-a1a3-419776037b49/air-max-90-shoes-kRsBnD.png", description: "Description of Product 13", },
    { name: "Nike Defy All Day", price: 1909000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e15e69f-31a6-4230-832d-99130b5993fc/defy-all-day-training-shoe-LtD2G1.png", description: "Description of Product 14", },
    { name: "Nike ACG Watercat +", price: 3669000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e816f5b1-9eb5-488e-9fc4-2218cc535d4d/acg-watercat-shoes-7cM7vc.png", description: "Description of Product 15", },
    { name: "Sustainable Materials", price: 2069000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0d34407f-1323-4121-992d-14ed80519ddc/oneonta-next-nature-sandals-KwxRDD.png", description: "Description of Product 16" },
    { name: "Nike Air Max Cirro", price: 1479000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dff5a9c4-8185-4ee2-8901-f6252ddb5d2a/air-max-cirro-slides-96vclH.png", description: "Description of Product 17", },
    { name: "Sustainable Materials", price: 1909000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/52734d67-0bef-4179-9e1d-6694995bcee0/downshifter-12-road-running-shoes-kQLnZn.png", description: "Description of Product 18", },
    { name: "Nike Air Max Plus 3", price: 5589000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4162cdef-ed2d-4dff-b777-e5afed5c4bd3/air-max-plus-3-shoes-m3bzP8.png", description: "Description of Product 19", },
    { name: "Nike Free Metcon 5", price: 3519000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f3e603c4-2761-4f10-bd03-25b8d47ee618/free-metcon-5-training-shoes-7wNZNf.png", description: "Description of Product 20", },
    { name: "LeBron XX EP", price: 6179000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/965fc8b1-3963-404c-9a7b-639a843b0477/lebron-xx-ep-basketball-shoes-L515ld.png", description: "Description of Product 21", },
    { name: "Nike Air Max 90", price: 23123213, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6bf958e3-aa90-4666-921a-69aee171884b/air-max-90-shoes-58SknF.png", description: "Description of Product 22", },
    { name: "Nike Air Max 95", price: 2189000, image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/208ac031-f5de-44ed-9843-f96290d8a9fe/air-max-95-shoes-DWVbzZ.png", description: "Description of Product 23", },
];







