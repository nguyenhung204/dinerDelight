function showLoading() {
  let element = document.getElementById("loading-panel");
    if (element) {
        element.classList.remove("hidden");
    }
}
function hideLoading() {
    let element = document.getElementById("loading-panel");
        if (element) {
            element.classList.add("hidden");
        }
    }
 function renderLoading() {
    showLoading();
    setTimeout(hideLoading, 1500);
}
renderLoading();



function renderNavBar() {
  const navBarStr = `
    <div class="wrapper">
    <div class="absolute-menu" id="absolute-menu">
      <div class="close-icon" id="close-icon">
       <i class="fa-solid fa-2xl fa-xmark"></i>
      </div>
      <div class="abs-menu-list" id="abs-menu-list">
        <a
          href="../../pages/menu/index.html"
          class="abs-menu-item abs-to-sub-item"
          id="abs-to-sub-item"
        >
          <div class="abs-item-name">
            <div class="item-title-name">
              <p class="abs-i-name">Thực Đơn</p>
            </div>
          </div>
        </a>
    
        <a href="../../pages/sale/index.html" class="abs-menu-item">
          <p class="abs-i-name">Ưu đãi</p>
        </a>
        <a href="../../pages/table/index.html" class="abs-menu-item">
          <p class="abs-i-name">Đặt bàn</p>
        </a>
        <a href="https://gdeli.vn/brand/7" class="abs-menu-item">
          <p class="abs-i-name">Giao hàng</p>
        </a>
        <a href="../../pages/home/index.html" class="abs-menu-item">
          <p class="abs-i-name">Về chúng tôi</p>
        </a>
      </div>
    </div>
    <!--  -->
    <nav class="navigation">
      <div class="nav-list">
      <a class="nav-list" href="../../pages/home/index.html"><img src="../../assets/hunglogo.png" alt="image" class="logo"/></a>
      </div>
      <div class="menu-list" id="menu-list">
        <a href="../../pages/sale/index.html" class="menu-item"> <p class="i-name">Ưu đãi</p></a>
        <a href="../../pages/menu/index.html" class="menu-item"> <p class="i-name">Thực đơn</p> </a>
        <a href="../../pages/table/index.html" class="menu-item"> <p class="i-name">Đặt đàn</p> </a>
        <a href="../../pages/login/index.html" class="menu-item"> <p class="i-name">Đăng nhập</p> </a>
      </div>
        <div class="toggle-nav" id="toggle-nav">
          <i class="fa-solid fa-bars fa-xl"></i>
        </div>
      </div>
    </nav>
    <!-- body -->
  </div>
    `;

  const header = document.getElementById("header");
  if (header) {
    header.innerHTML = navBarStr;
  }
}
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.js';
document.head.appendChild(script);
script.onload = function () {
  $(document).ready(() => {
    let isClicked = false;
    $("#abs-to-sub-item").click(() => {
      isClicked = !isClicked;
      console.log("Clicked")
      if (isClicked) {
        $("#ar-left").show();
        $("#ar-right").hide();
        $("#sub-menu-list").show();
      } else {
        $("#ar-left").hide();
        $("#ar-right").show();
        $("#sub-menu-list").hide();
      }
    })

    $("#close-icon").click(() => {
      console.log("Clicked icon")
      $("#absolute-menu").css("display", "none");
    })
    $("#toggle-nav").click(() => {
      console.log("Clicked icon")
      $("#absolute-menu").css("display", "flex");
    })
  })
}

function renderMenu() {
  const menuStr = `
    <div class="container-fluid">
        <div class="row d-flex d-md-block flex-nowrap wrapper">
            <div class="col-md-3 col-1 pl-0 pr-0 collapse width show" id="sidebar">
                    <div class="list-group border-0 card text-center text-md-left">
                    <a href="#menu1" class="list-group-item d-inline-block collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false">
            
                         <span class="d-none d-md-inline ">MENU</span> </i> </a>
                    <div class="collapse" id="menu1">
                        <li  href="#" class="list-group-item" id ="starter" data-parent="#menu1">Khai Vị</li>
                        <li href="#" class="list-group-item" id ="beef" data-parent="#menu1">Thịt Bò</li>
                        <li href="#" class="list-group-item" id ="pork" data-parent="#menu1">Thịt Heo</li>
                        <li href="#" class="list-group-item" id ="seaFood" data-parent="#menu1">Hải Sản</li>
                        <li href="#" class="list-group-item" id ="dessert" data-parent="#menu1">Tráng Miệng</li>
                        <li href="#" class="list-group-item" id ="wine" data-parent="#menu1">Rượu Vang</li>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </div>
    `;

  const menu = document.getElementById("food-menu");
  if (menu) {
    menu.innerHTML = menuStr;
  }


}
function footer() {
  const footerStr = ` <footer class="footer">
        <div class="footer__content">
            <div class="footer__content--l">
                <p class="f-top">CÔNG TY CỔ PHẦN TẬP ĐOÀN GOLDEN GATE</p>
                <p class="f-bottom">Trụ sở chính: 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành Phố Hồ Chí Minh <br>
                    GPĐK: 0102721242 cấp ngày 01/01/20024 <br>
                    ĐT:0962 394 267 Email:dinerDelight@gmail.com.vn</p>
            </div>
            <div class="footer__content--r">
                <p class="f-right-content">© 2024 Golden Gate ., JSC. All rights reserved</p>
            </div>
        </div>
    </footer>`;
  const footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = footerStr;
  }

}
footer();
renderNavBar();
renderMenu();


//commit
{/* <a href="#menu2" class="list-group-item" data-toggle="collapse" data-parent="#sidebar"> 
<span class="d-none d-md-inline">Buffet</span></a>
    
<a href="#menu3" class="list-group-item d-inline-block collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false">
  <span class="d-none d-md-inline">Combo</span></a>
<div class="collapse" id="menu3">
<li href="#" class="list-group-item" data-parent="#menu3">Romantic French Dinner</li>
<li href="#" class="list-group-item" data-parent="#menu3">Romantic French Dinner</li>
<li href="#" class="list-group-item" data-parent="#menu3">Romantic French Dinner</li>
<li href="#" class="list-group-item" data-parent="#menu3">Romantic French Dinner</li>
<li href="#" class="list-group-item" data-parent="#menu3">Romantic French Dinner</li> 
</div> */}



{/* <div class="arrow-right" id="ar-right">
              <i class="fa-solid fa-chevron-right"></i>
            </div> */}
// <!-- submenu -->
// <div class="submenu-list" id="sub-menu-list">
//   <a href="##" class="sub-menu-item">
//     <p class="sub-i-name">Gọi Món</p>
//   </a>
//   <a href="##" class="sub-menu-item">
//     <p class="sub-i-name">Buffet</p>
//   </a>
//   <a href="##" class="sub-menu-item">
//     <p class="sub-i-name">Combo</p>
//   </a>
// </div>