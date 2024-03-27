
function renderNavBar() {
    const navBarStr = `
    <div class="wrapper">
    <div class="absolute-menu" id="absolute-menu">
      <div class="close-icon" id="close-icon">
       <i class="fa-solid fa-2xl fa-xmark"></i>
      </div>
      <div class="abs-menu-list" id="abs-menu-list">
        <a
          href="##"
          class="abs-menu-item abs-to-sub-item"
          id="abs-to-sub-item"
        >
          <div class="abs-item-name">
            <div class="arrow-left" id="ar-left">
              <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="item-title-name">
              <p class="abs-i-name">Thực Đơn</p>
            </div>
            <div class="arrow-right" id="ar-right">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </a>
        <!-- submenu -->
        <div class="submenu-list" id="sub-menu-list">
          <a href="##" class="sub-menu-item">
            <p class="sub-i-name">Gọi Món</p>
          </a>
          <a href="##" class="sub-menu-item">
            <p class="sub-i-name">Buffet</p>
          </a>
          <a href="##" class="sub-menu-item">
            <p class="sub-i-name">Combo</p>
          </a>
        </div>
        <a href="../../pages/sale/index.html" class="abs-menu-item">
          <p class="abs-i-name">Ưu Đãi</p>
        </a>
        <a href="../../pages/table/index.html" class="abs-menu-item">
          <p class="abs-i-name">Đặt Bàn</p>
        </a>
        <a href="../../pages/home/index.html" class="abs-menu-item">
          <p class="abs-i-name">Về Chúng Tôi</p>
        </a>
        <a href="##" class="abs-menu-item">
          <p class="abs-i-name">Tin Tức</p>
        </a>
      </div>
    </div>
    <!--  -->
    <nav class="navigation">
      <div class="nav-list">
        <img src="../../assets/Diner Delight-logos.jpeg" alt="image" class="logo" />
      </div>
      <div class="menu-list" id="menu-list">
        <a href="../../pages/sale/index.html" class="menu-item"> <p class="i-name">Ưu Đãi</p></a>
        <a href="../../pages/menu/index.html" class="menu-item"> <p class="i-name">Thực Đơn</p> </a>
        <a href="../../pages/table/index.html" class="menu-item"> <p class="i-name">Đặt Bàn</p> </a>
      </div>
      <div class="nav-interact">
        <div class="user-nav">
          <i class="fa-regular fa-user fa-xl"></i>
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
script.onload = function(){
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
            
                         <span class="d-none d-md-inline ">Gọi Món</span> </i> </a>
                    <div class="collapse" id="menu1">
                        <a href="#" class="list-group-item" id ="Khaivi" data-parent="#menu1">Khai Vị</a>
                        <a href="#" class="list-group-item" data-parent="#menu1">Thịt Bò</a>
                        <a href="#" class="list-group-item" data-parent="#menu1">Thịt Heo</a>
                        <a href="#" class="list-group-item" data-parent="#menu1">Hải Sản</a>
                        <a href="#" class="list-group-item" data-parent="#menu1">Tráng Miệng</a>
                        <a href="#" class="list-group-item" data-parent="#menu1">Rượu Vang</a>
                    </div>
                        <a href="#menu2" class="list-group-item" data-toggle="collapse" data-parent="#sidebar"> 
                        <span class="d-none d-md-inline">Buffet</span></a>
                            
                        <a href="#menu3" class="list-group-item d-inline-block collapsed" data-toggle="collapse" data-parent="#sidebar" aria-expanded="false">
                         <span class="d-none d-md-inline">Combo</span></a>
                        <div class="collapse" id="menu3">
                        <a href="#" class="list-group-item" data-parent="#menu3">Romantic French Dinner</a>
                        <a href="#" class="list-group-item" data-parent="#menu3">Romantic French Dinner</a>
                        <a href="#" class="list-group-item" data-parent="#menu3">Romantic French Dinner</a>
                        <a href="#" class="list-group-item" data-parent="#menu3">Romantic French Dinner</a>
                        <a href="#" class="list-group-item" data-parent="#menu3">Romantic French Dinner</a> 
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

renderNavBar();

renderMenu();