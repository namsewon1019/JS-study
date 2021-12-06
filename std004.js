console.log('문자열이 긴 경우에는' + ' 문자열을' + ' 나눈 뒤'
 + ' 다시 합칩니다.');

console.log('문자열이 긴 경우에는', '문자열을', '나눈 뒤', '다시 합칩니다.')

console.log(3**(2+1))


let a = 10;
let b = 4;
let temp;

temp = a;
a = b;
b = temp;


console.log(a);
console.log(b);



let cond = true;
let value = '';
switch(cond) {
  case cond :
  console.log('value = 참'); break;
  default :
  console.log('value = 거짓')
}

let values = cond ? '참입니다' : '거짓입니다';
console.log(values)


for(let i=1; i<=100; i++) {
  console.log(i)
}

for(let i=2; i<=10; i++) {
  for(let j=1; j<=9; j++) {
    if(!(i%2==0)) {
      console.log(i + '*' + j, '=', i*j)
    }
  }

}

let arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr[2])

for(let i=0; i<arr; i++) {
  arr.indexOf('라')
  
}

console.log(arr)

let number =10;
console.log(number)

