/*global utils, assert*/
"use strict";

var iteritems = require('../iteritems');
var toArray = require('../toArray');

exports.iteritems = function() {
  var obj = {foo: 5, bar: [1,2], 5: 42};
  var iter = iteritems(obj);
  assert(utils.isIterator(iter));
  assert.sameMembersDeep(toArray(iter), [['5', 42], ['bar', [1,2]], ['foo', 5]]);
};