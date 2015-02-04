'use strict';

var reset = skit.browser.reset;
var Controller = skit.platform.Controller;


module.exports = Controller.create({
  __title__: function(childTitle) {
    // Parent controllers can frame the title content of child controllers.
    return childTitle + ' | Skit';
  },

  __body__: function(child) {
    return <div id="base">{child}</div>;
  },

  __bodyToHtml__: function(body) {
    // This takes the whole react tree to this point and generates
    // the server-side HTML we need.
    return React.renderToString(body);
  },

  __ready__: function() {
    // This hooks up any client-side event handlers, reconstructing
    // the state in the browser.
    React.render(this.renderFullBody(true), document.getElementById('base').parentNode);
  }
});