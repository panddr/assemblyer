'use strict';

import './stylesheets/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const alert = document.querySelector('.alert');
  const notice = document.querySelector('.notice');
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  if (alert) {
    setTimeout(() => {
      alert.classList.add('hide');
    }, 5000);
  }

  if (notice) {
    setTimeout(() => {
      notice.classList.add('hide');
    }, 5000);
  }
});
