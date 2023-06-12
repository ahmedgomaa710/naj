$("#add_to_cart").click(function () {
  let title = $(this).data("title"),
    img = $(this).data("img"),
    price = $(this).data("price"),
    discount = $(this).data("discount"),
    code = $(this).data("code"),
    data = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    id = Math.random();
  item = {
    id: id,
    img: img,
    title: title,
    price: price,
    discount: discount,
    code: code,
  };

  data.push(item);

  localStorage.setItem("cart", JSON.stringify(data));
  getCart();
});

function getCart() {
  let cart = JSON.parse(localStorage.getItem("cart")),
    data = [],
    data_cart_menu = [];
    console.log(localStorage.getItem("cart"));
  if (localStorage.getItem("cart") != null && localStorage.getItem("cart") != '[]') {
    let sub_total = 0;
    $.each(cart, (index, value) => {
      console.log(value);
      let discount = value.price - (value.price * value.discount) / 100;
      sub_total += discount;
      data.push(`<tr class="row-delete" data-id="${value.id}">
      <td>
          <a href="product-details.html">
              <div class="prodect-cart-page">
                  <div class="img-prodect-cart-page">
                      <img src="${value.img}" alt="">
                  </div>
                  <div class="text-prodect-cart-page">
                      <h3>${value.title}</h3>
                      <div class="rate">
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                      </div>
                  </div>
              </div>
          </a>
  
      </td>
      <td>
          <div class="code-product">${value.code}</div>
      </td>
      <td>
          <div class="price-product-cart">
              <h3>${discount}  SAR</h3>
              <span class="old-price">${value.price} SAR</span>
          </div>
      </td>
      <td>
          <div class="detete-prodect-cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                  fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>
          </div>
      </td>
  </tr>`);
      data_cart_menu.push(`<li class="sub-product-cart-index">
      <a href="">
          <div class="img-product-cart-index">
              <img src="images/p3.png" alt="">
          </div>
          <div class="text-product-cart-index">
              <h2>Anterior Direct Esthetic
                  Restorations </h2>
              <p> It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout ..</p>
              <span> 2200 </span>
          </div>
      </a>
      <div class="delete-cart-index">
          <img src="images/trach.png" alt="">
      </div>
  </li>`);
    });

    $("#sub_total").text(sub_total);
    $("#total").text(sub_total);
    $("#all-items").html(data);
    $("#all-items-menu").html(data_cart_menu);
  } else {
    $('#cart-page').html(`
    <div class="cart_empty">
        <div class="img-cart_empty">
            <img src="images/empty.png" alt="">
        </div>
        <h2> No products found </h2>
    </div>
    `)
  }
}

getCart();

$(document).on("click", ".detete-prodect-cart", function (e) {
  e.preventDefault();
  let id = $(this).closest(".row-delete").data("id");
  console.log(id);
  $(this).parents(".table-cart tbody tr").fadeOut();
  let cart = JSON.parse(localStorage.getItem("cart")),
    filtered = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(filtered));
  getCart();
});
