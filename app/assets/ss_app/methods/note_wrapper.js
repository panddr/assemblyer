document.addEventListener('DOMContentLoaded', () => {
  const noteLinks = document.querySelectorAll(".note-wrapper .note-link");
  const notePopups = document.querySelectorAll(".note-wrapper .note-popup");
  const iconsClose = document.querySelectorAll(".note-wrapper img");
  const bgs = document.querySelectorAll(".note-wrapper .bg");

  if (window.color) {
    bgs.forEach(el => {
      el.style.background = "#" + window.color;
    });
  }

  for (let i = 0; i < notePopups.length; i++) {
    noteLinks[i].addEventListener('click', () => {
      notePopups.forEach(el => {
        el.classList.remove('active');
      });
      notePopups[i].classList.add('active');
    });
    iconsClose[i].addEventListener('click', () => {
      notePopups[i].classList.remove('active');
    });
  }

  // noteLink.addEventListener('click', () => {
  //   notePopup.classList.add('active');
  // });

  // iconClose.addEventListener('click', () => {
  //   notePopup.classList.remove('active');
  // });

  window.addEventListener('scroll', () => {
    setTimeout(() => {
      notePopups.forEach(el => {
        el.classList.remove('active');
      });
    }, 300);
  });
});
