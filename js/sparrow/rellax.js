'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|   Rellax [Parallax]
-----------------------------------------------*/
/*
  global Rellax
*/
spUtils.$document.ready(() => {
  const Selector = { PARALLAX: '.parallax' };
  if ($(Selector.PARALLAX).length) {
    const callRellax = () => new Rellax(Selector.PARALLAX, { speed: -3 });

    if (!window.is.ie() && !spUtils.nua.match(/puppeteer/i)) callRellax();
  }
});
