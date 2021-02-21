

let express = require('express');
let router = express.Router();

let getServiceMain = require('./get-service-main');
let getUserProfile = require('./get-user-profile');
let getSettings = require('./get-settings');

const utils = require('./utils');

// logging request detail
router.use(function (req, res, next) {
      req.requestTime = new Date().toISOString();
      console.log('[%s] api call - (%s) %s', req.requestTime, req.method, req.originalUrl)
      next();
});

// all content-type of response under rt-service is html.
// set common http header 
// ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
router.use(function (req, res, next) {
   
      const nonce = utils().genRanHex(16);
      res.nonce = nonce;

      res.setHeader( 'Content-Type', 'text/html');
      res.setHeader( 'Content-Security-Policy',
        `script-src self https://www.gstatic.com https://*.bootstrapcdn.com https://cdn.jsdelivr.net https://code.jquery.com 'nonce-${nonce}'`
      );
      
      next();
})

/**
 * /service 
 */
router.route('/')
      .get(getServiceMain.on);

/**
 * /service/user/profile 
 */
router.route('/user/profile')
      .get(getUserProfile.on);


/**
 * /service/settings 
 */
router.route('/settings')
      .get(getSettings.on);


// close session 
router.use(function(req, res) {
    res.status(404).redirect('/404');
});
  
  
  
module.exports.router = router;