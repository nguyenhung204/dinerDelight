window.onload = function() {
  if (localStorage.getItem('needTestLogin') === 'true') {
    testLogin();
    localStorage.removeItem('needTestLogin'); 
  }
};

