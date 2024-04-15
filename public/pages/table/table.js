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

// $('#idCard').on('input', function checkIdCard() {
//   let idCard = $(this).val();
//   let idCardRegex = /^\d{12}$/;
//   if (!idCardRegex.test(idCard)) {
//     $("#cccdHelp").text("Mã căn cước không hợp lệ");
//     $('#confirmButton').prop('disabled', true);
//   }
//   else {
//     $("#cccdHelp").text("");
//   }
// });

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
    let email = $('#email').val();
    // let idCard = $('#idCard').val(); 
    let phoneNumber = $('#phone').val();

    $('.name_info').text('Họ và tên: ' + name);
    $('.email_info').text('Email: ' + email);
    // $('.cccd_info').text('Căn cước công dân: ' + idCard);
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




