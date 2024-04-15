window.onload = function() {
  if (localStorage.getItem('needTestLogin') === 'true') {
    testLogin();
    localStorage.removeItem('needTestLogin'); 
  }
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCevP3Z0E30qo_HaQgXPhj0oW7bk0ZasIk",
  authDomain: "web1-hk2.firebaseapp.com",
  projectId: "web1-hk2",
  storageBucket: "web1-hk2.appspot.com",
  messagingSenderId: "1066525732699",
  appId: "1:1066525732699:web:398249d18008d82cb1b47e"
};
const app = initializeApp(firebaseConfig);
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const db = getFirestore();


async function fetchDataSale() {
  const docRef = collection(db, "sale");
  let saleitems = "";
  const querySnapshot = await getDocs(docRef);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    saleitems += renderCardSale(item.img, item.dname, item.fdate, item.ldate);
    console.log(doc.id, " => ", doc.data());
  });
  console.log(querySnapshot);
  document.getElementById("sales-container").innerHTML = saleitems;
  console.log(saleitems);
}
fetchDataSale();

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