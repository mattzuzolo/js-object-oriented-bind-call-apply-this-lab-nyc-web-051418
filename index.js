//Your code here
function justInvoke(fn) {
  return fn();
};

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
};

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
  //return something
};

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const holder = functionToBeCopied.bind(thisValue)
  return holder;
};
