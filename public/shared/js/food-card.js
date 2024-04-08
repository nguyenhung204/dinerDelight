
function renderFoodCard(name, price, img) {
  const foodCard = `<div class="card" style="width: 18rem;">
  <img class ="lazy" src="${img}" class="card-img-top img-fluid" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${price}</p>
  </div>
</div>`;
  
  return foodCard;
}
//lazy load
document.addEventListener("DOMContentLoaded", function() {
  let lazyloadImages = document.querySelectorAll("img.lazy");    
  let lazyloadThrottleTimeout;
  
  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        let scrollTop = window.pageYOffset;
        console.log(scrollTop);
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

function renderCardSale(img,dname,fdate, ldate){
   const dealString = `<div class="deal-container">
        <div class="deal-list">
          <div class="deal-item">
            <div class="deal-img-field">
              <img
                src="${img}"
                alt="image"
                class="deal-img"
              />
            </div>

            <div class="deal-info">
              <div class="deal-name">
                <p class="d-name">
                  ${dname}</p>
              </div>

              <div class="deal-detail">
                <div class="detail-row">
                  <div class="detail-info">
                    <p class="d-info">Ngày bắt đầu</p>
                  </div>

                  <div class="detail-info">
                    <p class="d-info">${fdate}</p>
                  </div>
                </div>

                <div class="detail-row">
                  <div class="detail-info">
                    <p class="d-info">Ngày kết thúc</p>
                  </div>
                  <div class="detail-info">
                    <p class="d-info">${ldate}</p>
                  </div>
                </div>
              </div>
              <div class="deal-button-list">
                <button type="button" id="deal-btn" class="deal-btn">
                  <a href ="../../pages/saledetail" class="db-name">Xem chi tiết</a>
                </button>
                <button type="button" id="deal-btn" class="deal-btn">
                  <a href ="../../pages/login" class="db-name">Nhận mã ngay</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  return dealString;
}

renderFoodCard();

renderCardSale();

