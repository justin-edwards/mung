var fs = require('fs')

function shouldMung (i) {
  return (i % 500 === 0)
}

function mungBuf (buf, replacement) {
  var rpl = replacement;
  if(rpl == 'random'){
	rpl = Math.floor(Math.random() * 256);
  }
  return new Buffer([rpl])
}

var mung = module.exports = function (path, outStream, skip, replacement) {
  var buf = fs.readFileSync(path)
  for (var i = 0; i < buf.length; i++) {
    if (i >= skip && shouldMung(i)) {
      outStream.write(mungBuf(buf[i], replacement))
    } else {
      outStream.write(new Buffer([buf[i]]))
    }
  }
}

