
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
  var user = JSON.parse(data);
  if (user == null) {
    err.innerHTML = 'Tài khoản không tồn tại';
    return;
  }
  if (user.password !== password) {
    err.innerHTML = 'Mật khẩu không chính xác';
    return;
  }
  
  alert('Welcome to my website');  
  console.log(user);
  localStorage.setItem('currentUser', JSON.stringify(user));
  window.location.href = '../home/index.html';
}
// Get the form element
var form = document.querySelector('#form-login');
form.addEventListener('submit', login);
