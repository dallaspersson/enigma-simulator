var should = require('chai').should(),
    enigma = require('./../index'),
    foo = enigma.foo;

describe('#foo', function() {
  it('returns the string bar', function() {
    foo().should.equal('bar');
  });
});
