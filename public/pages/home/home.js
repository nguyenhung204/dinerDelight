function isMobileDevice() {
  const userAgent = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

if (isMobileDevice()) {
  // Chặn truy cập
  window.location.href = 'https://www.example.com/blocked'; // Thay thế bằng trang web chặn
}

window.onload = function() {
    if (localStorage.getItem('needTestLogin') === 'true') {
      testLogin();
      localStorage.removeItem('needTestLogin'); 
    }
  };


