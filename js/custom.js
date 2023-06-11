// Aos


AOS.init();

setTimeout(() => {
  $(".loading").fadeOut(1000);
}, 4000);

window.onload = function () {
  setTimeout(() => {
    $(".header-pages").addClass("active");
  }, 300);
};





$(".click-dropdown-mune").click(function (e1) {
  e1.preventDefault();
  $(".dropdowm-language-mune").slideToggle();
});

$(".language").click(function (e) {
  e.preventDefault();
  $(".dropdowm-language").slideToggle();
});
$(".language-footer a").click(function (e) {
  e.preventDefault();
  $(".dropdowm-language-f").slideToggle();
});

$(".cart-header").click(function (e) {
  e.preventDefault();
  $(".cart-index").toggleClass("active");
});

$(".delete-cart-index").click(function (e) {
  e.preventDefault();
  $(this).parents(".sub-product-cart-index").fadeOut();
});





//silder-prodect-details
if ($("#slider-product-details").length) {
  $("#slider-product-details").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    rtl: true,
    autoplay: false,
    dots: true,
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      1400: {
        item: 1,
      },
    },
  });
}











//silder-services
if ($("#slider-services").length) {
  $("#slider-services").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 4,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    autoplay: false,
    dots: false,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        smartSpeed: 400,

      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
}
//silder-partners
if ($("#slider-partners").length) {
  $("#slider-partners").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    items: 4,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    rtl: true,
    autoplay: false,
    dots: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,

        smartSpeed: 400,

      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
}

// start slider-related-products
if ($("#slider-related-products").length) {
  $("#slider-related-products").owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    items: 3,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    // rtl: true,
    autoplay: false,
    dots: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,

        smartSpeed: 400,

      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
}


// start siderimg-achievements 
if ($("#siderimg-achievements").length) {
  $("#siderimg-achievements").owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    items: 3,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    autoplay: false,
    dots: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,

        smartSpeed: 400,

      },
      700: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
}

$(".remove_mune").click(function () {
  $("#menu-div").removeClass("active");
  $(".bg_menu").removeClass("active");
});

function open() {
  $(".navicon").addClass("is-active");
  $("#menu-div").addClass("active");
  $("#times-ican").addClass("active");
  $("#times-icon2").addClass("active");
  $(".bg_menu").addClass("active");
}

function close() {
  $(".navicon").removeClass("is-active");
  $("#menu-div").removeClass("active");
  $("#times-ican").removeClass("active");
  $("#times-icon2").removeClass("active");
  $("#click-categories").removeClass("active");
  $(".bg_menu").removeClass("active");
  $(".dropdowm-language").slideUp();
  $(".dropdowm-language-f").slideUp();
  $(".main-categories-header").slideUp();
  $(".cart-index").removeClass("active");
  $(".main-categories-res").removeClass("active");
  $(".sub-categories-res").removeClass("active");

  $(".remove-mune").click(function () {
    $("#menu-div").removeClass("active");
    $(".bg_menu").removeClass("active");
    $(".times-ican").removeClass("active");
    $("#times-icon2").removeClass("active");
  });
}
$(".close-cart-index").click(function () {
  $(".cart-index").removeClass("active");
});
$("#times-ican").click(function () {
  if ($(this).hasClass("active")) {
    close();
  } else {
    open();
  }
});
$("#times-icon2").click(function () {
  if ($(this).hasClass("active")) {
    close();
  } else {
    open();
  }
});

$(".remove-mune").click(function () {
  $("#menu-div").removeClass("active");
  $(".bg_menu").removeClass("active");
  $("#times-ican").removeClass("active");
  $("#times-icon2").removeClass("active");
  $(".navicon").removeClass("is-active");
});

$("#menu-div a").click(function () {
  e.preventDefault();
});

var $winl = $(window); // or $box parent container
var $boxl = $(
  "#menu-div, #times-ican , #times-icon2 , .main-categories-res  ,.cart-index ,.cart-header, .language-footer a , .dropdowm-language , .dropdowm-language-f , #click-categories , .language , .main-categories-header , .click-element-mune , .dropdowm-element-mune"
);
$winl.on("click.Bst", function (event) {
  if (
    $boxl.has(event.target).length === 0 && //checks if descendants of $box was clicked
    !$boxl.is(event.target) //checks if the $box itself was clicked
  ) {
    close();
  }
});

// upload file ==============

$("#upload-1").change(function (e) {
  $(".upload-form p").text(e.target.files[0].name);
});

$(".click-dropdown").click(function (e) {
  e.preventDefault();
  $(".dropdowm-language").slideToggle();
});

// counter index
if ($(".counter").length) {
  var a = 0;
  $(window).scroll(function () {
    var oTop = $(".counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-number");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 2550,
            easing: "swing",
            step: function () {
              //$this.text(Math.ceil(this.countNum));
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
            },
            complete: function () {
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
  });

  const animationDuration = 4000;

  const frameDuration = 1000 / 60;

  const totalFrames = Math.round(animationDuration / frameDuration);

  const easeOutQuad = (t) => t * (2 - t);

  const animateCountUp = (el) => {
    let frame = 0;
    const countTo = parseInt(el.innerHTML, 10);

    const counter = setInterval(() => {
      frame++;

      const progress = easeOutQuad(frame / totalFrames);

      const currentCount = Math.round(countTo * progress);

      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount;
      }

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };

  const countupEls = document.querySelectorAll(".timer");
  countupEls.forEach(animateCountUp);

  $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      2100
    );
    $(this).text($(this).attr("data-progress") + "%");
  });
}
// ----------------------

// typing title
var txtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 5) || 200;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};
txtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  var that = this;
  var delta = 200 - Math.random() * 100;
  if (this.isDeleting) {
    delta /= 2;
  }
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function () {
    that.tick();
  }, delta);
};
window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new txtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};
// ===========================================


// categories
if (window.screen.width >= 992) {
  $("#click-categories").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).next().slideToggle();
  });
} else {
  document
    .getElementById("click-categories")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".main-categories-res").classList.toggle("active");
    });

  let clickCategories = document.querySelectorAll(".click-categories");

  clickCategories.forEach((ele) => {
    ele.addEventListener("click", function (e) {
      e.preventDefault();
      e.target.nextElementSibling.classList.toggle("active");
    });
  });
  let back = document.querySelectorAll("h2.back-categories");

  back.forEach((ele) => {
    ele.addEventListener("click", function (e) {
      e.preventDefault();
      e.target.parentElement.classList.remove("active");
    });
  });
}
// end categories





//  start click curriculum
$(".sub-curriculum > h2").click(function (e) {
  e.preventDefault();
  $(this).next().slideToggle();
  $(this).parents().toggleClass("active1")
})
// end click curriculum





$(".animated-progress span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    2000
  );

});



// delete cart page
$(".detete-prodect-cart").click(function(e) {
  e.preventDefault();
  $(this).parents(".table-cart tbody tr").fadeOut();
})