var self = require("sdk/self");

var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");

var menuItem = contextMenu.Item({
  label: "Google Image Search",
  context: contextMenu.SelectorContext("img"),
  contentScript: 'self.on("click", function(node, data) { self.postMessage(node.src) })',
  onMessage: function(imageUrl) {
    tabs.open("http://www.google.com/searchbyimage?image_url=" + imageUrl);
  }
});
