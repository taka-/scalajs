var ScalaJs = {}

ScalaJs.seq = function() {
  var Seq = function(){}
  Seq.prototype = new Array()

  var foldLeft = function(seq, b, f) {
    var result = b
    for (var i = 0; i < seq.length; i++) {
      result = f(result, seq[i])
    }
    return result
  }

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
    return foldLeft(this, new Seq(),
                    function(sum, x) {sum.push(f(x)); return sum})
  }

  Seq.prototype.filter = function(f) {
    return foldLeft(this, new Seq(),
                    function(sum, x) { if(f(x)) { sum.push(x)}; return sum})
  }

  Seq.prototype.find = function(f) {
    for (var i = 0; i < this.length; i++) {
      if (f(this[i])) {
        return this[i]
      }
    }
    return null;
  }

  Seq.prototype.foreach = function(f) {
    for (var i = 0; i < this.length; i++) {
      f(this[i])
    }
  }

  Seq.prototype.contains = function(elem) {
    for (var i = 0; i < this.length; i++) {
      if(this[i] == elem) {
        return true
      }
    }
    return false
  }

  Seq.prototype.equals = function(that) {
    if (this.length != that.length) {
      return false
    }
    for (var i = 0; i < this.length; i++) {
      if (this[i] != that[i]) {
        return false
      }
    }
    return true
  }

  Seq.prototype.diff = function(that) {
    return foldLeft(this, new Seq(),
                    function(sum, x) {if(!that.contains(x)) { sum.push(x)}; return sum})

  }

  Seq.prototype.distinct = function() {
    return foldLeft(this, new Seq(),
                    function(sum, x) { if(!sum.contains(x)) { sum.push(x)};return sum})
  }

  var seq = new Seq()
  for (var i = 0; i < arguments.length; i++) {
    seq.push(arguments[i])
  }

  return seq
}

