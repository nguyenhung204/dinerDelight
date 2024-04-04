// Initiate the table with the following code in the HTML file
  $('#name').on('input', function checkName() {
  let name = $(this).val();
  let nameRegex = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/;

  if (!nameRegex.test(name) ) {
      $("#nameHelp").text("Tên không hợp lệ");
      $('#confirmButton').prop('disabled', true);
     
  } else {
      $("#nameHelp").text("");
     
  }
  });

  $('#email').on('input', function checkEmail() {
  let email = $(this).val();
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    $("#emailHelp").text("Email không hợp lệ");
    $('#confirmButton').prop('disabled', true);
  }
  else 
  {
    $("#emailHelp").text("");
   
  }
});

  $('#idCard').on('input', function checkIdCard() {
    let idCard = $(this).val();
    let idCardRegex = /^\d{12}$/;
    if (!idCardRegex.test(idCard)) {
      $("#cccdHelp").text("Mã căn cước không hợp lệ");
      $('#confirmButton').prop('disabled', true);
    }
    else {
      $("#cccdHelp").text("");
    }
  });

  $('#phone').on('input', function checkPhoneNumber() {
  let phoneNumber = $(this).val();
  let phoneNumberRegex = /^(09|03|07|06|05|04)\d{8}$/;
  if (!phoneNumberRegex.test(phoneNumber)) {
    $("#phoneHelp").text("Số điện thoại không hợp lệ");
    $('#confirmButton').prop('disabled', true);
  }
  else
  {
    $("#phoneHelp").text("");
  }
  });
  
  $('#table').on('change', function checkTable() {
    if ($('input[name="table"]:checked').length == 0) {
      $("#tableHelp").text("Vui lòng chọn loại bàn");
      $('#confirmButton').prop('disabled', true);
  }
  else 
  {
    $("#tableHelp").text("");
  }
  });

  $('#confirm').on('change', function checkAgree() {
  if ($('#confirm').is(':checked')) { 
    $("#agreeHelp").text("");
    $('#confirmButton').prop('disabled', false);
  }
  else 
  {
    $("#agreeHelp").text("Vui lòng đồng ý điều khoản");
  }
  });
  $('#confirm').on('change', function() {
    if ($('#confirm').is(':checked')) {
      $('#confirmButton').prop('disabled', false);
    } else {
      $('#confirmButton').prop('disabled', true);
    }
  });

  $(document).ready(function() {
    $('#post').on('submit', function(e) {
        e.preventDefault();
    
        let name = $('#name').val(); console.log(name);
        let email = $('#email').val(); console.log(email);
        let idCard = $('#idCard').val(); console.log(idCard);
        let phoneNumber = $('#phone').val(); console.log(phoneNumber);
  
        $('.name_info').text('Họ và tên: ' + name);
        $('.email_info').text('Email: ' + email);
        $('.cccd_info').text('Căn cước công dân: ' + idCard);
        $('.phone_number_info').text('Số điện thoại: ' + phoneNumber);
        $('.table_info').text('Loại bàn: ' + $('input[name="table"]:checked').val());
        $('.message_info').text('Ghi chú: ' + $('#message').val());

    });
  });





