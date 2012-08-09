# API

```js
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
```
