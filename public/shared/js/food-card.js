
function renderCard(name, price, image) {
    return `<div>${name} - ${price}</div>`
}
function renderCard(){
   const dealString = `<div class="deal-container">
        <div class="deal-list">
          <div class="deal-item">
            <div class="deal-img-field">
              <img
                src="../../assets/public.avif"
                alt="image"
                class="deal-img"
              />
            </div>

            <div class="deal-info">
              <div class="deal-name">
                <p class="d-name">
                  
                </p>
              </div>

              <div class="deal-detail">
                <div class="detail-row">
                  <div class="detail-info">
                    <p class="d-info">Áp dụng</p>
                  </div>

                  <div class="detail-info">
                    <p class="d-info">77/77/7777</p>
                  </div>
                </div>

                <div class="detail-row">
                  <div class="detail-info">
                    <p class="d-info">Hết hạn sau</p>
                  </div>
                  <div class="detail-info">
                    <p class="d-info">777 ngày</p>
                  </div>
                </div>
              </div>
              <div class="deal-button-list">
                <button type="button" id="deal-btn" class="deal-btn">
                  <p class="db-name">Xem chi tiết</p>
                </button>
                <button type="button" id="deal-btn" class="deal-btn">
                  <p class="db-name">Nhận mã ngay</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      const card = document.getElementById("foodCard");
      if(card){
        card.innerHTML = dealString;
      }

      
}
renderCard();