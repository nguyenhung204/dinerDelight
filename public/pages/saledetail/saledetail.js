window.onload = function() {
  if (localStorage.getItem('needTestLogin') === 'true') {
    testLogin();
    localStorage.removeItem('needTestLogin'); 
  }
};
$(document).ready(function () {
  var slideIndex = 0;
  var totalSlides = $(".slider-card-list").length;
  var totalSlides = Math.ceil(totalSlides / 2);

  // Function to show current slide
  function showSlide(index) {
    $(".slider-card-list").css("transform", "translateX(-" + (index * 25) + "%)");
    $(".dot").removeClass("active");
    $(".dot[data-index='" + index + "']").addClass("active");
  }

  showSlide(slideIndex);

  $(".dot").click(function () {
    slideIndex = parseInt($(this).attr("data-index"));
    showSlide(slideIndex);
  });

  // Biến để theo dõi sự di chuyển của chuột
  var startX;
  var isMouseDown = false;

  // Xử lý sự kiện swipe chuột
  $(document).on("mousedown", ".slider", function (event) {
    startX = event.pageX;
    isMouseDown = true;
  });

  // Xử lý sự kiện di chuyển chuột
  $(document).on("mousemove", function (event) {
    if (isMouseDown) {
      var currentX = event.pageX;
      var diffX = startX - currentX;

      if (Math.abs(diffX) > 10) { // Chỉ xử lý nếu sự di chuyển của chuột đủ lớn
        if (diffX > 50 && slideIndex < totalSlides) { // Swipe sang trái
          slideIndex++;
          showSlide(slideIndex);
          console.log("to trái", slideIndex);
        } else if (diffX < 50 && slideIndex > 0) { // Swipe sang phải
          slideIndex--;
          showSlide(slideIndex);
          console.log("to phải", slideIndex);

        }

        startX = currentX; // Cập nhật vị trí bắt đầu cho lần di chuyển tiếp theo
      }
    }
  });

  // Xử lý sự kiện thả chuột
  $(document).on("mouseup", function () {
    isMouseDown = false;
  });
});