'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|   Select menu [bootstrap 4]
-----------------------------------------------*/
spUtils.$document.ready(() => {
  // https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#select-menu
  // https://github.com/twbs/bootstrap/issues/26183
  window.is.android() && $('select.form-control').removeClass('form-control').css('width', '100%');

  // https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
  $('[data-toggle="tooltip"]').tooltip();
});
