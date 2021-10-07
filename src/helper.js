// check for white space
export function hasSpace(s) {
  return s.indexOf(" ") > 0;
}
//check if number is present in string
export function checkNumberInString(s) {
  return /\d/.test(s);
}
// check for all characters and split them
export function matchString(s) {
  return s.match(/[a-zA-Z]+|[0-9]+/g);
}
//confirming output to be a number type or not
export function notNumber(s) {
  return isNaN(s);
}
//checking semester seasion input
export function testSemester(s) {
  if (
    s === "F" ||
    s === "f" ||
    s === "w" ||
    s === "W" ||
    s === "s" ||
    s === "S" ||
    s === "Su" ||
    s === "su" ||
    s === "Fall" ||
    s === "fall" ||
    s === "winter" ||
    s === "Winter" ||
    s === "summer" ||
    s === "Summer" ||
    s === "spring" ||
    s === "Spring"
  ) {
    return true;
  } else {
    return false;
  }
}
//convert semester abbre
export function printSemester(s) {
  if (s === "f" || s === "F") {
    return "Fall";
  }
  if (s === "w" || s === "W") {
    return "Winter";
  }
  if (s === "s" || s === "S") {
    return "Spring";
  }
  if (s === "Su" || s === "su") {
    return "Summer";
  }
}
