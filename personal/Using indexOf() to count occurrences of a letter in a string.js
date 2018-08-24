var str = 'xoxoxo';
var count = 0;
var pos = str.indexOf('x');

while (pos !== -1) {
  count++;
  pos = str.indexOf('x', pos + 1);
}

console.log(count); // displays 4

var str = 'xoxoxo';
var count = 0;
var pos = str.indexOf('x');

console.log(str.length)

