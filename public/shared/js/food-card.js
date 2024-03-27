
function renderFoodCard(name, price, img) {
  const foodCard = `<div class="card" style="width: 18rem;">
  <img src="${img}" class="card-img-top img-fluid" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${price}</p>
  </div>
</div>`;
  
  return foodCard;
}
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
                  <p class="db-name">Xem chi tiết</p>
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

