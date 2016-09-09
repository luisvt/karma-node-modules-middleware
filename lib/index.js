var path = require('path');
var fs = require('fs');

function requireJsNodeModulesMiddleWareFactory() {
  return function (request, response,  next) {
    var filePath = path.join('node_modules', request.url.replace(/base\/|node_modules\//g, ''));
    fs.exists(filePath, function(exists){
      if (exists) {
        // Content-type is very interesting part that guarantee that
        // Web browser will handle response in an appropriate manner.
        response.writeHead(200, {
          "Content-Type": "application/octet-stream",
          "Content-Disposition" : "attachment; filename=" + path.basename(filePath)});
        fs.createReadStream(filePath).pipe(response);
      } else {
        next();
      }
    });
  }
}

module.exports = {
  'middleware:node-modules': ['factory', requireJsNodeModulesMiddleWareFactory]
};
