var fs = require('fs')

function shouldMung (i) {
  return (i % 500 === 0)
}

function mungBuf (buf) {
  return new Buffer([65])
}

var mung = module.exports = function (path, outStream, skip) {
  var buf = fs.readFileSync(path)
  for (var i = 0; i < buf.length; i++) {
    if (i >= skip && shouldMung(i)) {
      outStream.write(mungBuf(buf[i])) 
    } else {
      outStream.write(new Buffer([buf[i]]))
    }
  }
}

