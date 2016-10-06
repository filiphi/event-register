let users  = require('../data/users/users.js');
let events = require('../data/events/events.js');

module.exports = { // addapted from: https://git.io/vodU0
  'Squarespace Events': function(browser) {
    for (var event of events) {
      for (var user of users) {
        browser
          .url(event.url)
          .waitForElementVisible('body')
          .assert.elementPresent('.open-form-button')
          .click(".open-form-button")
          .waitForElementVisible('[type="submit"]', 5000)
          .setValue('[name="fname"]', user.fname)
          .setValue('[name="lname"]', user.lname)
          .setValue('[name="email"]', user.email)
          .setValue('.form-item.field:not(.email) input', user.birthday);
        }
      }
    }
};
