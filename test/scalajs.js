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
  },
  'test foldLeft apply numbers': function() {
    var sum = ScalaJs.seq(1, 2, 3).foldLeft(0, function(sum, x) { return sum + x })
    assertEquals(6, sum)
  },
  'test foldLeft with one parameters, only function': function() {
    var sum = ScalaJs.seq(1, 2, 3).foldLeft(0, function(sum, x) { return sum + x })
  },
  'test find return first element': function() {
    var result = ScalaJs.seq(1, 2, 3).find(function(x){return x == 3})
    assertEquals(3, result)
  },
  'test find return null if seq has no element which function return true': function() {
    var result = ScalaJs.seq(1, 2, 3).find(function(x){return x == 5})
    assertEquals(null, result)
  },
  'test foreach': function() {
    /*:DOC += <div id="1"></div><div id="2"></div> */
    ScalaJs.seq(1, 2).foreach(function(x) {
      var div = document.getElementById(x)
      div.innerHTML = x
    })
    assertEquals(1, document.getElementById(1).innerHTML)
    assertEquals(2, document.getElementById(2).innerHTML)
  },
  'test contains': function() {
    assertEquals(true, ScalaJs.seq(1, 2, 3).contains(1))
    assertEquals(false, ScalaJs.seq(1, 2, 3).contains(4))
    assertTrue(ScalaJs.seq(1, 2).contains(2))
  },
  'test equals': function() {
    assertTrue(ScalaJs.seq(1, 2, 3).equals(ScalaJs.seq(1, 2, 3)))
    assertFalse(ScalaJs.seq(1, 2, 3).equals(ScalaJs.seq(1)))
    assertFalse(ScalaJs.seq(1, 2, 3).equals(ScalaJs.seq()))
    assertFalse(ScalaJs.seq().equals(ScalaJs.seq(1)))
    assertTrue(ScalaJs.seq().equals(ScalaJs.seq()))
  },
  'test diff': function() {
    assertTrue(ScalaJs.seq(2).equals(ScalaJs.seq(1, 2).diff(ScalaJs.seq(1))))
    assertTrue(ScalaJs.seq(2).equals(ScalaJs.seq(1, 2).diff(ScalaJs.seq(1, 3))))
    assertTrue(ScalaJs.seq().equals(ScalaJs.seq(1, 2).diff(ScalaJs.seq(1, 2))))
  }
})
