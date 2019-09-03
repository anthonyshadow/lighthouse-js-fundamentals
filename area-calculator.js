function calculateRectangleArea(length, width) {
  var rectangle = length * width
  if (rectangle > 0) {
    return rectangle;
  }
  else {
    return undefined;
  }
}
function calculateTriangleArea(base, height) {
  var triangle = (base * height) / 2
  if (triangle > 0) {
    return triangle;
  }
  else {
    return undefined;
  }
}
function calculateCircleArea(radius) {
  var circle = Math.PI * radius ** 2
  if (circle > 0 && radius > 0) {
    return circle;
  }
  else {
    return undefined;
  }
}