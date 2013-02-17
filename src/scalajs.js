var ScalaJs = {}

ScalaJs.seq = function() {
  var Seq = function(){}
  Seq.prototype = new Array()

  Seq.prototype.foldLeft = function() {
    if (arguments.length == 2) {
      var result = arguments[0]
      var f = arguments[1]
      for (var i = 0; i < this.length; i++) {
        result = f(result, this[i])
      }
      return result
    } else {
      var f = arguments[0]
      var result = this[0]
      for (var i = 1; i < this.length; i++) {
        result = f(result, this[i])
      }
      return result
    }
  }
   
  Seq.prototype.map = function(f) {
    var result = new Seq()
    for (var i = 0; i < this.length; i++) {
      result.push(f(this[i]))
    }
    return result
  }

  Seq.prototype.filter = function(f) {
    var result = new Seq()
    for (var i = 0; i < this.length; i++) {
      if(f(this[i])) {
        result.push(this[i])
      }
    }
    return result
  }

  var seq = new Seq()
  for (var i = 0; i < arguments.length; i++) {
    seq.push(arguments[i])
  }

  return seq
}

