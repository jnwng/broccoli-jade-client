'use strict';
var Filter = require('broccoli-filter');
var jade = require('jade');
var _ = require('underscore');

function JadeClientFilter(inputTree, options) {
  if (!(this instanceof JadeClientFilter)) {
    return new JadeClientFilter(inputTree, options);
  }

  this.inputTree = inputTree;
  this.options = options || {};
}

JadeClientFilter.prototype = Object.create(Filter.prototype);
JadeClientFilter.prototype.constructor = JadeClientFilter;

JadeClientFilter.prototype.extensions = ['js.jade'];
JadeClientFilter.prototype.targetExtension = 'html';

JadeClientFilter.prototype.processString = function (str, filename) {
  return jade.compileClient(str, _({}).extend(this.options, {
    filename: filename
  }));
};

module.exports = JadeClientFilter;
