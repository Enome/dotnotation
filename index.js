var dotnotation = function (object, path) {

  var attributes = path.split('.');
  var i = 0;

  for (i; i < attributes.length; i += 1) {
    object = object[attributes[i]];
  }

  return object;

};

module.exports = dotnotation;
