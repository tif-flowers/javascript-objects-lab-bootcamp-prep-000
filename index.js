var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value;
 return object;
}

function deleteFromObjectByKey(object, key) {
  var delObj = Object.assign({}, recipes);
  delete delObj.key;
  return delObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes.key;
  return object;
}
