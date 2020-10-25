module.exports = function check(str, bracketsConfig) {
  // check = function (str, bracketsConfig) {
  // your solution

  let strArr = str.split('');
  let stack = [];
  let eqBracketOpener = false;
  let eqBracketOpenerIndex = 0
  let eqBracketCloserIndex = 0
  // let eqBracketCloser = false;

  for (let i = 0; i <= strArr.length + 1; i++){
  let element = strArr[i];
  // for (let element of strArr) {
    if (isOpener(element, bracketsConfig) && isCloser(element, bracketsConfig)) {
      if (!eqBracketOpener) {
        eqBracketOpener = true;
        eqBracketOpenerIndex = i;
        continue;
      }
      if (eqBracketOpener) {
        eqBracketOpener = false
        eqBracketCloserIndex = i;
        if((eqBracketCloserIndex - eqBracketOpenerIndex) % 2 == 0) {
          // console.log(false);
          return false;
        }
        continue;
      }

    }
    if (isOpener(element, bracketsConfig)) {
      stack.push(findCloser(element, bracketsConfig));
      continue;
    }
    if (isCloser(element, bracketsConfig)) {
      if (stack.pop() != element) {
        // console.log(false);
        return false;
      }
    }
  }
  // console.log(stack.length == 0);
  return stack.length == 0 && !eqBracketOpener;
}

isOpener = function (opener, bracketsConfig) {
  for (let element of bracketsConfig) {
    if (opener == element[0]) {
      return true;
    }
  }
  return false;
}

isCloser = function (closer, bracketsConfig) {
  for (let element of bracketsConfig) {
    if (closer == element[1]) {
      return true;
    }
  }
  return false;
}

findCloser = function (opener, bracketsConfig) {
  for (let element of bracketsConfig) {
    if (opener == element[0]) {
      return element[1];
    }
  }
}

// check(('||'), [['|', '|']]);