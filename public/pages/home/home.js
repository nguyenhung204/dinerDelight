function showLoading() {
  let element = document.getElementById("loading-panel");
    if (element) {
        element.classList.remove("hidden");
    }
}
function hideLoading() {
    let element = document.getElementById("loading-panel");
        if (element) {
            element.classList.add("hidden");
        }
    }
 function renderLoading() {
    showLoading();
    setTimeout(hideLoading, 1000);
}
renderLoading();

