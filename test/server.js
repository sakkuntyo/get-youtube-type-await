var test = require('tape')
var getYouTubeTitle = require('../')

test('server', function (t) {
  t.plan(2)

  getYouTubeTitle('QS_59uXCqHM')
})
