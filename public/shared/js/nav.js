
function renderMenu() {
    const menuStr = `
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
          <p class="abs-i-name">Đặt Món</p>
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
        <a href="../../pages/sale/index.html" class="menu-item"> <p class="i-name">Ưu Đãi</p> </a>
        <a href="../../pages/menu/index.html" class="menu-item"> <p class="i-name">Thực Đơn</p> </a>
        <a href="../../pages/table/index.html" class="menu-item"> <p class="i-name">Đặt Món</p> </a>
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
        header.innerHTML = menuStr;
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

renderMenu();