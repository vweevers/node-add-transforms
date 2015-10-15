'use strict';

module.exports = function addTransforms(b, transforms) {
  if (transforms) b.pipeline.on('package', function(pkg) {
    var add = pkg.name && transforms[pkg.name]
    
    if (add) {
      var br = pkg.browserify || (pkg.browserify = {}) 
      br.transform = [].concat(br.transform || []).concat(add)
    }
  })
}
