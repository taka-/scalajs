TestCase('Seq Test', {
  'test seq return something like array': function() {
    var seq = ScalaJs.seq(1, 2, 3)
    assertEquals(seq.length, 3)
    assertEquals(seq[0], 1)
    assertEquals(seq[1], 2)
    assertEquals(seq[2], 3)
  }
})
