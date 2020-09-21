'use strict';

import spUtils from './Utils';

/*-----------------------------------------------
|   Detector
-----------------------------------------------*/

spUtils.$document.ready(() => {
    
  if (window.is.opera()) spUtils.$html.addClass('opera');
  if (window.is.mobile()) spUtils.$html.addClass('mobile');
  if (window.is.firefox()) spUtils.$html.addClass('firefox');
  if (window.is.safari()) spUtils.$html.addClass('safari');
  if (window.is.ios()) spUtils.$html.addClass('ios');
  if (window.is.iphone()) spUtils.$html.addClass('iphone');
  if (window.is.ie()) spUtils.$html.addClass('ie');
  if (window.is.edge()) spUtils.$html.addClass('edge');
  if (window.is.chrome()) spUtils.$html.addClass('chrome');
  if (spUtils.nua.match(/puppeteer/i)) spUtils.$html.addClass('puppeteer');
  if (window.is.mac()) spUtils.$html.addClass('osx');
  if (window.is.windows()) spUtils.$html.addClass('windows');

});

