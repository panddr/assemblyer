document.addEventListener('DOMContentLoaded', () => {
  const headerMain = document.querySelector(".header-main");
  if (headerMain) {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        headerMain.style.top = "0";
      } else if (window.pageYOffset > 200) {
        headerMain.style.top = "-100px";
      }

      if (window.pageYOffset > 200) {
        headerMain.classList.add("logo-small");
      } else {
        headerMain.classList.remove("logo-small");
      }

      prevScrollpos = currentScrollPos;
    }
  }
});
