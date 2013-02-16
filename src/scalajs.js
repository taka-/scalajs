var ScalaJs = {}

ScalaJs.seq = function() {
  var seq = Object.create(Array.prototype)
  for (var i = 0; i < arguments.length; i++) {
    seq.push(arguments[i])
  }
  return seq
}

