
function login(e) {
  e.preventDefault();
  // Get the values from the form
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var err = document.getElementById('err');

  if (username == '' || password == '') {
    err.innerHTML = 'Vui lòng nhập đầy đủ thông tin';
    return;
  }
  let data = localStorage.getItem(username);
  if (!data) {
    err.innerHTML = 'Tài khoản không tồn tại';
    return;
  }
   // Decode the JWT
   var payload = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(data.split(".")[1]));

   // Check if the username and password match the ones in the JWT
   if (payload.username !== username || payload.password !== password) {
     err.innerHTML = 'Tên đăng nhập hoặc mật khẩu không chính xác';
     return;
   }
  alert('Welcome to my website');  
  localStorage.setItem('needTestLogin', 'true');

  var header = {alg: "HS256", typ: "JWT"};
  var payload = {
    username: username,
    password: password,
  };
  var secret = "diner-login-key";
  var sHeader = JSON.stringify(header);
  var sPayload = JSON.stringify(payload);
  var sJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, {utf8: secret});

  localStorage.setItem('currentUser', sJWT);
  window.location.href = '../home/index.html';
}
// Get the form element
var form = document.querySelector('#form-login');
form.addEventListener('submit', login);
