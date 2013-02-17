TestCase('Seq Test', {
  'test seq return something like array': function() {
    var seq = ScalaJs.seq(1, 2, 3)
    assertEquals(seq.length, 3)
    assertEquals(seq[0], 1)
    assertEquals(seq[1], 2)
    assertEquals(seq[2], 3)
  },
  'test map': function() {
    var seq = ScalaJs.seq(1, 2, 3).map(function(x) {return x + 1})
    assertEquals(3, seq.length)
    assertEquals(2, seq[0])
    assertEquals(3, seq[1])
    assertEquals(4, seq[2])
  },
  'test filter': function() {
    var seq = ScalaJs.seq(1, 2, 3).filter(function(x) { return x == 2 })
    assertEquals(1, seq.length)
    assertEquals(2, seq[0])
  }
})
