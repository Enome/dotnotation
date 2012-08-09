var dotnotation = require('./');
var should = require('should');

describe('Dot Notation', function () {

  var object = {
    shipping: {
      europe: '15',
      america: '22'
    }
  };

  it('returns 15', function () {
    dotnotation(object, 'shipping.europe').should.eql('15');
  });

  it('returns 22', function () {
    dotnotation(object, 'shipping.america').should.eql('22');
  });

  it('returns undefined', function () {
    should.not.exist(dotnotation(object, 'shipping.america.la.heyo'));
  });

});
