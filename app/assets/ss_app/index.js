'use strict';

import './stylesheets/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const alert = document.querySelector('.alert');
  const notice = document.querySelector('.notice');
  const orderSelect = document.querySelector('select#order');
  const sortableTable = document.getElementById('sortable-body');
  const csrfToken = $('meta[name="csrf-token"]').attr('content');
  const sortableContributors = document.querySelector('.post_contributors');

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

  if (orderSelect) {
    orderSelect.onchange = (e) => {
      e.target.parentNode.submit();
    };
  }

  if (sortableTable) {
    $(sortableTable).sortable({
      update: function(e, ui) {
        $.ajax({
          headers: {
            'X-CSRF-Token': csrfToken
          },
          url: location.pathname + '/sort',
          type: 'PATCH',
          data: $(this).sortable('serialize'),
        });
      }
    });
  }

  if (sortableContributors) {
    $(sortableContributors).sortable({});
  }
});
