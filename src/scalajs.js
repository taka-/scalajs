var ScalaJs = {}

ScalaJs.seq = function() {
  var Seq = function(){}
  Seq.prototype = new Array()

  Seq.prototype.map = function(f) {
    var result = new Seq()
    for (var i = 0; i < this.length; i++) {
      result.push(f(this[i]))
    }
    return result
  }

  var seq = new Seq()
  for (var i = 0; i < arguments.length; i++) {
    seq.push(arguments[i])
  }

  return seq
}

