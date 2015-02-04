
var path = require('path');
var util = require('util');

var skit = require('skit');
var scriptresource = skit.scriptresource;
var JavaScriptResource = scriptresource.JavaScriptResource;

var transformer = require('./JSXTransformer');


/**
 * This is a custom handler for loading / preprocessing .jsx files using the
 * react JSXTranformer. This makes .jsx files work in skit.
 */
var ReactResource = function(filePath, modulePath, source) {
  source = transformer.transform(source).code;
  JavaScriptResource.call(this, filePath, modulePath, source);
};
util.inherits(ReactResource, JavaScriptResource);

ReactResource.REACT_DEPENDENCY_PATH = 'library.thirdparty.react';

ReactResource.prototype.findDependencyPaths_ = function() {
  var deps = JavaScriptResource.prototype.findDependencyPaths_.apply(this, arguments);
  deps.unshift(ReactResource.REACT_DEPENDENCY_PATH);
  return deps;
};

ReactResource.prototype.aliasForDependencyPath = function(dependencyPath) {
  if (dependencyPath == ReactResource.REACT_DEPENDENCY_PATH) {
    return 'React';
  }
  return JavaScriptResource.prototype.aliasForDependencyPath.call(this, dependencyPath);
}

// This sets the .jsx extension to be handled by this Resource subtype.
scriptresource.setResourceWrapper('.jsx', ReactResource);


// Starts the server.
var server = new skit.SkitServer(path.join(__dirname, 'root'), {debug: true});
server.listen(3001);

console.log('Listening at http://localhost:3001/');
