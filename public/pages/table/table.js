window.onload = function () {
  if (localStorage.getItem('needTestLogin') === 'true') {
    testLogin();
    localStorage.removeItem('needTestLogin');
  }
};

$('#test').on('click', function (e) {
  if (isLogin === false) {
    localStorage.setItem('needTestLogin', 'true');
    window.location.href = "../login/index.html";
    alert('Vui lòng đăng nhập để đặt bàn');
    return;
  }
});


// Initiate the table with the following code in the HTML file
$('#name').on('blur', function checkName() {
  let name = $(this).val();
  const nameRegex = /^[A-ZÀ-Ỹa-ỹ\s]{5,20}$/;

  if (!nameRegex.test(name)) {
    $("#nameHelp").text("Tên không hợp lệ");
  } else {
    $("#nameHelp").text("");
  }
});

$('#email').on('blur', function checkEmail() {
  let email = $(this).val();
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    $("#emailHelp").text("Email không hợp lệ");
  }
  else {
    $("#emailHelp").text("");

  }
});

$('#time').on('blur', function checkTime() {

  let time = $(this).val();
  let timeRegex = /^(0|[8-9]|0\d|2[0-2]):([0-5]\d)$/;
  if (!timeRegex.test(time)) {
    $("#timeHelp").text("Vui lòng nhập thời gian trong khoảng 08:00 AM - 22:00 PM");
  }
  else {
    $("#timeHelp").text("");
  }
});

$('#phone').on('blur', function checkPhoneNumber() {
  let phoneNumber = $(this).val();
  let phoneNumberRegex = /^(09|03|07|06|05|04)\d{8}$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    $("#phoneHelp").text("Số điện thoại không hợp lệ");
    $('#confirmButton').prop('disabled', true);
  }
  else {
    $("#phoneHelp").text("");
  }
});

$('#form').on('submit', function checkAgree() {
  if ($('#confirm').is(':checked')) {
    $("#agreeHelp").text("");
    $('#confirmButton').prop('disabled', false);
  }
  else {
    $("#agreeHelp").text("Vui lòng đồng ý điều khoản");
  }
});

$('#confirm').on('change', function () {
  if ($('#confirm').is(':checked')) {
    $('#confirmButton').prop('disabled', false);
  } else {
    $('#confirmButton').prop('disabled', true);
  }
});



$(document).ready(function () {
  $('#post').on('submit', function (e) {
    e.preventDefault();

    let name = $('#name').val();
    let time = $('#time').val();
    let phoneNumber = $('#phone').val();

    $('.name_info').text('Họ và tên: ' + name);
    $('.time_info').text('Thời gian: ' + time);
    $('.phone_number_info').text('Số điện thoại: ' + phoneNumber);
    $('.table_info').text('Loại bàn: ' + $('input[name="table"]:checked').val());
    $('.message_info').text('Ghi chú: ' + $('#message').val());

  });
});
$('#confirm-table').on('click', function (e) {
  e.preventDefault();
  alert('Đặt bàn thành công');
  window.location.href = "../home/index.html";
});




